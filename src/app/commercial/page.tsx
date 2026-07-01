import Image from "next/image";
import Link from "next/link";

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
    q: "Do you clean after hours?",
    a: "Our standard hours are Monday to Friday, 7am to 4pm. If you need cleaning outside these hours, let us know during quoting and we will see what we can arrange.",
  },
  {
    q: "How do you handle keys and alarm access?",
    a: "We manage keys, alarm codes, and access instructions securely. All team members are police-checked and follow strict protocols for site access and lockup.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We carry public liability and professional indemnity insurance. Certificates of currency are available on request.",
  },
];

export default function CommercialPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Commercial cleaning"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Commercial Cleaning
          </h1>
          <p className="mt-3 text-lg text-gray-200 max-w-xl">
            Reliable cleaning and facility services for Brisbane businesses.
            Compliant, documented, and managed by a real office team.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Our Services for You
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-black">Commercial Cleaning</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Office and facility cleaning that stays consistent. Checklists,
                compliance documentation, and quality reporting included.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-black">Strata & Body Corporate</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Common area maintenance for apartment blocks, estates, and
                community titles. Reliable schedules and clear reporting.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-black">Specialist & Industrial</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Warehouse, school, and post-construction cleaning. Complex
                environments handled with the right equipment and protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Industries We Serve
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="p-4 bg-white rounded-lg border border-gray-100 text-center"
              >
                <span className="text-sm font-medium text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              How We Manage Quality
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPoints.map((point) => (
              <div
                key={point.title}
                className="text-center p-6 rounded-lg border border-gray-100"
              >
                <h3 className="text-sm font-bold text-black uppercase tracking-wider">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 bg-white rounded-lg border border-gray-100"
              >
                <h3 className="text-sm font-bold text-black">{faq.q}</h3>
                <p className="mt-2 text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black">
            Ready for Consistent Commercial Cleaning?
          </h2>
          <p className="mt-3 text-gray-500">
            Let us take facility management off your plate.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-black text-white px-8 py-3 rounded text-sm font-bold hover:bg-gray-800 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
