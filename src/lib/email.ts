import { Resend } from "resend";
import nodemailer from "nodemailer";

/** The address published on the website — every enquiry lands here. */
export const ENQUIRY_EMAIL = "riteprocleaningservices@gmail.com";

/** The number published on the website, surfaced in the alert email. */
export const ENQUIRY_PHONE = "+61 434 139 623";

const BRAND = "Ritepro Cleaning";

export type SendResult = { ok: true; via: "resend" | "smtp" };

export type Enquiry = {
  subject: string;
  text: string;
  /** The customer's address, so staff can just hit reply. */
  replyTo?: string;
  to?: string;
};

let smtpTransport: nodemailer.Transporter | null = null;
let resendClient: Resend | null = null;
let resendKeyUsed: string | null = null;

function getResend(key: string) {
  if (!resendClient || resendKeyUsed !== key) {
    resendClient = new Resend(key);
    resendKeyUsed = key;
  }
  return resendClient;
}

function getSmtp() {
  if (!smtpTransport) {
    smtpTransport = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }
  return smtpTransport;
}

/**
 * Strips CR/LF so user input can never inject extra SMTP headers,
 * and caps the length so a huge field can't blow up the message.
 */
function headerSafe(value: string, max = 200) {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function errText(e: unknown) {
  return e instanceof Error ? e.message : String(e);
}

/**
 * Sends an enquiry to the business inbox.
 * Tries Resend first (reliable from serverless), then falls back to
 * Gmail SMTP. Throws with the aggregated reason if every method fails.
 */
export async function sendEnquiry(enquiry: Enquiry): Promise<SendResult> {
  const to = enquiry.to ?? ENQUIRY_EMAIL;
  const subject = headerSafe(enquiry.subject);
  const replyTo =
    enquiry.replyTo && validEmail(enquiry.replyTo)
      ? headerSafe(enquiry.replyTo, 254)
      : undefined;
  const failures: string[] = [];

  // --- Primary: Resend ---
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resend = getResend(resendKey);
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM ?? `${BRAND} <onboarding@resend.dev>`,
        to: [to],
        replyTo,
        subject,
        text: enquiry.text,
      });
      if (error) throw new Error(error.message);
      if (!data?.id) throw new Error("no message id returned");
      return { ok: true, via: "resend" };
    } catch (e) {
      failures.push(`resend=${errText(e)}`);
    }
  } else {
    failures.push("resend=RESEND_API_KEY not set");
  }

  // --- Fallback: Gmail SMTP ---
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    try {
      await getSmtp().sendMail({
        from: `"${BRAND}" <${process.env.GMAIL_USER}>`,
        to,
        replyTo,
        subject,
        text: enquiry.text,
      });
      return { ok: true, via: "smtp" };
    } catch (e) {
      failures.push(`smtp=${errText(e)}`);
    }
  } else {
    failures.push("smtp=GMAIL_USER/GMAIL_APP_PASSWORD not set");
  }

  throw new Error(`no delivery method succeeded -> ${failures.join(" | ")}`);
}

/**
 * Formats an enquiry so the phone number is impossible to miss and
 * the whole thing reads well on a phone.
 */
export function formatEnquiry(e: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  details: string;
}) {
  const phone = e.phone?.trim() || "Not provided";
  const lines = [
    "New website enquiry",
    "",
    `Name:     ${e.name}`,
    `Email:    ${e.email}`,
    `Phone:    ${phone}`,
    `Service:  ${e.service}`,
    "",
    "Details",
    "-------",
    e.details,
    "",
    "-----",
    `Call back on ${phone} — or just hit reply to email ${e.email}.`,
    `Sent from the Ritepro Cleaning website (${ENQUIRY_EMAIL}).`,
  ];
  return lines.join("\n");
}