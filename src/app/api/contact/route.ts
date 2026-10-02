import { NextRequest } from "next/server";
import { formatEnquiry, sendEnquiry } from "@/lib/email";
import { clientIp, field, isEmail, rateLimit, singleLine } from "@/lib/request";

export async function POST(request: NextRequest) {
  const ip = clientIp(request);

  const limit = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 });
  if (!limit.ok) {
    return Response.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = singleLine(body.name, 120);
  const email = singleLine(body.email, 254);
  const phone = singleLine(body.phone, 40);
  const service = singleLine(body.service, 120);
  const message = field(body.message, 6000);

  if (!name || !email || !service || !message) {
    return Response.json(
      { error: "Name, email, service and message are required." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const result = await sendEnquiry({
      subject: `New website enquiry — ${name} — ${service}`,
      replyTo: email,
      text: formatEnquiry({ name, email, phone, service, details: message }),
    });

    console.log(`[enquiry] delivered via ${result.via} from ${ip}`);
    return Response.json({ success: true });
  } catch (error) {
    // Real cause stays in the server log; the client only sees a safe message.
    console.error("[enquiry] delivery failed:", error);
    return Response.json(
      {
        error:
          "We couldn't send your request right now. Please call us on +61 434 139 623 or WhatsApp us instead.",
      },
      { status: 502 }
    );
  }
}