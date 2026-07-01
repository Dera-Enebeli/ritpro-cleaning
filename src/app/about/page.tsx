import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Quality",
    desc: "Every clean follows a strict checklist. We never cut corners.",
    color: "terracotta",
  },
  {
    title: "Reliability",
    desc: "We show up on time, every time. Consistent teams you can trust.",
    color: "sage",
  },
  {
    title: "Integrity",
    desc: "Transparent pricing, no hidden fees, honest communication.",
    color: "slate",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt="Ritpro cleaning team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            About Us
          </h1>
          <p className="mt-3 text-lg text-gray-200 max-w-xl">
            We are Ritpro — a team built on reliability, quality, and a simple
            belief that everyone deserves a clean space.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                Our Story
              </h2>
              <div className="w-12 h-0.5 bg-terracotta mt-4 mb-6" />
              <p className="text-gray-600 leading-relaxed">
                Ritpro Cleaning Services was founded with a single mission: to
                deliver professional cleaning that people can actually rely on.
                We started by serving local homes and quickly grew into
                commercial contracts, government buildings, and specialist
                cleans — all because clients trusted us to do the job right.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Today, we serve residential clients, businesses, and public
                buildings across Brisbane. Every team is insured, vetted, and
                trained to our exacting standards.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Clean home"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              What We Stand For
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const bgMap: Record<string, string> = {
                terracotta: "bg-terracotta/10",
                sage: "bg-sage/10",
                slate: "bg-slate/10",
              };
              const textMap: Record<string, string> = {
                terracotta: "text-terracotta",
                sage: "text-sage",
                slate: "text-slate",
              };
              return (
                <div
                  key={value.title}
                  className="text-center p-8 bg-white rounded-lg border border-gray-100"
                >
                  <div
                    className={`w-14 h-14 ${bgMap[value.color]} rounded-full flex items-center justify-center mx-auto`}
                  >
                    <span className={`font-bold text-lg ${textMap[value.color]}`}>
                      {value.title[0]}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-black">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black">
            Let us take care of the cleaning
          </h2>
          <p className="mt-3 text-gray-500">
            Get in touch for a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-black text-white px-8 py-3 rounded text-sm font-bold hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
