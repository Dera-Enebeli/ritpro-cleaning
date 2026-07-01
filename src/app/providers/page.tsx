import Image from "next/image";
import Link from "next/link";

const programs = [
  "NDIS — National Disability Insurance Scheme",
  "CHSP — Commonwealth Home Support Programme",
  "MyAgedCare — Home Care Packages",
  "QCSS — QLD Community Support Scheme",
  "Veterans' Affairs — DVA-funded home services",
  "Community Housing — Social & transitional housing",
];

const services = [
  {
    title: "Standard Cleaning",
    desc: "Regular domestic cleaning for program participants — kitchens, bathrooms, floors, dusting, and general tidying delivered with respect and discretion.",
  },
  {
    title: "Gardening & Grounds",
    desc: "Lawn mowing, garden maintenance, weed control, and yard tidying to help participants maintain safe, presentable outdoor areas.",
  },
  {
    title: "Enhanced Cleaning",
    desc: "Deep cleans, hoarding-sensitive cleans, end-of-tenancy, and complex situations requiring additional care, equipment, or specialist approaches.",
  },
];

const compliancePoints = [
  {
    title: "Police-Checked Staff",
    desc: "Every team member holds a current National Police Check and Blue Card. Verified before any staff member enters a participant's home.",
  },
  {
    title: "Incident Reporting",
    desc: "Structured incident and hazard reporting with same-day notification to coordinators. Full documentation for your compliance records.",
  },
  {
    title: "Infection Control & WHS",
    desc: "Staff trained in infection control protocols, PPE usage, and workplace health and safety. Aligned with current health guidelines.",
  },
  {
    title: "Documentation & Communication",
    desc: "Service completion notes, photo records where required, and direct communication channels with your coordination team.",
  },
];

export default function ProvidersPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt="Provider services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Provider Services
          </h1>
          <p className="mt-3 text-lg text-gray-200 max-w-xl">
            Reliable, compliant service delivery for NDIS, CHSP, and community
            care programs across Brisbane.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Discuss Provider Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Programs We Support
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((program) => (
              <div
                key={program}
                className="p-4 bg-gray-50 rounded-lg border border-gray-100"
              >
                <span className="text-sm text-gray-700">{program}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Our Services for You
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-black">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Provider-Ready Operations
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliancePoints.map((point) => (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              How Referrals Work
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <span className="text-2xl font-bold text-terracotta">1</span>
              <h3 className="mt-2 text-sm font-bold text-black">You Send a Referral</h3>
              <p className="mt-1 text-xs text-gray-500">
                Email or call with client details, service requirements, and any
                specific needs or access information.
              </p>
            </div>
            <div className="text-center p-6">
              <span className="text-2xl font-bold text-terracotta">2</span>
              <h3 className="mt-2 text-sm font-bold text-black">We Confirm Scope</h3>
              <p className="mt-1 text-xs text-gray-500">
                We review the referral, confirm pricing against your funding line
                items, and agree on a service schedule.
              </p>
            </div>
            <div className="text-center p-6">
              <span className="text-2xl font-bold text-terracotta">3</span>
              <h3 className="mt-2 text-sm font-bold text-black">Service Delivery Begins</h3>
              <p className="mt-1 text-xs text-gray-500">
                Our vetted team delivers on schedule with full compliance
                documentation and completion reporting.
              </p>
            </div>
            <div className="text-center p-6">
              <span className="text-2xl font-bold text-terracotta">4</span>
              <h3 className="mt-2 text-sm font-bold text-black">Ongoing Reporting</h3>
              <p className="mt-1 text-xs text-gray-500">
                Regular service reports, open communication, and scheduled reviews
                to adjust as participant needs change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black">
            Ready to Discuss Provider Services?
          </h2>
          <p className="mt-3 text-gray-500">
            Let us talk about how we can support your participants.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-black text-white px-8 py-3 rounded text-sm font-bold hover:bg-gray-800 transition-colors"
          >
            Discuss Provider Services
          </Link>
        </div>
      </section>
    </div>
  );
}
