"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "61434139623";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-600";

const fieldClass =
  "w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-terracotta focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/15";

const contactDetails = [
  {
    label: "Head office",
    value: "Brisbane, Queensland 4000",
    href: undefined,
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "riteprocleaningservices@gmail.com",
    href: "mailto:riteprocleaningservices@gmail.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Call or WhatsApp",
    value: "+61 434 139 623",
    href: "tel:+61434139623",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Ritepro enquiry from ${name}${company ? ` (${company})` : ""}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSubject: ${subject || "General enquiry"}\nMessage: ${message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  }

  function resetForm() {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <main className="bg-gray-50">
        <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:py-28">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10 text-terracotta ring-8 ring-terracotta/5">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900">
            Your message is ready
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-gray-500">
            WhatsApp should have opened in a new tab with your enquiry filled
            in. Press send there and we&apos;ll get back to you within 1–2
            business hours.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Open WhatsApp
            </a>
            <button
              onClick={resetForm}
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:text-black"
            >
              Send another message
            </button>
          </div>
          <Link
            href="/"
            className="mt-6 text-sm font-medium text-gray-500 underline underline-offset-4 transition-colors hover:text-terracotta"
          >
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div>
      {/* HERO */}
      <header className="relative overflow-hidden bg-black text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-48 right-0 h-[30rem] w-[30rem] rounded-full bg-terracotta/20 blur-[140px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
                <span className="h-px w-8 bg-terracotta" />
                Ritepro Cleaning · Brisbane
              </p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Get in touch with{" "}
                <span className="text-terracotta-light">our team</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Planning a one-off clean or a regular service? Tell us what you
                need and we&apos;ll come back to you within one business day —
                usually much sooner.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:col-span-4 lg:justify-end">
              {["Replies in 1–2 hours", "Fully insured", "Brisbane local"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* LEFT — DETAILS */}
            <aside className="min-w-0 lg:col-span-5">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                Contact details
              </h2>

              <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                {contactDetails.map((item) => {
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                        {item.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                          {item.label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-medium text-gray-900">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-gray-50"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="group flex items-start gap-4 rounded-xl p-4"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Response time
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      We reply to every enquiry within 1–2 business hours. For
                      urgent jobs, call or message us directly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl bg-black p-6 text-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light">
                  Need it sooner?
                </p>
                <h3 className="mt-2 text-lg font-bold">
                  Talk to a real person.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Our Brisbane team is available during business hours for
                  urgent cleaning requests.
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <a
                    href="tel:+61434139623"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    Call us
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>

            {/* RIGHT — FORM */}
            <section
              className="min-w-0 lg:col-span-7"
              aria-labelledby="contact-form-heading"
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-6 sm:px-8">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                    <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                    Send an enquiry
                  </p>
                  <h2
                    id="contact-form-heading"
                    className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                  >
                    Tell us about your space
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    The more detail you share, the faster we can give you an
                    accurate quote.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 px-6 py-7 sm:px-8">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name <span className="text-terracotta">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={fieldClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className={fieldClass}
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email <span className="text-terracotta">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={fieldClass}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={fieldClass}
                        placeholder="+61 4XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={fieldClass}
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message <span className="text-terracotta">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${fieldClass} resize-y`}
                      placeholder="Tell us about your home or business, the service you need, and any preferred dates."
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-center gap-2 text-xs text-gray-500">
                      <WhatsAppIcon className="h-4 w-4 shrink-0 text-gray-400" />
                      Opens WhatsApp with your message ready to send.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-terracotta px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                    >
                      Send message
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>

                  <p className="border-t border-gray-100 pt-4 text-xs leading-relaxed text-gray-400">
                    Prefer email? Write to{" "}
                    <a
                      href="mailto:riteprocleaningservices@gmail.com"
                      className="font-medium text-gray-600 underline underline-offset-4 transition-colors hover:text-terracotta"
                    >
                      riteprocleaningservices@gmail.com
                    </a>
                    . We&apos;ll never share your details.
                  </p>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
