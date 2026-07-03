"use client";

import Link from "next/link";
import { useState } from "react";

type Step = 0 | 1 | 2 | 3 | 4 | 5;

const stepLabels = ["Service", "Property", "Extras", "Schedule", "Details", "Quote"];

type ServiceType = "Standard Clean" | "Deep Clean" | "End of Lease" | "Commercial" | "Other";
type PropertyType = "House" | "Apartment" | "Townhouse";
type Frequency = "One-off" | "Weekly" | "Fortnightly" | "Monthly";

const serviceOptions: { value: ServiceType; label: string; desc: string }[] = [
  { value: "Standard Clean", label: "Standard Clean", desc: "Regular home cleaning" },
  { value: "Deep Clean", label: "Deep Clean", desc: "Thorough top-to-bottom" },
  { value: "End of Lease", label: "End of Lease", desc: "Bond-back guaranteed" },
  { value: "Commercial", label: "Commercial", desc: "Office & business" },
  { value: "Other", label: "Other", desc: "Something else" },
];

const propertyTypes: PropertyType[] = ["House", "Apartment", "Townhouse"];

const bedroomOptions = [1, 2, 3, 4, 5, 6];
const bathroomOptions = [1, 2, 3, 4];

const extraOptions = [
  { label: "Carpet Cleaning", price: 210 },
  { label: "Oven Cleaning", price: 190 },
  { label: "Window Cleaning", price: 400 },
  { label: "Pressure Washing", price: 700 },
];

const frequencies: Frequency[] = ["One-off", "Weekly", "Fortnightly", "Monthly"];

const recurringPricing = {
  Weekly: 149,
  Fortnightly: 159,
  Monthly: 169,
};

function getBasePrice(service: ServiceType, bedrooms: number, bathrooms: number): { price: string; isRange: boolean } | null {
  switch (service) {
    case "Standard Clean": {
      if (bedrooms === 1 && bathrooms === 1) return { price: "$150", isRange: false };
      if (bedrooms === 2 && bathrooms === 1) return { price: "$210", isRange: false };
      if (bedrooms === 3 && bathrooms === 2) return { price: "$290", isRange: false };
      const base = 150 + (bedrooms - 1) * 60;
      return { price: `$${base} – $${base + 40}`, isRange: true };
    }
    case "Deep Clean":
      return { price: "$280 – $550", isRange: true };
    case "End of Lease": {
      if (bedrooms === 2) return { price: "$450", isRange: false };
      if (bedrooms === 3) return { price: "$700", isRange: false };
      return { price: "$450 – $700", isRange: true };
    }
    default:
      return null;
  }
}

function getExtrasTotal(extras: string[]): number {
  return extras.reduce((total, label) => {
    const opt = extraOptions.find((e) => e.label === label);
    return total + (opt?.price ?? 0);
  }, 0);
}

function getSizeLabel(bedrooms: number): string {
  if (bedrooms <= 1) return "Small";
  if (bedrooms <= 3) return "Medium";
  return "Large";
}

export default function QuotePage() {
  const [step, setStep] = useState<Step>(0);
  const [service, setService] = useState<ServiceType | "">("");
  const [propertyType, setPropertyType] = useState<PropertyType | "">("");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [extras, setExtras] = useState<string[]>([]);
  const [frequency, setFrequency] = useState<Frequency>("One-off");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [whenNeeded, setWhenNeeded] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  function canProceed(): boolean {
    switch (step) {
      case 0: return service !== "";
      case 1: return propertyType !== "";
      case 2: return true;
      case 3: return true;
      case 4: return name.trim() !== "" && email.trim() !== "" && phone.trim() !== "";
      default: return true;
    }
  }

  function nextStep() {
    if (step < 5 && canProceed()) {
      if (step === 2 && service === "Commercial") {
        setStep(5 as Step);
        return;
      }
      setStep((step + 1) as Step);
    }
  }

  function prevStep() {
    if (step > 0) setStep((step - 1) as Step);
  }

  function toggleExtra(label: string) {
    setExtras((prev) =>
      prev.includes(label) ? prev.filter((e) => e !== label) : [...prev, label]
    );
  }

  const basePricing = service ? getBasePrice(service as ServiceType, bedrooms, bathrooms) : null;
  const extrasTotal = getExtrasTotal(extras);
  const showRecurringNote = service === "Standard Clean" && bedrooms === 1 && bathrooms === 1 && frequency !== "One-off";
  const commercialSize = getSizeLabel(bedrooms);

  async function handleSubmit() {
    setSending(true);
    setError("");

    const details = [
      `Property: ${propertyType || "N/A"}`,
      `Bedrooms: ${bedrooms}`,
      `Bathrooms: ${bathrooms}`,
      `Extras: ${extras.join(", ") || "None"}`,
      `Frequency: ${frequency}`,
      `Postcode: ${postcode || "N/A"}`,
      `When needed: ${whenNeeded || "N/A"}`,
      `Estimated price: ${basePricing?.price ?? "N/A"}${extrasTotal > 0 ? ` + $${extrasTotal} extras` : ""}`,
      ``,
      `Notes:`,
      `${notes || "None"}`,
    ].join("\n");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        service: service === "Commercial"
          ? `Commercial (${commercialSize})`
          : service,
        message: details,
      }),
    });

    setSending(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong. Please try again.");
    }
  }

  const stepContent = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h2 className="text-xl font-bold text-black mb-6">What do you need cleaned?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => { setService(opt.value); }}
                  className={`text-left p-5 rounded-lg border-2 transition-all ${
                    service === opt.value
                      ? "border-terracotta bg-terracotta/5"
                      : "border-gray-100 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className={`text-sm font-bold ${service === opt.value ? "text-terracotta" : "text-black"}`}>
                    {opt.label}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="text-xl font-bold text-black mb-6">Tell us about your property</h2>

            <label className="block text-sm font-medium text-gray-700 mb-2">Property type</label>
            <div className="flex gap-2 mb-6">
              {propertyTypes.map((pt) => (
                <button
                  key={pt}
                  type="button"
                  onClick={() => setPropertyType(pt)}
                  className={`flex-1 sm:flex-none px-5 py-3 sm:py-2.5 rounded-lg text-sm font-semibold border-2 transition-all ${
                    propertyType === pt
                      ? "border-terracotta bg-terracotta/5 text-terracotta"
                      : "border-gray-100 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {pt}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <div className="flex flex-wrap gap-2">
                  {bedroomOptions.map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setBedrooms(n)}
                      className={`w-11 h-11 sm:w-10 sm:h-10 rounded-lg text-sm font-semibold border-2 transition-all ${
                        bedrooms === n
                          ? "border-terracotta bg-terracotta/5 text-terracotta"
                          : "border-gray-100 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                <div className="flex flex-wrap gap-2">
                  {bathroomOptions.map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setBathrooms(n)}
                      className={`w-11 h-11 sm:w-10 sm:h-10 rounded-lg text-sm font-semibold border-2 transition-all ${
                        bathrooms === n
                          ? "border-terracotta bg-terracotta/5 text-terracotta"
                          : "border-gray-100 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        if (service === "Commercial") {
          return (
            <div>
              <h2 className="text-xl font-bold text-black mb-6">Office size</h2>
              <p className="text-sm text-gray-500 mb-6">
                We&apos;ll use the bedrooms you selected ({bedrooms}) as a rough guide.
                We&apos;ll confirm exact pricing during quoting.
              </p>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-sm font-bold text-black">Commercial pricing estimate</h3>
                <div className="mt-3 space-y-2 text-sm text-gray-600">
                  <p><strong>Small</strong> (&lt;5,000 sq ft): $600/visit</p>
                  <p><strong>Medium</strong> (5,000–15,000 sq ft): $1,000/visit</p>
                  <p><strong>Large</strong> (15,000–30,000 sq ft): $2,000/visit</p>
                </div>
                <p className="mt-3 text-xs text-gray-400">
                  Estimated range based on {commercialSize} office size.
                </p>
              </div>
            </div>
          );
        }

        return (
          <div>
            <h2 className="text-xl font-bold text-black mb-2">Any extras?</h2>
            <p className="text-sm text-gray-500 mb-6">Optional — select any additional services you need.</p>
            <div className="space-y-2">
              {extraOptions.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => toggleExtra(opt.label)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                    extras.includes(opt.label)
                      ? "border-terracotta bg-terracotta/5"
                      : "border-gray-100 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm font-medium text-black">{opt.label}</span>
                  <span className={`text-sm font-bold ${extras.includes(opt.label) ? "text-terracotta" : "text-gray-400"}`}>
                    +${opt.price}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-xl font-bold text-black mb-2">How often?</h2>
            <p className="text-sm text-gray-500 mb-6">Choose your cleaning schedule.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {frequencies.map((freq) => (
                <button
                  key={freq}
                  type="button"
                  onClick={() => setFrequency(freq)}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    frequency === freq
                      ? "border-terracotta bg-terracotta/5"
                      : "border-gray-100 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className={`text-sm font-bold ${frequency === freq ? "text-terracotta" : "text-black"}`}>
                    {freq}
                  </span>
                  {freq !== "One-off" && (
                    <p className="text-xs text-gray-400 mt-1">
                      from ${recurringPricing[freq]}/clean
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-xl font-bold text-black mb-2">Your details</h2>
            <p className="text-sm text-gray-500 mb-6">We&apos;ll send your quote to this email and phone.</p>

            <div className={`${submitted ? "" : "space-y-4"}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 sm:py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 sm:py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate" placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3.5 sm:py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate" placeholder="+61 4XX XXX XXX" />
                </div>
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                  <input id="postcode" type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)}
                    className="w-full px-4 py-3.5 sm:py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate" placeholder="4000" />
                </div>
              </div>

              <div>
                <label htmlFor="when" className="block text-sm font-medium text-gray-700 mb-1">When do you need it?</label>
                <input id="when" type="text" value={whenNeeded} onChange={(e) => setWhenNeeded(e.target.value)}
                  className="w-full px-4 py-3.5 sm:py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate" placeholder="ASAP, next week, specific date..." />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Anything else?</label>
                <textarea id="notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3.5 sm:py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate resize-none" placeholder="Access instructions, specific requests, pet info..." />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="text-xl font-bold text-black mb-6">Your quote</h2>

            <div className="bg-gray-50 rounded-lg border border-gray-100 p-6 mb-6">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2 text-gray-500">Service</td>
                    <td className="py-2 text-right font-medium text-black">{service}</td>
                  </tr>
                  {service !== "Commercial" && service !== "Other" && (
                    <>
                      <tr>
                        <td className="py-2 text-gray-500">Property</td>
                        <td className="py-2 text-right font-medium text-black">{propertyType} &middot; {bedrooms}BR / {bathrooms}Bath</td>
                      </tr>
                      {basePricing && (
                        <tr>
                          <td className="py-2 text-gray-500">Base price</td>
                          <td className="py-2 text-right font-bold text-black">{basePricing.price}</td>
                        </tr>
                      )}
                    </>
                  )}
                  {service === "Commercial" && (
                    <tr>
                      <td className="py-2 text-gray-500">Estimated size</td>
                      <td className="py-2 text-right font-medium text-black">{commercialSize}</td>
                    </tr>
                  )}
                  {extras.length > 0 && (
                    <tr>
                      <td className="py-2 text-gray-500">Extras ({extras.length})</td>
                      <td className="py-2 text-right font-medium text-black">+${extrasTotal}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-2 text-gray-500">Schedule</td>
                    <td className="py-2 text-right font-medium text-black">{frequency}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {basePricing && !basePricing.isRange && extrasTotal === 0 && (
              <div className="text-center mb-6">
                <p className="text-3xl sm:text-4xl font-black text-black">{basePricing.price}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {frequency === "One-off" ? "One-off clean" : `${frequency} clean`}
                </p>
              </div>
            )}

            {basePricing && (basePricing.isRange || extrasTotal > 0) && (
              <div className="text-center mb-6">
                <p className="text-3xl sm:text-4xl font-black text-black">{basePricing.price}</p>
                {extrasTotal > 0 && (
                  <p className="text-sm text-gray-500 mt-1">+ ${extrasTotal} in extras</p>
                )}
                {basePricing.isRange && (
                  <p className="text-xs text-gray-400 mt-1">Final price depends on property condition and exact scope</p>
                )}
              </div>
            )}

            {showRecurringNote && (
              <div className="p-4 bg-sage/10 rounded-lg border border-sage/20 text-center mb-6">
                <p className="text-sm font-bold text-sage">
                  {frequency === "Weekly" && "Save with weekly cleaning — from $149/visit"}
                  {frequency === "Fortnightly" && "Fortnightly cleaning — from $159/visit"}
                  {frequency === "Monthly" && "Monthly cleaning — from $169/visit"}
                </p>
                <p className="text-xs text-gray-500 mt-1">Recurring rates available for regular bookings</p>
              </div>
            )}

            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={sending}
              className="w-full bg-black text-white py-4 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {sending ? "Sending..." : "Request This Quote"}
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">
              We&apos;ll contact you as soon as possible, usually within 1–2 hours.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-black text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold">Get an Instant Quote</h1>
            <p className="mt-3 text-lg text-gray-300 max-w-xl">
              Tell us about your property and get an instant price — no waiting, no obligation.
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
                Your quote request has been sent. We&apos;ll contact you as soon as possible, usually within 1–2 hours.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block text-sm text-gray-600 font-semibold hover:text-black underline"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-black text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Get an Instant Quote</h1>
          <p className="mt-3 text-lg text-gray-300 max-w-xl">
            Tell us about your property and get an instant price — no waiting, no obligation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Step {step + 1} of 6
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

            {step < 5 && (
              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceed()}
                className="px-8 py-3 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors disabled:opacity-40"
              >
                {step === 4 ? "Review Quote" : "Next"}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Contact info sidebar */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-100 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
              <div>
                <span className="text-gray-400 font-semibold">Phone</span>
                <p className="text-black font-medium">+61 434 139 623</p>
              </div>
              <div>
                <span className="text-gray-400 font-semibold">Email</span>
                <p className="text-black font-medium">riteprocleaningservices@gmail.com</p>
              </div>
              <div>
                <span className="text-gray-400 font-semibold">Location</span>
                <p className="text-black font-medium">Brisbane, QLD</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
