"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewForm } from "@/components/ReviewForm";
import { reviews as staticReviews, reviewStats } from "@/data/reviews";
import type { Review } from "@/data/reviews";

const allFilter = { value: "all", label: "All Reviews" };
const categoryFilters = [
  allFilter,
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "ndis", label: "NDIS & Providers" },
  { value: "platform", label: "Platform Experience" },
];

const PER_PAGE = 6;

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [userReviews, setUserReviews] = useState<Review[]>([]);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      try {
        const stored = JSON.parse(localStorage.getItem("ritepro-reviews") || "[]");
        if (Array.isArray(stored)) setUserReviews(stored);
      } catch { /* ignore */ }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const allReviews = useMemo(
    () => [...userReviews, ...staticReviews],
    [userReviews]
  );

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? allReviews
        : activeFilter === "recent"
        ? userReviews
        : allReviews.filter((r) => r.tags.includes(activeFilter)),
    [activeFilter, allReviews, userReviews]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = useMemo(
    () => filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [filtered, page]
  );

  const handleSubmitted = useCallback((review: Review) => {
    setUserReviews((prev) => [review, ...prev]);
    setPage(1);
  }, []);

  return (
    <div>
      {/* HERO WITH STATS */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                Customer Reviews
              </h1>
              <p className="mt-3 text-lg text-gray-300">
                Real feedback from real customers across Brisbane. Every review
                is from an actual booking through Ritepro.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-gray-800 rounded-xl p-6 text-center">
                  <p className="text-5xl font-black text-white">{reviewStats.average}</p>
                  <div className="flex justify-center gap-0.5 mt-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Overall rating</p>
                </div>

                <div className="bg-white/5 border border-gray-800 rounded-xl p-6 text-center">
                  <p className="text-5xl font-black text-white">50+</p>
                  <p className="text-sm text-gray-400 mt-2">Verified reviews</p>
                </div>

                <div className="bg-white/5 border border-gray-800 rounded-xl p-6 text-center">
                  <p className="text-5xl font-black text-white">4.9</p>
                  <div className="flex justify-center gap-0.5 mt-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Google rating</p>
                </div>
              </div>

              <div className="mt-4 bg-white/5 border border-gray-800 rounded-xl p-5">
                {reviewStats.distribution.map((d) => (
                  <div key={d.stars} className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400 w-6 shrink-0 text-right">{d.stars}</span>
                    <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all"
                        style={{ width: `${d.percentage}%` }}
                      />
                    </div>
                    <span className="text-gray-500 w-8 shrink-0">{d.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHARE YOUR EXPERIENCE — moved up so it's instantly visible */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-black">Share Your Experience</h2>
              <div className="w-12 h-0.5 bg-terracotta mt-4 mb-4" />
              <p className="text-sm text-gray-500 leading-relaxed">
                Had a clean with Ritepro? Leave a review and help others find
                the right cleaner for their home or business.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
                <svg className="w-5 h-5 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your email won&apos;t be published</span>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ReviewForm onSubmitted={handleSubmitted} />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categoryFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => {
                  setActiveFilter(f.value);
                  setPage(1);
                }}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeFilter === f.value
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Showing page <strong>{page}</strong> of {totalPages}
            {' '}({filtered.length} total reviews)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((review) => (
              <div key={review.id} className="relative">
                {review.id.startsWith("user-") && (
                  <span className="absolute -top-2 -right-2 z-10 bg-terracotta text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-20">
              No reviews found for this category.
            </p>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-all disabled:opacity-20 disabled:cursor-not-allowed text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Prev
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPage(n)}
                    className={`w-7 h-7 rounded text-xs font-medium transition-all ${
                      n === page
                        ? "text-gray-800 bg-gray-100"
                        : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-all disabled:opacity-20 disabled:cursor-not-allowed text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                Next
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
