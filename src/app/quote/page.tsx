"use client";

import { useState } from "react";
import { InlineTestimonial } from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";
import { serviceCategories, servicesFor } from "@/data/services";
import type { ServiceCategory } from "@/data/services";

type Step = 0 | 1 | 2;
const stepLabels = ["Service & Property", "Schedule & Extras", "Details & Quote"];

type PropertyType = "House" | "Apartment" | "Townhouse";
type Frequency = "One-off" | "Weekly" | "Fortnightly" | "Monthly";

const propertyTypes: PropertyType[] = ["House", "Apartment", "Townhouse"];
const bedroomOptions = [1, 2, 3, 4, 5, 6];
const bathroomOptions = [1, 2, 3, 4];
const floorAreas = [
  "Under 500 m²",
  "500 – 1,500 m²",
  "1,500 – 3,000 m²",
  "3,000 m²+",
];
const extraOptions = [
  "Carpet Cleaning",
  "Oven Cleaning",
  "Window Cleaning",
  "Pressure Washing",
];
const frequencies: Frequency[] = ["One-off", "Weekly", "Fortnightly", "Monthly"];

const labelClass =
  "mb-2 block text-xs font-extrabold uppercase tracking-wider text-gray-400";
const selectClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400";

export default function QuotePage() {
  const [step, setStep] = useState<Step>(0);
  const [category, setCategory] = useState<ServiceCategory | "">("");
  const [serviceValue, setServiceValue] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyType | "">("");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [floorArea, setFloorArea] = useState("");
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

  const availableServices = category ? servicesFor(category) : [];
  const selectedService = availableServices.find(
    (service) => service.value === serviceValue
  );
  const isResidential = category === "Residential";

  function canProceed(): boolean {
    if (step === 0) {
      if (!category || !serviceValue) return false;
      return isResidential ? propertyType !== "" : floorArea !== "";
    }
    return true;
  }

  function nextStep() {
    if (step < 2 && canProceed()) setStep((step + 1) as Step);
  }
  function prevStep() {
    if (step > 0) setStep((step - 1) as Step);
  }
  function toggleExtra(label: string) {
    setExtras((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  }
  function selectCategory(value: ServiceCategory | "") {
    setCategory(value);
    setServiceValue("");
  }

  const activeExtras = isResidential ? extras : [];
  const serviceLabel =
    category && selectedService
      ? `${category} — ${selectedService.label}`
      : "Not selected";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    const details = [
      `Category: ${category || "N/A"}`,
      `Service: ${selectedService?.label ?? "N/A"}`,
      isResidential
        ? `Property: ${propertyType || "N/A"} · ${bedrooms} bedroom(s) / ${bathrooms} bathroom(s)`
        : `Floor area: ${floorArea || "N/A"}`,
      `Frequency: ${frequency}`,
      `Extras: ${isResidential ? activeExtras.join(", ") || "None" : "N/A"}`,
      `Postcode: ${postcode || "N/A"}`,
      `When needed: ${whenNeeded || "N/A"}`,
      `Price: To be confirmed before booking`,
      `Notes: ${notes || "None"}`,
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: serviceLabel,
          message: details,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        return;
      }
      const data = await res.json().catch(() => null);
      setError(
        data?.error ??
          "Something went wrong. Please try again, or call us on +61 434 139 623."
      );
    } catch {
      setError(
        "We couldn't reach our server. Check your connection and try again, or WhatsApp us on +61 434 139 623."
      );
    } finally {
      setSending(false);
    }
  }

  const stepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-black mb-2">
                What cleaning do you need?
              </h2>
              <p className="text-sm text-gray-500">
                Choose the type of clean you need and tell us about the space.
              </p>
            </div>

            <div>
              <label htmlFor="service-category" className={labelClass}>
                Service type
              </label>
              <select
                id="service-category"
                value={category}
                onChange={(event) =>
                  selectCategory(event.target.value as ServiceCategory | "")
                }
                className={selectClass}
                required
              >
                <option value="">Select Residential or Commercial</option>
                {serviceCategories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} — {option.description}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="service-option" className={labelClass}>
                What do you need cleaned?
              </label>
              <select
                id="service-option"
                value={serviceValue}
                onChange={(event) => setServiceValue(event.target.value)}
                className={selectClass}
                disabled={!category}
                required
              >
                <option value="">
                  {category
                    ? "Select a service"
                    : "Choose a service type first"}
                </option>
                {availableServices.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {selectedService && (
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {selectedService.description}
                </p>
              )}
            </div>

            {isResidential ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label htmlFor="property-type" className={labelClass}>
                    Property type
                  </label>
                  <select
                    id="property-type"
                    value={propertyType}
                    onChange={(event) =>
                      setPropertyType(event.target.value as PropertyType | "")
                    }
                    className={selectClass}
                    required
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="bedrooms" className={labelClass}>
                    Bedrooms
                  </label>
                  <select
                    id="bedrooms"
                    value={bedrooms}
                    onChange={(event) => setBedrooms(Number(event.target.value))}
                    className={selectClass}
                  >
                    {bedroomOptions.map((count) => (
                      <option key={count} value={count}>
                        {count} {count === 1 ? "bedroom" : "bedrooms"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="bathrooms" className={labelClass}>
                    Bathrooms
                  </label>
                  <select
                    id="bathrooms"
                    value={bathrooms}
                    onChange={(event) => setBathrooms(Number(event.target.value))}
                    className={selectClass}
                  >
                    {bathroomOptions.map((count) => (
                      <option key={count} value={count}>
                        {count} {count === 1 ? "bathroom" : "bathrooms"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor="floor-area" className={labelClass}>
                  Approximate floor area
                </label>
                <select
                  id="floor-area"
                  value={floorArea}
                  onChange={(event) => setFloorArea(event.target.value)}
                  className={selectClass}
                  disabled={!category}
                  required
                >
                  <option value="">Select floor area</option>
                  {floorAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        );
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-black mb-2">
                Schedule & Extras
              </h2>
              <p className="text-sm text-gray-500">
                Choose how often you need us and any add-on services.
              </p>
            </div>

            <div>
              <label htmlFor="frequency" className={labelClass}>
                How often?
              </label>
              <select
                id="frequency"
                value={frequency}
                onChange={(event) =>
                  setFrequency(event.target.value as Frequency)
                }
                className={selectClass}
              >
                {frequencies.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {isResidential && (
              <div>
                <span className={labelClass}>Optional extras</span>
                <div className="space-y-2">
                  {extraOptions.map((option) => {
                    const checked = extras.includes(option);
                    return (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all ${
                          checked
                            ? "border-terracotta bg-terracotta/5"
                            : "border-gray-100 bg-white hover:border-gray-300"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleExtra(option)}
                            className="h-4 w-4 accent-terracotta"
                          />
                          <span className="text-sm font-medium text-black">
                            {option}
                          </span>
                        </span>
                        <svg
                          className={`h-5 w-5 ${
                            checked ? "text-terracotta" : "text-gray-200"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-sm font-bold text-black">
                Every quote is confirmed by our team
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                We use your details to price the job properly — service,
                property size, condition, access and any extras. You will
                receive one clear price before anything is booked, with no
                hardcoded estimates or surprises.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-black mb-2">
                Your details & quote
              </h2>
              <p className="text-sm text-gray-500">
                Confirm your details and we will send your quote.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30"
                  placeholder="+61 4XX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                  Postcode
                </label>
                <input
                  id="postcode"
                  type="text"
                  value={postcode}
                  onChange={(event) => setPostcode(event.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30"
                  placeholder="4305"
                />
              </div>
            </div>

            <div>
              <label htmlFor="when" className="block text-sm font-medium text-gray-700 mb-1">
                When do you need it?
              </label>
              <input
                id="when"
                type="text"
                value={whenNeeded}
                onChange={(event) => setWhenNeeded(event.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30"
                placeholder="ASAP, next week, specific date..."
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                id="notes"
                rows={3}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30 resize-none"
                placeholder="Access instructions, pet info, specific requests..."
              />
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-black mb-3">
                Your quote summary
              </h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2 text-gray-500">Service</td>
                    <td className="py-2 text-right font-medium text-black">
                      {serviceLabel}
                    </td>
                  </tr>
                  {isResidential ? (
                    <tr>
                      <td className="py-2 text-gray-500">Property</td>
                      <td className="py-2 text-right font-medium text-black">
                        {propertyType || "—"} · {bedrooms}BR / {bathrooms}Bath
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td className="py-2 text-gray-500">Floor area</td>
                      <td className="py-2 text-right font-medium text-black">
                        {floorArea || "—"}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-2 text-gray-500">Schedule</td>
                    <td className="py-2 text-right font-medium text-black">
                      {frequency}
                    </td>
                  </tr>
                  {isResidential && activeExtras.length > 0 && (
                    <tr>
                      <td className="py-2 text-gray-500">Extras</td>
                      <td className="py-2 text-right font-medium text-black">
                        {activeExtras.join(", ")}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="text-center mt-5">
                <p className="text-2xl font-black text-black">
                  Price confirmed before booking
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  No hardcoded estimates — we price your actual job.
                </p>
              </div>
            </div>

            <InlineTestimonial review={reviews.find((review) => review.id === "r9")!} />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-black text-white py-4 rounded-xl text-sm font-extrabold hover:bg-gray-800 transition-colors disabled:opacity-40"
            >
              {sending ? "Sending..." : "Request This Quote"}
            </button>
          </form>
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
            <h1 className="text-3xl sm:text-5xl font-extrabold">
              Free quote request
            </h1>
            <p className="mt-3 text-lg text-gray-300 max-w-xl">
              Thanks for reaching out. A Ritepro team member will contact you
              shortly.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-xl shadow-gray-100/50">
              <h3 className="text-2xl font-extrabold text-black">
                Request received
              </h3>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Thank you. A member of the Ritepro team will review your request
                and be in touch shortly — usually within the hour.
              </p>
              <div className="mt-8 w-10 h-0.5 bg-terracotta mx-auto" />
              <p className="mt-4 text-xs text-gray-400">
                We respond between 6am and 8pm, 7 days a week.
              </p>
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
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Get a free quote
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-xl">
            Tell us about your property and we will confirm a tailored price
            before you book. No hardcoded estimates, no obligation.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-1 mb-8">
            {stepLabels.map((label, index) => (
              <div key={label} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full text-xs font-extrabold flex items-center justify-center transition-colors ${
                    index <= step
                      ? "bg-terracotta text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {index + 1}
                </div>
                {index < stepLabels.length - 1 && (
                  <div
                    className={`w-8 lg:w-16 h-0.5 mx-1 transition-colors ${
                      index < step ? "bg-terracotta" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider text-center mb-2">
            Step {step + 1} of 3
          </p>
          <p className="text-center text-sm font-medium text-gray-700 mb-8">
            {stepLabels[step]}
          </p>
          {stepContent()}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${
                step === 0 ? "invisible" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Back
            </button>
            {step < 2 && (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="px-8 py-3 bg-black text-white rounded-xl text-sm font-extrabold hover:bg-gray-800 transition-colors disabled:opacity-40"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
