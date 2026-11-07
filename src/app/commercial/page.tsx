import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewCard } from "@/components/ReviewCard";
import { commercialServices } from "@/data/services";
import { reviews, siteRating } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Commercial Cleaning Ipswich",
  alternates: { canonical: "/commercial" },
  description:
    "Professional commercial and office cleaning in Ipswich. Reliable, compliant, and fully insured. Offices, warehouses, medical centres, retail, hospitality and more.",
  openGraph: {
    title: "Commercial Cleaning Ipswich | Office Cleaning Services",
    description:
      "Professional commercial and office cleaning in Ipswich. Reliable, compliant, and fully insured. Offices, warehouses, medical centres, retail, hospitality and more.",
  },
};

const quoteBands = [
  {
    label: "Under 500 m²",
    description: "Small offices, studios and single-tenancy retail.",
    includes: [
      "Standard office and amenity areas",
      "Scheduled after-hours visits",
      "Basic service reporting",
    ],
  },
  {
    label: "500 – 1,500 m²",
    description: "Growing offices, clinics and multi-room retail.",
    includes: [
      "Full fit-out coverage",
      "WHS documentation",
      "Detailed service reports",
    ],
  },
  {
    label: "1,500 – 3,000 m²",
    description: "Larger offices, hospitality venues and warehouses.",
    includes: [
      "Multiple zones and floors",
      "Dedicated site coordinator",
      "Compliance and incident records",
    ],
  },
  {
    label: "3,000 m²+",
    description: "Industrial sites and multi-building portfolios.",
    includes: [
      "Custom site plan and resourcing",
      "On-site supervision",
      "Consolidated reporting",
    ],
  },
];

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} className={className} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function ServiceIcon({ value }: { value: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    className: "h-5 w-5",
  } as const;

  switch (value) {
    case "office":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "warehouses":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.3 7 8.7 5 8.7-5M12 22V12" />
        </svg>
      );
    case "medical":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.5v5M9.5 11h5" />
        </svg>
      );
    case "hospitality":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M6 3v18M18 3c-1.5 0-2.5 1.7-2.5 4.5S16.5 12 18 12s2.5-1.7 2.5-4.5S19.5 3 18 3Zm0 9v9" />
        </svg>
      );
    case "retail":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l1 13H5L6 7Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V6a3 3 0 0 1 6 0v3" />
        </svg>
      );
    case "fitness":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        </svg>
      );
  }
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
              Commercial cleaning · Ipswich
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Commercial cleaning in Ipswich,{" "}
              <span className="text-terracotta">done properly.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Office, retail, medical and specialist site cleans across Ipswich.
              Scoped, quoted and documented before we start.
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
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-100"
              >
                See services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-sm font-semibold text-gray-900">
                  {siteRating.stars}
                </span>
                <span className="text-sm text-gray-500">
                  from {siteRating.count} reviews
                </span>
              </div>
              <span className="hidden h-4 w-px bg-gray-300 sm:block" />
              <span className="text-sm text-gray-500">
                Police-checked & fully insured
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/11] lg:aspect-[4/3.4]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                  alt="A Ritepro cleaner servicing a bright Ipswich office workspace"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>

              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-900 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                Insured & compliant
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:w-64">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Commercial quotes
                </p>
                <p className="mt-1 text-2xl font-extrabold text-gray-900">
                  Tailored per site
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  Based on your floor area, schedule and requirements.
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
              value: `${siteRating.stars} / 5`,
              label: `${siteRating.count} reviews`,
            },
            { value: "Ipswich-wide", label: "Commercial cleaning services" },
            { value: "Fully insured", label: "Police-checked & Blue Card" },
            { value: "Compliance-first", label: "Service reports & documentation" },
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
                Cleaning built for how your site actually runs.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 lg:col-span-5">
              Choose your site type in the quote tool — from a single office to a
              warehouse, clinic or multi-site portfolio.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((service) => (
              <article
                key={service.value}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-lg"
              >
                {service.value === "office" && (
                  <span className="absolute right-4 top-4 rounded-full bg-terracotta/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-terracotta">
                    Most booked
                  </span>
                )}
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  <ServiceIcon value={service.value} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {service.label}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  {service.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE QUOTE */}
      <section id="quote-bands" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                How we quote
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Priced per site, not off a menu.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 lg:col-span-5">
              Every commercial site is different. We confirm your floor area,
              access, hours and scope, then send one fixed per-visit quote.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quoteBands.map((band) => (
              <div
                key={band.label}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-terracotta">
                  {band.label}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {band.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {band.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-gray-400">
            Larger spaces and multi-site portfolios are quoted individually.
            Request a quote and we will confirm the scope and price before
            anything is booked.
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M16 13H8M16 17H8" />
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
                Trusted by Ipswich Businesses.
              </h2>
              <div className="mt-4 flex items-center gap-2">
                <Stars />
                <span className="text-sm font-semibold text-gray-900">{siteRating.stars}</span>
                <span className="text-sm text-gray-500">from {siteRating.count} reviews</span>
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
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready for consistent commercial cleaning?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
              Let us take facility management off your plate. Tell us about your
              site and we will send a fixed per-visit quote — no waiting, no
              obligation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
              >
                Get a free quote
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
            <p className="mt-4 text-xs text-gray-500">
              Prefer to talk?{" "}
              <a href="tel:+61434139623" className="font-medium text-gray-300 underline underline-offset-4 hover:text-white">
                +61 434 139 623
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
