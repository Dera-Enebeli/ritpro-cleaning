"use client";

import { useState } from "react";
import { InlineTestimonial } from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";

type Step = 0 | 1 | 2;

const stepLabels = ["Service", "Details", "Send"];

const serviceOptions = [
  "Regular residential cleaning",
  "Commercial cleaning",
  "Airbnb cleaning",
  "End-of-lease cleaning",
  "NDIS cleaning",
  "Carpet cleaning",
  "Pressure washing",
  "Window cleaning",
  "Builders' clean",
  "Body corporate cleaning",
  "Other",
];

const WHATSAPP_NUMBER = "61434139623";

export default function ContactPage() {
  const [step, setStep] = useState<Step>(0);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function canProceed(): boolean {
    switch (step) {
      case 0: return service !== "";
      case 1: return name.trim() !== "" && email.trim() !== "";
      default: return true;
    }
  }

  function nextStep() {
    if (step < 2 && canProceed()) {
      setStep((step + 1) as Step);
    }
  }

  function prevStep() {
    if (step > 0) setStep((step - 1) as Step);
  }

  function handleSubmit() {
    setError("");

    const text = [
      `Hi Ritepro Cleaning,`,
      ``,
      `New enquiry from: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${service}`,
      ``,
      `Message:`,
      `${message}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setSubmitted(true);
  }

  function stepContent() {
    switch (step) {
      case 0:
        return (
          <div>
            <h2 className="text-xl font-bold text-black mb-6">What service do you need?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setService(opt)}
                  className={`text-left p-5 rounded-lg border-2 transition-all ${
                    service === opt
                      ? "border-terracotta bg-terracotta/5"
                      : "border-gray-100 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className={`text-sm font-bold ${service === opt ? "text-terracotta" : "text-black"}`}>
                    {opt}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="text-xl font-bold text-black mb-2">Your details</h2>
            <p className="text-sm text-gray-500 mb-6">We&apos;ll use these to get back to you.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 sm:py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 sm:py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate focus:border-transparent" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3.5 sm:py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate focus:border-transparent" placeholder="+61 434 139 623" />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-xl font-bold text-black mb-2">Your message</h2>
            <p className="text-sm text-gray-500 mb-6">Tell us about your cleaning needs.</p>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea id="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate focus:border-transparent resize-none"
                placeholder="Tell us about your cleaning needs..." />
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-100 p-6 mb-6">
              <h3 className="text-sm font-bold text-black mb-3">Summary</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2 text-gray-500">Service</td>
                    <td className="py-2 text-right font-medium text-black">{service}</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">Name</td>
                    <td className="py-2 text-right font-medium text-black">{name}</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">Email</td>
                    <td className="py-2 text-right font-medium text-black">{email}</td>
                  </tr>
                  {phone && (
                    <tr>
                      <td className="py-2 text-gray-500">Phone</td>
                      <td className="py-2 text-right font-medium text-black">{phone}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

            <InlineTestimonial review={reviews.find((r) => r.id === "r3")!} />

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-black text-white py-4 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors"
            >
              Send via WhatsApp
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        );
    }
  }

  if (submitted) {
    return (
      <div>
        <section className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
            <p className="mt-3 text-lg text-gray-300 max-w-xl">
              Have a question or want to discuss your cleaning needs? Send us a
              message and we will get back to you within 24 hours.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-black">Thank You!</h3>
              <p className="mt-2 text-gray-500 text-sm">
                Your message has been sent. We will be in touch within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(0);
                  setService("");
                  setName("");
                  setEmail("");
                  setPhone("");
                  setMessage("");
                }}
                className="mt-6 text-sm text-gray-600 font-semibold hover:text-black underline"
              >
                Send another message
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-3 text-lg text-gray-300 max-w-xl">
            Have a question or want to discuss your cleaning needs? Send us a
            message and we will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* Progress */}
              <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-8 sm:mb-10">
                {stepLabels.map((label, i) => (
                  <div key={label} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-[10px] sm:text-xs font-bold transition-colors ${
                        i <= step
                          ? "bg-terracotta text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {i + 1}
                    </div>
                    {i < stepLabels.length - 1 && (
                      <div
                        className={`w-3 sm:w-8 lg:w-12 h-0.5 mx-0.5 sm:mx-1 transition-colors ${
                          i < step ? "bg-terracotta" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step label */}
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider text-center mb-2">
                Step {step + 1} of 3
              </p>
              <p className="text-center text-sm font-medium text-gray-700 mb-8">{stepLabels[step]}</p>

              {/* Content */}
              {stepContent()}

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    step === 0
                      ? "invisible"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Back
                </button>

                {step < 2 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="px-8 py-3 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors disabled:opacity-40"
                  >
                    {step === 1 ? "Review Message" : "Next"}
                  </button>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                Other Ways to Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black">Phone</h3>
                    <p className="text-sm text-gray-500">+61 434 139 623</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black">Email</h3>
                    <p className="text-sm text-gray-500">
                      riteprocleaningservices@gmail.com
                    </p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/61434139623`}
                  target="_blank"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black group-hover:text-slate transition-colors">WhatsApp</h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      Chat with us on WhatsApp
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-sm font-bold text-black uppercase tracking-wider">
                  Business Hours
                </h3>
                <div className="mt-3 space-y-1 text-sm text-gray-500">
                  <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 9:00 AM – 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
