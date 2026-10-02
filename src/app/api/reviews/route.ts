import { NextRequest } from "next/server";
import { sendEnquiry } from "@/lib/email";
import { clientIp, field, isEmail, rateLimit, singleLine } from "@/lib/request";

export async function POST(request: NextRequest) {
  const ip = clientIp(request);

  const limit = rateLimit(`review:${ip}`, { limit: 3, windowMs: 60_000 });
  if (!limit.ok) {
    return Response.json(
      { error: "Too many submissions. Please try again shortly." },
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
  const content = field(body.content, 3000);
  const rating = Number(body.rating);

  if (!name || !email || !content) {
    return Response.json(
      { error: "Name, email and review are required." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return Response.json({ error: "Please choose a rating from 1 to 5." }, { status: 400 });
  }

  const text = [
    "New review submitted on the Ritepro website",
    "",
    `Name:   ${name}`,
    `Email:  ${email}`,
    `Rating: ${rating} / 5`,
    "",
    "Review",
    "------",
    content,
    "",
    `Go to the website and moderate this review: https://riteprocleaning.com.au/reviews`,
  ].join("\n");

  try {
    const result = await sendEnquiry({
      subject: `New review — ${name} — ${rating}★`,
      replyTo: email,
      text,
    });

    console.log(`[review] delivered via ${result.via} from ${ip}`);
    return Response.json({ success: true });
  } catch (error) {
    console.error("[review] delivery failed:", error);
    return Response.json(
      { error: "We couldn't submit your review right now. Please try again later." },
      { status: 502 }
    );
  }
}