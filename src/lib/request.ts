type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
let lastSweep = Date.now();

/**
 * Best-effort per-instance rate limit. Enough to stop casual abuse and
 * mail-bombing of the inbox; serverless instances are ephemeral so treat
 * this as a first line of defence, not a hard guarantee.
 */
export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
) {
  const now = Date.now();

  // periodically drop expired buckets so the map can't grow unbounded
  if (now - lastSweep > windowMs) {
    lastSweep = now;
    for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
  }

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfter: 0 };
  }

  bucket.count += 1;
  if (bucket.count > limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }
  return { ok: true, remaining: limit - bucket.count, retryAfter: 0 };
}

export function clientIp(request: Request) {
  const fwd = request.headers.get("x-forwarded-for");
  return (
    fwd?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

/** Coerces unknown JSON to a trimmed string, capped so nothing huge lands in an email. */
export function field(value: unknown, max = 4000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

/**
 * For values rendered on their own labelled line (name, phone, service).
 * Collapses newlines so a caller can't inject extra lines into the email
 * body and forge fields the recipient would trust.
 */
export function singleLine(value: unknown, max = 200): string {
  return field(value, max)
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}