import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewCard } from "@/components/ReviewCard";
import { googleRating, reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Commercial Cleaning Brisbane",
  alternates: { canonical: "/commercial" },
  description:
    "Professional commercial and office cleaning in Brisbane. Reliable, compliant, and fully insured. From $600 per visit. Get a free quote today.",
  openGraph: {
    title: "Commercial Cleaning Brisbane | Office Cleaning Services",
    description:
      "Professional commercial and office cleaning in Brisbane. Reliable, compliant, and fully insured. From $600 per visit.",
  },
};

type ServiceCard = {
  name: string;
  tagline: string;
  description: string;
  from?: string;
};

const services: ServiceCard[] = [
  {
    name: "Commercial Cleaning",
    tagline: "Offices · Co-working · Facilities",
    description:
      "Office and facility cleaning that stays consistent. Checklists, compliance documentation, and quality reporting included.",
    from: "$600",
  },
  {
    name: "Strata & Body Corporate",
    tagline: "Apartment blocks · Estates · Community titles",
    description:
      "Common area maintenance for apartment blocks, estates and community titles. Reliable schedules and clear reporting.",
  },
  {
    name: "Specialist & Industrial",
    tagline: "Warehouses · Schools · Post-construction",
    description:
      "Warehouse, school and post-construction cleaning. Complex environments handled with the right equipment and protocols.",
  },
];

const pricing = [
  {
    label: "Small",
    sqft: "Under 5,000 sq ft",
    price: "$600",
    includes: ["Standard office areas", "Outdoor and common areas", "Basic compliance reporting"],
  },
  {
    label: "Medium",
    sqft: "5,000 – 15,000 sq ft",
    price: "$1,000",
    includes: ["Full office fit-out coverage", "WHS documentation", "Full compliance reports"],
  },
  {
    label: "Large",
    sqft: "15,000 – 30,000 sq ft",
    price: "$2,000",
    includes: ["Multiple floors and zones", "Dedicated site coordinator", "Incident and compliance records"],
  },
];

const alsoOffered = [
  "Carpet steam cleaning",
  "Window cleaning (interior)",
  "Pressure washing",
  "End-of-lease cleaning",
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

export default function CommercialPage() {
  const commercialReviews = reviews
    .filter((review) => review.tags.includes("commercial"))
    .slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-8 lg:py-24">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              <span className="h-px w-8 bg-terracotta" />
              Commercial cleaning · Brisbane
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Commercial cleaning in Brisbane,{" "}
              <span className="text-terracotta">done properly.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Office, strata and specialist site cleans across Brisbane. Scoped,
              priced and documented before we start.
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
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                  alt="A Ritepro cleaner servicing a bright Brisbane office workspace"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>

              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-900 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                Insured &amp; compliant
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:w-64">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Commercial cleans from
                </p>
                <p className="mt-1 text-2xl font-extrabold text-gray-900">
                  $600{" "}
                  <span className="text-sm font-medium text-gray-400">per visit</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  Fixed per-visit pricing confirmed before we start.
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
            { value: "Brisbane-wide", label: "Commercial cleaning services" },
            { value: "Fully insured", label: "Police-checked &amp; Blue Card" },
            { value: "Compliance-first", label: "Service reports &amp; documentation" },
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
                Who we clean for
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Cleaning built for how offices actually run.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 lg:col-span-5">
              From a single desk to a whole strata building or industrial site —
              scoped, priced and documented.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-lg"
              >
                {service.name === "Commercial Cleaning" && (
                  <span className="absolute right-4 top-4 rounded-full bg-terracotta/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-terracotta">
                    Most booked
                  </span>
                )}
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  {service.name === "Commercial Cleaning" ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  ) : service.name === "Strata & Body Corporate" ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V9l9-6 9 6v12" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    </svg>
                  )}
                </span>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{service.name}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  {service.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-4">
                  <div>
                    {service.from && (
                      <>
                        <span className="text-xs text-gray-400">from </span>
                        <span className="text-xl font-extrabold text-gray-900">{service.from}</span>
                      </>
                    )}
                  </div>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta transition-colors hover:text-gray-900"
                  >
                    Quote
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
            {alsoOffered.map((item) => (
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

      {/* PRICING BY FLOOR AREA */}
      <section id="pricing" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Pricing by floor area
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The bigger the space, the more we matter.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 lg:col-span-5">
              Commercial cleans are priced on a per-visit basis tied to floor
              area. Fixed, scoped and documented before we start.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.label}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-terracotta">
                  {tier.label}
                </h3>
                <div className="mt-5">
                  <p className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {tier.price}
                  </p>
                  <p className="text-sm text-gray-500">per visit</p>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-gray-600">
                  {tier.sqft}
                </p>

                <ul className="mt-6 space-y-3">
                  {tier.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      <span className="text-sm text-gray-600">{inc}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
                >
                  Get my free quote
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl bg-black p-6 text-white sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light">
                  Keep it that way
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Save with a managed schedule.
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-400">
                  Same-visit pricing, scheduled around your business hours, with
                  full service reports on every visit.
                </p>
              </div>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90 lg:shrink-0"
              >
                Get my quote
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-gray-400">
            Larger spaces quoted individually. Contact us for a custom proposal.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET AFTER EVERY VISIT */}
      <section id="reports" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                After every visit
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Documented, auditable quality.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 lg:col-span-5">
              We don&apos;t just clean. We leave behind the paperwork your building
              managers, strata committees and compliance officers expect.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 6-4-4H5m0 0 4-4m0 0-4-4M6 16h11a5 5 0 0 0 0-10 6 6 0 0 1 0 12z" />
                  </svg>
                ),
                title: "Standardised checklists",
                desc: "Every visit follows a documented checklist so nothing gets missed. Shared digitally with you.",
              },
              {
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Public liability insurance",
                desc: "Insured and police-checked team members carry current public liability cover.",
              },
              {
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 13H8M16 17H8" />
                  </svg>
                ),
                title: "WHS documentation",
                desc: "Health and safety records available for your building managers and committees.",
              },
              {
                icon: (
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                ),
                title: "Service reports",
                desc: "Post-visit reports shared digitally every time, so you have a record of what was cleaned.",
              },
            ].map((point) => (
              <div
                key={point.title}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">{point.icon}</span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Reviews
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Brisbane Businesses.
              </h2>
              <div className="mt-4 flex items-center gap-2">
                <Stars />
                <span className="text-sm font-semibold text-gray-900">{googleRating.stars}</span>
                <span className="text-sm text-gray-500">from {googleRating.count} Google reviews</span>
              </div>
            </div>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-terracotta"
            >
              Read all reviews
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {commercialReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-black text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-terracotta/15 blur-[140px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light">
                Ready when you are
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready for consistent commercial cleaning?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                Let us take facility management off your plate. Get a fixed
                per-visit quote in about 60 seconds — no waiting, no obligation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
                >
                  Free instant quote
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+61434139623"
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30"
                >
                  Call us
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="text-xl font-bold sm:text-2xl">Get your commercial quote</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Tell us about your office, strata building or site and we will
                  send a fixed per-visit quote.
                </p>
                <Link
                  href="/quote"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
                >
                  Free instant quote
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <p className="mt-4 text-center text-xs text-gray-500">
                  Prefer to talk?{" "}
                  <a href="tel:+61434139623" className="font-medium text-gray-300 underline underline-offset-4 hover:text-white">
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
