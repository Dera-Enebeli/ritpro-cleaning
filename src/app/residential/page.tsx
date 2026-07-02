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

const standardPricing = [
  { label: "1 Bed / 1 Bath", price: "$150" },
  { label: "2 Bed / 1 Bath", price: "$210" },
  { label: "3 Bed / 2 Bath", price: "$290" },
];

const deepCleanPrice = "$280 – $550";

const eolPricing = [
  { label: "2 Bedroom", price: "$450" },
  { label: "3 Bedroom", price: "$700" },
];

const addonPricing = [
  { label: "Carpet Cleaning (3 rooms)", price: "$210" },
  { label: "Oven Cleaning", price: "$190" },
  { label: "Window Cleaning (House)", price: "$400" },
  { label: "Pressure Washing", price: "$700" },
  { label: "Airbnb Turnover", price: "$270" },
];

const recurringCallout = [
  { freq: "Weekly", price: "from $149" },
  { freq: "Fortnightly", price: "from $159" },
  { freq: "Monthly", price: "from $169" },
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
              <p className="text-white font-bold text-lg">$450 – $700</p>
              <p className="text-xs text-gray-400">End of Tenancy</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">$270</p>
              <p className="text-xs text-gray-400">Airbnb Clean</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">$149</p>
              <p className="text-xs text-gray-400">Weekly From</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">$150</p>
              <p className="text-xs text-gray-400">Standard Clean From</p>
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

      {/* PRICING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Pricing
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
            <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto">
              Fixed-price quotes — no surprises, no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Standard Clean */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Standard Clean
              </h3>
              <div className="space-y-3">
                {standardPricing.map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{row.label}</span>
                    <span className="text-sm font-bold text-black">{row.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deep Clean */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Deep Clean
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Any home size</span>
                <span className="text-sm font-bold text-black">{deepCleanPrice}</span>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Thorough top-to-bottom clean for heavily soiled or long-neglected homes.
              </p>
            </div>

            {/* End of Lease */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                End of Lease
              </h3>
              <div className="space-y-3">
                {eolPricing.map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{row.label}</span>
                    <span className="text-sm font-bold text-black">{row.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Bond-back guaranteed. Other sizes quoted individually.
              </p>
            </div>

            {/* Add-Ons */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Add-Ons
              </h3>
              <div className="space-y-2">
                {addonPricing.map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{row.label}</span>
                    <span className="text-sm font-bold text-black">{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recurring callout */}
          <div className="mt-8 bg-white rounded-xl border border-gray-100 p-6 text-center">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
              Save with Regular Cleaning
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {recurringCallout.map((r) => (
                <div key={r.freq} className="text-center">
                  <p className="text-xl font-bold text-black">{r.price}</p>
                  <p className="text-xs text-gray-500">{r.freq}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Starting from 1-bedroom standard clean. Pricing adjusts for larger homes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black">
            Ready for a Cleaner Home?
          </h2>
          <p className="mt-3 text-gray-500">
            Get your instant quote in 60 seconds — no waiting, no obligation.
          </p>
          <Link
            href="/quote"
            className="mt-6 inline-block bg-black text-white px-8 py-3 rounded text-sm font-bold hover:bg-gray-800 transition-colors"
          >
            Get Your Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
