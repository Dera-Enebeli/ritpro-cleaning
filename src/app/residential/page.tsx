import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewCard } from "@/components/ReviewCard";
import { googleRating, reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Residential Cleaning Brisbane",
  alternates: { canonical: "/residential" },
  description:
    "Professional home cleaning services in Brisbane. Weekly, fortnightly, monthly, deep cleaning, end-of-lease, and more. From $150. Insured and satisfaction guaranteed.",
  openGraph: {
    title: "Residential Cleaning Brisbane | Home Cleaning Services",
    description:
      "Professional home cleaning services in Brisbane. Weekly, fortnightly, monthly, deep cleaning, end-of-lease, and more. From $150. Insured and satisfaction guaranteed.",
  },
};

const services = [
  {
    name: "Regular clean",
    tagline: "Weekly · Fortnightly · Monthly",
    description:
      "The same thorough routine every visit — kitchens, bathrooms, floors, surfaces and the small details that keep a home feeling looked after.",
    from: "$150",
    popular: true,
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12 11.54 2.71a1.5 1.5 0 0 1 2.12 0l8.29 8.29m-18 0h18m-18 0V21a.75.75 0 0 0 .75.75h4.5v-5.25a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v5.25h4.5a.75.75 0 0 0 .75-.75v-9"
        />
      </svg>
    ),
  },
  {
    name: "Deep clean",
    tagline: "One-off reset",
    description:
      "A top-to-bottom reset for built-up dust, grout, appliances and the areas a regular clean does not reach.",
    from: "$280",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
        />
      </svg>
    ),
  },
  {
    name: "End-of-lease",
    tagline: "Bond-back guarantee",
    description:
      "A checklist-driven move-out clean built around the exit condition report, with a bond-back guarantee.",
    from: "$450",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
        />
      </svg>
    ),
  },
  {
    name: "One-off & Airbnb",
    tagline: "Turnovers · Move-ins · Resets",
    description:
      "Guest turnovers, move-in cleans and seasonal resets — one visit, held to the same standard as our regular service.",
    from: "$220",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
        />
      </svg>
    ),
  },
];

const alsoAvailable = [
  "Move-in / move-out",
  "Spring clean",
  "NDIS cleaning",
  "Aged care homes",
  "Apartment cleans",
  "Carpet steam cleaning",
];

const included = [
  {
    title: "Kitchens",
    desc: "Benches, splashbacks, stovetops, sinks and cupboard fronts.",
  },
  {
    title: "Bathrooms",
    desc: "Showers, screens, tiles, toilets, vanities and mirrors.",
  },
  {
    title: "Living & bedrooms",
    desc: "Dusting, surfaces, skirting boards, sills and mirrors.",
  },
  {
    title: "Floors",
    desc: "Vacuumed and mopped throughout, including edges and corners.",
  },
  {
    title: "High-touch points",
    desc: "Light switches, handles, rails and door frames.",
  },
  {
    title: "Final walkthrough",
    desc: "A room-by-room check before we pack up and leave.",
  },
];

const standardPricing = [
  { label: "1 Bed / 1 Bath", price: "$150" },
  { label: "2 Bed / 1 Bath", price: "$210" },
  { label: "3 Bed / 2 Bath", price: "$290" },
];

const eolPricing = [
  { label: "2 Bedroom", price: "$450" },
  { label: "3 Bedroom", price: "$700" },
];

const addonPricing = [
  { label: "Carpet cleaning (3 rooms)", price: "$170" },
  { label: "Oven cleaning", price: "$150" },
  { label: "Window cleaning (house)", price: "$320" },
  { label: "Pressure washing", price: "$550" },
  { label: "Airbnb turnover", price: "$220" },
];

const recurringPricing = [
  { freq: "Weekly", price: "from $149" },
  { freq: "Fortnightly", price: "from $159" },
  { freq: "Monthly", price: "from $169" },
];

const steps = [
  {
    number: "01",
    title: "Tell us about your home",
    desc: "Choose your service, property size and any extras in the instant quote tool.",
  },
  {
    number: "02",
    title: "Get a fixed price",
    desc: "We confirm the scope and price before anything is booked. No hourly guesswork.",
  },
  {
    number: "03",
    title: "We clean. You relax.",
    desc: "A vetted team arrives with products and equipment, works to a checklist and leaves the place spotless.",
  },
];

const faqs = [
  {
    question: "What is included in a regular clean?",
    answer:
      "Kitchens, bathrooms, living areas, bedrooms, floors and high-touch points. Every visit follows the same room-by-room checklist, so the standard does not change from clean to clean.",
  },
  {
    question: "Do I need to be home while you clean?",
    answer:
      "No. Most regular customers give us access instructions and come home to a clean house. For the first visit, we recommend being there or arranging entry so we can confirm the scope with you.",
  },
  {
    question: "Do you bring your own products and equipment?",
    answer:
      "Yes. Our teams arrive with professional products, equipment and cloths. If you would prefer us to use your own products, just let us know before the visit.",
  },
  {
    question: "What is the difference between a regular and deep clean?",
    answer:
      "A regular clean maintains a home that is already in good condition. A deep clean adds the built-up areas — grout, vents, skirting boards, appliance exteriors and detailed edges — for homes that need a full reset.",
  },
  {
    question: "Are your cleaners insured and police-checked?",
    answer:
      "Yes. Every cleaner is police-checked, insured and trained to our checklist. Ritepro is fully insured as a business, so you are covered while we are in your home.",
  },
  {
    question: "What happens if something is missed?",
    answer:
      "Tell us within 24 hours and we will return to fix it. If the item was inside the agreed scope, there is no extra charge.",
  },
  {
    question: "Can I request the same cleaner each visit?",
    answer:
      "For regular bookings, yes — we assign the same cleaner wherever possible and keep you updated if anything changes.",
  },
];

const suburbs = [
  "New Farm",
  "Teneriffe",
  "Newstead",
  "Fortitude Valley",
  "Spring Hill",
  "Kangaroo Point",
  "West End",
  "South Brisbane",
  "Paddington",
  "Milton",
  "Toowong",
  "Bardon",
  "Ashgrove",
  "Indooroopilly",
  "Bulimba",
  "Hawthorne",
  "Balmoral",
  "Morningside",
  "Camp Hill",
  "Coorparoo",
  "Carindale",
  "Carina",
];

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={className} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ResidentialPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-8 lg:py-24">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              <span className="h-px w-8 bg-terracotta" />
              Residential cleaning · Brisbane
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              House cleaning in Brisbane,{" "}
              <span className="text-terracotta">done properly.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Regular, deep, bond and one-off cleans for homes across Brisbane.
              Fixed scope, insured cleaners and a price you see before you book.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
              >
                Get my free quote
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-100"
              >
                See pricing
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-sm font-semibold text-gray-900">
                  {googleRating.stars}
                </span>
                <span className="text-sm text-gray-500">
                  from {googleRating.count} Google reviews
                </span>
              </div>
              <span className="hidden h-4 w-px bg-gray-300 sm:block" />
              <span className="text-sm text-gray-500">
                Police-checked &amp; fully insured
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/11] lg:aspect-[4/3.4]">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
                  alt="A Ritepro cleaner looking after a bright Brisbane home"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>

              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-900 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                {googleRating.stars} on Google
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:w-64">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Regular cleans from
                </p>
                <p className="mt-1 text-2xl font-extrabold text-gray-900">
                  $150{" "}
                  <span className="text-sm font-medium text-gray-400">
                    per visit
                  </span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  Fixed price confirmed before we start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 sm:grid-cols-4 lg:px-8">
          {[
            {
              value: `${googleRating.stars} / 5`,
              label: `${googleRating.count} Google reviews`,
            },
            { value: "500+", label: "Brisbane homes cleaned" },
            { value: "Fully insured", label: "Police-checked cleaners" },
            { value: "Bond-back", label: "End-of-lease guarantee" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
              <div>
                <p className="text-sm font-bold text-gray-900">{item.value}</p>
                <p className="mt-0.5 text-xs text-gray-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Choose your clean
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The right clean for where your home is right now.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 lg:col-span-5">
              Not sure which one fits? Start with a regular clean for upkeep, a
              deep clean for a reset, or an end-of-lease clean if you are moving
              out. We confirm the scope before you book.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.name}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-lg"
              >
                {service.popular && (
                  <span className="absolute right-4 top-4 rounded-full bg-terracotta/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-terracotta">
                    Most booked
                  </span>
                )}
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  {service.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  {service.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-4">
                  <div>
                    <span className="text-xs text-gray-400">from </span>
                    <span className="text-xl font-extrabold text-gray-900">
                      {service.from}
                    </span>
                  </div>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta transition-colors hover:text-gray-900"
                  >
                    Quote
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Also available
            </span>
            {alsoAvailable.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80"
                alt="A clean, bright kitchen after a Ritepro home clean"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                <svg
                  className="h-3.5 w-3.5"
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
              </span>
              <p className="text-sm leading-relaxed text-gray-600">
                <strong className="font-semibold text-gray-900">
                  Checklist-driven, every visit.
                </strong>{" "}
                Nothing is left to memory.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              What&apos;s included
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A proper clean covers more than the obvious.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Every visit follows a room-by-room checklist, so the same standard
              is delivered every time — not just the surfaces you can see.
            </p>

            <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 text-xs leading-relaxed text-gray-400">
              Add carpet steam cleaning, oven interiors, interior windows or
              pressure washing to any visit.{" "}
              <Link
                href="/quote"
                className="font-medium text-gray-600 underline underline-offset-4 transition-colors hover:text-terracotta"
              >
                Build your quote
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Clear prices. No surprises.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 lg:col-span-5">
              Your exact price is confirmed before we start. If your home needs
              more time, we will tell you first — never after.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {/* Regular */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-terracotta">
                  Regular clean
                </h3>
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Most booked
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-400">
                Weekly, fortnightly or monthly
              </p>
              <div className="mt-5 space-y-3">
                {standardPricing.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-gray-600">{row.label}</span>
                    <span className="text-sm font-bold text-gray-900">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 flex-1 text-xs leading-relaxed text-gray-400">
                Larger homes quoted individually. Save with a regular schedule.
              </p>
              <Link
                href="/quote"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
              >
                Get my price
              </Link>
            </div>

            {/* Deep */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-terracotta">
                Deep clean
              </h3>
              <p className="mt-1 text-xs text-gray-400">One-off, any home size</p>
              <p className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900">
                $280 – $550
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-gray-600">
                {[
                  "Top-to-bottom reset",
                  "Built-up areas and grout",
                  "Vents, sills and skirting",
                  "Add-ons available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex-1 text-xs leading-relaxed text-gray-400">
                Ideal before a regular schedule or after a long gap between
                cleans.
              </p>
              <Link
                href="/quote"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                Get my price
              </Link>
            </div>

            {/* End of lease */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-terracotta">
                End-of-lease
              </h3>
              <p className="mt-1 text-xs text-gray-400">Bond-back guaranteed</p>
              <div className="mt-5 space-y-3">
                {eolPricing.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-gray-600">{row.label}</span>
                    <span className="text-sm font-bold text-gray-900">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 flex-1 text-xs leading-relaxed text-gray-400">
                Other sizes quoted individually. Checklist built around the exit
                report.
              </p>
              <Link
                href="/quote"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                Get my price
              </Link>
            </div>
          </div>

          {/* Recurring callout */}
          <div className="mt-4 overflow-hidden rounded-2xl bg-black p-6 text-white sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light">
                  Keep it that way
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Save with a regular visit.
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-400">
                  A consistent schedule keeps your home at the same standard —
                  and costs less than booking one-off cleans.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {recurringPricing.map((item) => (
                  <div
                    key={item.freq}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                      {item.freq}
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                  Add-ons
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Add any of these to a visit when you book.
                </p>
              </div>
              <div className="grid flex-1 gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3 lg:pl-10">
                {addonPricing.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-gray-600">{row.label}</span>
                    <span className="font-semibold text-gray-900">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-gray-400">
            Prices are guides. Your address, condition and extras are confirmed
            in the quote before booking.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Three steps to a cleaner home.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              No site visits, no waiting for a callback and no surprise charges.
              The whole process happens online in about a minute.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-sm font-extrabold text-terracotta">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-gray-200 md:block" />
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Reviews
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Brisbane homes, real results.
              </h2>
              <div className="mt-4 flex items-center gap-2">
                <Stars />
                <span className="text-sm font-semibold text-gray-900">
                  {googleRating.stars}
                </span>
                <span className="text-sm text-gray-500">
                  from {googleRating.count} Google reviews
                </span>
              </div>
            </div>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-terracotta"
            >
              Read all reviews
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reviews
              .filter((review) => review.tags.includes("residential"))
              .slice(0, 3)
              .map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Questions, answered.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Everything you need to know before booking. If your question is
              not here, call or message us — a real person will answer.
            </p>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-900">Still not sure?</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                Talk to the team on{" "}
                <a
                  href="tel:+61434139623"
                  className="font-medium text-gray-700 underline underline-offset-4 hover:text-terracotta"
                >
                  +61 434 139 623
                </a>
                .
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="tel:+61434139623"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Call us
                </a>
                <a
                  href="https://wa.me/61434139623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-xs font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-100"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform group-open:rotate-45">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl pr-10 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA + CTA */}
      <section className="relative overflow-hidden bg-black text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-terracotta/15 blur-[140px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light">
                Service area
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Across Brisbane and the surrounding suburbs.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                From the inner city to the north, south, east and bayside
                suburbs. Not listed? Ask us — we will confirm availability when
                you request your quote.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                  >
                    {suburb}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="text-xl font-bold sm:text-2xl">
                  Ready for a cleaner home?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Get your fixed quote in about 60 seconds. No waiting, no
                  obligation.
                </p>
                <Link
                  href="/quote"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
                >
                  Free instant quote
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <p className="mt-4 text-center text-xs text-gray-500">
                  Prefer to talk?{" "}
                  <a
                    href="tel:+61434139623"
                    className="font-medium text-gray-300 underline underline-offset-4 hover:text-white"
                  >
                    +61 434 139 623
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
