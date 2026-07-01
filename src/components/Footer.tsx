import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo.jpg"
              alt="Ritpro Cleaning Services"
              width={200}
              height={64}
              className="object-contain object-left w-auto h-14 sm:h-16 mb-3 invert"
            />
            <p className="text-sm text-gray-500">
              Clean Spaces. Clear Minds.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/residential"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Residential
              </Link>
              <Link
                href="/commercial"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Commercial
              </Link>
              <Link
                href="/providers"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Providers
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="tel:+61434139623" className="hover:text-white transition-colors">+61 434 139 623</a>
              <a href="mailto:riteprocleaningservices@gmail.com" className="hover:text-white transition-colors">riteprocleaningservices@gmail.com</a>
              <span>Brisbane, QLD</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Ritpro Cleaning Services. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
