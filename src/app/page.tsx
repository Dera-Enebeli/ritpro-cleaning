import Image from "next/image";

const topServices = [
  { num: "01", title: "Regular Residential Cleaning", desc: "Weekly, fortnightly or monthly home cleans tailored to your routine." },
  { num: "02", title: "Office Cleaning", desc: "Professional commercial cleaning for offices and workspaces." },
  { num: "03", title: "Airbnb Cleaning", desc: "Turnover cleans between guests. From £60–£120 per clean." },
  { num: "04", title: "End-of-Lease Cleaning", desc: "Legally required bond cleaning. £220–£280 per job." },
  { num: "05", title: "NDIS Cleaning", desc: "Specialist cleaning for NDIS participants and support environments." },
  { num: "06", title: "Carpet Cleaning", desc: "Deep steam cleaning for fresh, stain-free carpets." },
  { num: "07", title: "Pressure Washing", desc: "Exterior cleaning for driveways, patios and pathways." },
  { num: "08", title: "Window Cleaning", desc: "Streak-free interior and exterior window cleaning." },
  { num: "09", title: "Builders' Cleans", desc: "Post-construction removal of dust, debris and residue." },
  { num: "10", title: "Body Corporate Cleaning", desc: "Common area maintenance for apartment blocks and estates." },
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

const pricingHighlights = [
  { label: "End of Tenancy", range: "£220 – £280", per: "per job" },
  { label: "Airbnb Clean", range: "£60 – £120", per: "per clean" },
  { label: "Government Contracts", range: "£10k – £500k+", per: "per contract" },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
          alt="Clean living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Clean Spaces.
              <br />
              <span className="text-white">Clear Minds.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-lg">
              Professional cleaning services for homes and businesses across the UK.
              Reliable, insured, and built to the highest standard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-block bg-black text-white px-8 py-3 rounded text-sm font-bold opacity-70 cursor-default">
                Get a Free Quote
              </span>
              <span className="inline-block border-2 border-white text-white px-8 py-3 rounded text-sm font-bold opacity-70 cursor-default">
                Our Services
              </span>
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

      {/* WHY RITPRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Why Ritpro?
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

      {/* PRICING HIGHLIGHTS */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Transparent Pricing
            </h2>
            <div className="w-12 h-0.5 bg-white/30 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingHighlights.map((item) => (
              <div
                key={item.label}
                className="text-center p-8 rounded-lg border border-gray-800"
              >
                <h3 className="text-lg font-semibold text-gray-300">{item.label}</h3>
                <p className="mt-2 text-3xl font-extrabold text-white">
                  {item.range}
                </p>
                <p className="mt-1 text-sm text-gray-500">{item.per}</p>
              </div>
            ))}
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
            Get in touch today for a free, no-obligation quote.
          </p>
          <span className="mt-8 inline-block bg-black text-white px-10 py-4 rounded text-sm font-bold opacity-70 cursor-default">
            Book Now
          </span>
        </div>
      </section>
    </div>
  );
}
