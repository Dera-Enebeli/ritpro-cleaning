import type { Metadata } from "next";
import Link from "next/link";
import { InlineTestimonial } from "@/components/ReviewCard";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { featuredReviews, reviews, reviewStats, googleRating } from "@/data/reviews";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const topServices = [
  { num: "01", title: "Regular Residential Cleaning", desc: "Weekly, fortnightly or monthly home cleans tailored to your routine. From $150." },
  { num: "02", title: "Commercial Cleaning", desc: "Professional commercial cleaning for offices and workspaces. From $600 per visit." },
  { num: "03", title: "Airbnb Cleaning", desc: "Turnover cleans between guests. From $220 per clean." },
  { num: "04", title: "End-of-Lease Cleaning", desc: "Legally required bond cleaning. $450–$700 per job." },
  { num: "05", title: "NDIS Cleaning", desc: "Specialist cleaning for NDIS participants and support environments. From $180." },
  { num: "06", title: "Carpet Cleaning", desc: "Deep steam cleaning for fresh, stain-free carpets. From $170." },
  { num: "07", title: "Pressure Washing", desc: "Exterior cleaning for driveways, patios and pathways. From $550." },
  { num: "08", title: "Window Cleaning", desc: "Streak-free interior and exterior window cleaning. From $320." },
  { num: "09", title: "Builders' Cleans", desc: "Post-construction removal of dust, debris and residue. From $900." },
  { num: "10", title: "Body Corporate Cleaning", desc: "Common area maintenance for apartment blocks and estates. From $800 per month." },
];

const trustPoints = [
  {
    title: "Fully Insured & Vetted",
    desc: "All staff are police-checked, insured, and trained to professional standards.",
  },
  {
    title: "Reliable & Consistent",
    desc: "Same team assigned to recurring bookings. Punctual, professional, dependable.",
  },
  {
    title: "Satisfaction Guaranteed",
    desc: "If it's not right, we'll make it right. No questions asked.",
  },
];

const pricingCategories = [
  {
    title: "Standard Clean",
    rows: [
      { label: "1 Bed / 1 Bath", price: "$150" },
      { label: "2 Bed / 1 Bath", price: "$210" },
      { label: "3 Bed / 2 Bath", price: "$290" },
    ],
  },
  {
    title: "Deep Clean",
    rows: [
      { label: "Any home size", price: "$280 – $550" },
    ],
  },
  {
    title: "End of Lease",
    rows: [
      { label: "2 Bedroom", price: "$450" },
      { label: "3 Bedroom", price: "$700" },
    ],
  },
  {
    title: "Add-On Services",
    rows: [
      { label: "Carpet Cleaning (3 rooms)", price: "$170" },
      { label: "Oven Cleaning", price: "$150" },
      { label: "Window Cleaning (House)", price: "$320" },
      { label: "Pressure Washing", price: "$550" },
      { label: "Airbnb Turnover", price: "$220" },
    ],
  },
];

const recurringCallout = [
  { freq: "Weekly", price: "from $149" },
  { freq: "Fortnightly", price: "from $159" },
  { freq: "Monthly", price: "from $169" },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-dvh flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline

          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-cleaning.mp4#t=7" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 -translate-y-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/70">
                <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                Trusted across Brisbane since 2019
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
                Clean
                <br />
                Spaces.
                <br />
                <span className="text-white/90">Clear Minds.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
                 Professional cleaning services for homes and businesses across Brisbane.
                 Reliable, insured, and built to the highest standard.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded text-sm font-bold hover:bg-gray-100 transition-colors"
                >
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href="/residential"
                  className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 text-white px-8 py-3.5 rounded text-sm font-bold hover:bg-black/80 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 hidden lg:flex flex-col gap-4">
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-5 text-center">
                <div className="text-3xl font-black text-white">500+</div>
                <div className="text-sm text-white/50 mt-0.5">Happy Customers</div>
              </div>
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-5 text-center">
                <div className="text-3xl font-black text-white">4.9</div>
                <div className="text-sm text-white/50 mt-0.5">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP 10 SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Our Top 10 Services
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {topServices.map((service) => (
              <div
                key={service.num}
                className="bg-white rounded-lg p-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <span className="text-2xl font-bold text-terracotta/40 group-hover:text-terracotta/70 transition-colors">
                  {service.num}
                </span>
                <h3 className="mt-2 text-sm font-bold text-black leading-snug">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RITEPRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Why Ritepro?
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map((point, i) => (
              <div
                key={point.title}
                className="text-center p-8 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-terracotta">{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-black">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              What Our Customers Say
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
            <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto">
              Real reviews from real customers — about both our cleaners and how easy it is to book through Ritepro.
            </p>
          </div>

          {/* Stats summary */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 mb-10">
            <div className="text-center">
              <p className="text-3xl font-black text-black">{reviewStats.average}</p>
              <div className="flex justify-center gap-0.5 mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-0.5">50+ reviews</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center">
              <p className="text-3xl font-black text-black">{googleRating.stars}</p>
              <div className="flex justify-center gap-0.5 mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Google</p>
            </div>
          </div>

          <ReviewCarousel reviews={featuredReviews} />

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              Here are our reviews
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Transparent Pricing
            </h2>
            <div className="w-12 h-0.5 bg-white/30 mx-auto mt-4" />
            <p className="mt-4 text-gray-400 text-sm max-w-xl mx-auto">
              Prices start from $150 — get your exact quote in 60 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white/5 border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
                  {cat.title}
                </h3>
                <div className="space-y-3">
                  {cat.rows.map((row) => (
                    <div key={row.label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">{row.label}</span>
                      <span className="text-sm font-bold text-white">{row.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Recurring callout */}
          <div className="mt-10 bg-white/5 border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">
              Save with Regular Cleaning
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {recurringCallout.map((r) => (
                <div key={r.freq} className="text-center">
                  <p className="text-lg font-bold text-white">{r.price}</p>
                  <p className="text-xs text-gray-400">{r.freq}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Starting from 1-bedroom standard clean. Pricing adjusts for larger homes.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/quote"
              className="inline-block bg-white text-black px-8 py-3 rounded text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Get Your Exact Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL TESTIMONIAL */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineTestimonial review={reviews.find((r) => r.id === "r7")!} />
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-400">Rated {googleRating.stars} on Google</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Ready for a Cleaner Space?
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Get your instant quote in 60 seconds — no waiting, no obligation.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block bg-black text-white px-10 py-4 rounded text-sm font-bold hover:bg-gray-800 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
