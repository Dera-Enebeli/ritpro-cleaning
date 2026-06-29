import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritpro Cleaning Services | Professional Cleaning",
  description:
    "Professional residential and commercial cleaning services. Clean Spaces. Clear Minds.",
  metadataBase: new URL("https://ritprocleaning.co.uk"),
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    title: "Ritpro Cleaning Services",
    description:
      "Professional residential and commercial cleaning services. Clean Spaces. Clear Minds.",
    images: [
      {
        url: "/logo.jpg",
        width: 1080,
        height: 1080,
        alt: "Ritpro Cleaning Services",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
