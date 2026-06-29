import Image from "next/image";
import Link from "next/link";

const residentialServices = [
  "Regular house cleaning (weekly, fortnightly, monthly)",
  "Deep cleaning",
  "End-of-lease (bond) cleaning",
  "Spring cleaning",
  "Move-in / move-out cleaning",
  "Airbnb cleaning",
  "NDIS cleaning",
  "Aged care home cleaning",
  "Apartment cleaning",
];

const commercialServices = [
  "Office cleaning",
  "Medical centre and dental clinic cleaning",
  "Childcare centre cleaning",
  "Retail shop cleaning",
  "Restaurant and café cleaning",
  "Gym cleaning",
  "Warehouse cleaning",
  "Body corporate / common area cleaning",
  "School cleaning",
];

export default function ServicesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1920&q=80"
          alt="Professional cleaning service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Our Services
          </h1>
          <p className="mt-3 text-lg text-gray-200 max-w-xl">
            Comprehensive cleaning solutions for residential and commercial
            clients. Every service delivered to the highest standard.
          </p>
        </div>
      </section>

      {/* PRICING STRIP */}
      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-white font-bold text-lg">£220 – £280</p>
              <p className="text-xs text-gray-400">End of Tenancy</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">£60 – £120</p>
              <p className="text-xs text-gray-400">Airbnb Clean</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">£2,400/mo</p>
              <p className="text-xs text-gray-400">Per Host (Airbnb)</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">£10k – £500k+</p>
              <p className="text-xs text-gray-400">Gov Contracts</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage bg-sage/10 px-3 py-1 rounded">
              Residential
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            Residential Services
          </h2>
          <p className="text-gray-500 max-w-2xl mb-8">
            From weekly upkeep to deep resets, we keep your home spotless so you
            can focus on what matters.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {residentialServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-terracotta rounded-full shrink-0" />
                <span className="text-sm text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate bg-slate/10 px-3 py-1 rounded">
              Commercial
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            Commercial Services
          </h2>
          <p className="text-gray-500 max-w-2xl mb-8">
            Tailored cleaning for businesses, healthcare, education and
            industrial spaces. Fully insured and compliant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commercialServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
              >
                <div className="w-1.5 h-1.5 bg-slate rounded-full shrink-0" />
                <span className="text-sm text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black">
            Not sure which service you need?
          </h2>
          <p className="mt-3 text-gray-500">
            Contact us and we will help find the right solution for your space.
          </p>
          <Link
            href="/get-a-quote"
            className="mt-6 inline-block bg-black text-white px-8 py-3 rounded text-sm font-bold hover:bg-gray-800 transition-colors"
          >
            Get Advice
          </Link>
        </div>
      </section>
    </div>
  );
}
