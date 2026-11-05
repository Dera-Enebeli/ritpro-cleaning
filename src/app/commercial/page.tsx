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

type CommercialService = {
  name: string;
  tagline: string;
  description: string;
  from?: string;
  popular?: boolean;
};

const commercialServices: CommercialService[] = [
  {
    name: "Commercial Cleaning",
    tagline: "Offices · Co-working · Facilities",
    description:
      "Office and facility cleaning that stays consistent. Checklists, compliance documentation, and quality reporting included.",
    from: "$600",
    popular: true,
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

const industries = [
  "Offices & co-working spaces",
  "Medical & allied health",
  "Childcare centres",
  "Retail & hospitality",
  "Strata & body corporate",
  "Schools & education",
  "Warehouses & industrial",
  "Community organisations",
];

const qualityPoints = [
  {
    title: "Standardised Checklists",
    desc: "Every visit follows a documented checklist. Nothing gets missed.",
  },
  {
    title: "Police-Checked & Insured",
    desc: "Every team member holds a current police check and Blue Card. Full insurance coverage.",
  },
  {
    title: "Compliance Documentation",
    desc: "Service reports, WHS documentation, and incident reporting provided for your records.",
  },
  {
    title: "Dedicated Account Contact",
    desc: "A real office team manages scheduling, communication, and quality follow-up.",
  },
];

const faqs = [
  {
    question: "Do you clean after hours?",
    answer:
      "Our standard hours are Monday to Friday, 7am to 4pm. If you need cleaning outside these hours, let us know during quoting and we will see what we can arrange.",
  },
  {
    question: "How do you handle keys and alarm access?",
    answer:
      "We manage keys, alarm codes, and access instructions securely. All team members are police-checked and follow strict protocols for site access and lockup.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. We carry public liability and professional indemnity insurance. Certificates of currency are available on request.",
  },
  {
    question: "Do you work around tenants and building management?",
    answer:
      "Yes. We coordinate access with building managers, strata committees or tenants as needed, and keep communication clear so nothing disrupts your operations.",
  },
  {
    question: "Do you offer recurring commercial cleaning?",
    answer:
      "Yes. Recurring schedules are available for offices, strata common areas and specialist sites, and are scheduled around your business hours.",
  },
];

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
              Commercial cleaning · Brisbane
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Commercial cleaning in Brisbane,{" "}
              <span className="text-terracotta">done properly.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Reliable, compliant cleaning for offices, strata buildings and
              specialist sites across Brisbane. Scoped, priced and documented
              before we start.
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
                  <span className="text-sm font-medium text-gray-400">
                    per visit
                  </span>
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
            { value: "Fully insured", label: "Police-checked & Blue Card" },
            { value: "Compliance-first", label: "Reports & documentation" },
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
            {commercialServices.map((service) => (
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
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Industries
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Industries we serve across Brisbane.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 lg:col-span-5">
              Offices, clinics, schools, retail and industrial sites — wherever
              there is a floor that needs a clean.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-center transition-colors hover:border-terracotta/30"
              >
                <span className="text-sm font-medium text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section id="quality" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Quality assurance
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Compliance you can actually see.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 lg:col-span-5">
              Commercial cleaning is held to higher standards — documented,
              reported and auditable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPoints.map((point) => (
              <div
                key={point.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  {point.title === "Standardised Checklists" ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4M16 2v4M12 12v4" />
                    </svg>
                  ) : point.title === "Police-Checked & Insured" ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ) : point.title === "Compliance Documentation" ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 13H8M16 17H8" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  )}
                </span>
                <h3 className="mt-5 text-base font-bold text-gray-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
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
              Fixed per-visit pricing based on floor area. No hourly guesswork,
              no upsells on the day.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: "Small", sqft: "Under 5,000 sq ft", price: "$600" },
              { label: "Medium", sqft: "5,000 – 15,000 sq ft", price: "$1,000" },
              { label: "Large", sqft: "15,000 – 30,000 sq ft", price: "$2,000" },
            ].map((row) => (
              <div key={row.label} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-terracotta">{row.label}</h3>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">{row.price}</p>
                <p className="mt-1 text-sm text-gray-500">per visit</p>
                <p className="mt-2 text-xs text-gray-400">{row.sqft}</p>
                <Link
                  href="/quote"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta/90"
                >
                  Get my quote
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl bg-black p-6 text-white sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light">
                  Keep it that way
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Save with a managed schedule.
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-400">
                  Recurring commercial cleaning scheduled around your business
                  hours, with service reporting on every visit.
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

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Three steps to consistent office cleaning.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              No site visits for quoting, no hourly guesswork, no surprises on
              the day.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Tell us about your site",
                desc: "Industry, floor area, access needs and current standards.",
              },
              {
                number: "02",
                title: "Get your fixed quote",
                desc: "Transparent per-visit pricing based on floor area. No hourly guesswork.",
              },
              {
                number: "03",
                title: "We keep it consistent",
                desc: "Scheduled cleaning with service reporting and quality follow-up.",
              },
            ].map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-sm font-extrabold text-terracotta">
                    {step.number}
                  </span>
                  {step.number !== "03" && (
                    <span className="hidden h-px flex-1 bg-gray-200 md:block" />
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">{step.desc}</p>
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

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Questions, answered.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Everything you need to know before booking commercial cleaning.
            </p>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-sm font-bold text-gray-900">Still not sure?</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                Talk to the team on{" "}
                <a href="tel:+61434139623" className="font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-terracotta">
                  +61 434 139 623
                </a>
                .
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="tel:+61434139623" className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gray-800">
                  Call us
                </a>
                <a href="https://wa.me/61434139623" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-xs font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-100">
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
                    <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform group-open:rotate-45">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl pr-10 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
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
                Let us take facility management off your plate. Get a fixed quote
                in about 60 seconds — no waiting, no obligation.
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
