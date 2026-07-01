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

export default function ResidentialPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
          alt="Residential cleaning"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Residential Cleaning
          </h1>
          <p className="mt-3 text-lg text-gray-200 max-w-xl">
            From weekly upkeep to deep resets, we keep your home spotless so you
            can focus on what matters.
          </p>
        </div>
      </section>

      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-white font-bold text-lg">$220 – $280</p>
              <p className="text-xs text-gray-400">End of Tenancy</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">$60 – $120</p>
              <p className="text-xs text-gray-400">Airbnb Clean</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">$2,400/mo</p>
              <p className="text-xs text-gray-400">Per Host (Airbnb)</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">$10k – $500k+</p>
              <p className="text-xs text-gray-400">Gov Contracts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Our Residential Services
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black">
            Ready for a Cleaner Home?
          </h2>
          <p className="mt-3 text-gray-500">
            Get in touch for a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-black text-white px-8 py-3 rounded text-sm font-bold hover:bg-gray-800 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
