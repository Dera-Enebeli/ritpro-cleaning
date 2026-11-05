import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free instant quote",
  alternates: { canonical: "/quote" },
  description:
    "Get an instant fixed-price cleaning quote in 60 seconds. No waiting, no obligation. Residential, commercial, end-of-lease, and more. Brisbane-wide.",
  openGraph: {
    title: "Get an Instant Cleaning Quote | Ritepro Brisbane",
    description:
      "Get an instant fixed-price cleaning quote in 60 seconds. No waiting, no obligation. Residential, commercial, end-of-lease, and more. Brisbane-wide.",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
