import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews",
  alternates: { canonical: "/reviews" },
  description:
    "Read real reviews from Brisbane customers. Rated 4.6 out of 5 stars from 50+ verified reviews for residential and commercial cleaning.",
  openGraph: {
    title: "Ritepro Cleaning Reviews | Brisbane Customer Feedback",
    description:
      "Read real reviews from Brisbane customers. Rated 4.6 out of 5 stars from 50+ verified reviews for residential and commercial cleaning.",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
