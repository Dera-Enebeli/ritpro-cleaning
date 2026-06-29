import { Resend } from "resend";
import { NextRequest } from "next/server";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return Response.json(
        { error: "Name, email, service and message are required." },
        { status: 400 }
      );
    }

    const emailText = [
      `New enquiry from ritprocleaning.co.uk`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${service}`,
      ``,
      `Message:`,
      `${message}`,
    ].join("\n");

    if (resend) {
      await resend.emails.send({
        from: "Ritpro Contact <onboarding@resend.dev>",
        to: "info@ritprocleaning.co.uk",
        subject: `New enquiry from ${name} — ${service}`,
        text: emailText,
      });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
