import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://riteprocleaning.com.au";

export const metadata: Metadata = {
  title: {
    default: "Ritepro Cleaning Brisbane | Professional Cleaning Services",
    template: "%s | Ritepro Cleaning Brisbane",
  },
  description:
    "Professional residential and commercial cleaning services in Brisbane. Reliable, insured, and satisfaction guaranteed. Get a free quote in 60 seconds.",
  metadataBase: new URL(siteUrl),
  // No canonical here on purpose. Metadata is inherited parent -> child, so
  // a canonical set in the root layout would be applied to every route and
  // tell search engines all pages are duplicates of the homepage.
  // Each page declares its own canonical instead.
  // /favicon.ico is served from src/app/favicon.ico — Next.js cache-busts
  // it with a content hash on every deploy, so browsers always pick up changes.
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Ritepro Cleaning Brisbane",
    title: "Ritepro Cleaning Brisbane | Professional Cleaning Services",
    description:
      "Professional residential and commercial cleaning services in Brisbane. Reliable, insured, and satisfaction guaranteed.",
    url: siteUrl,
    images: [
      {
        url: "/logo.jpg",
        width: 1080,
        height: 1080,
        alt: "Ritepro Cleaning Services Brisbane",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ritepro Cleaning Services",
              image: `${siteUrl}/logo.jpg`,
              telephone: "+61 434 139 623",
              email: "riteprocleaningservices@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                addressCountry: "AU",
              },
              areaServed: "Brisbane",
              priceRange: "$150 – $900",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "50",
                bestRating: "5",
              },
              sameAs: [
                "https://www.instagram.com/ritepro_",
              ],
              url: siteUrl,
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
