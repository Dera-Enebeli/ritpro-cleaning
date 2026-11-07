import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Quote",
  alternates: { canonical: "/quote" },
  description:
    "Request a cleaning quote in about 60 seconds. No waiting, no obligation. Residential and commercial cleaning, end-of-lease, Airbnb turnovers and more across Ipswich.",
  openGraph: {
    title: "Get a Free Cleaning Quote | Ritepro Cleaning",
    description:
      "Request a cleaning quote in about 60 seconds. No waiting, no obligation. Residential and commercial cleaning, end-of-lease, Airbnb turnovers and more across Ipswich.",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
