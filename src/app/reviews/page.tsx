"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewForm } from "@/components/ReviewForm";
import { reviews as staticReviews, reviewStats } from "@/data/reviews";
import type { Review } from "@/data/reviews";

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
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((review) => (
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

        </div>
      </section>

      {/* SHARE YOUR EXPERIENCE — below reviews so clients see reviews first */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-black">Share Your Experience</h2>
              <div className="w-12 h-0.5 bg-terracotta mt-4 mb-4" />
              <p className="text-sm text-gray-500 leading-relaxed">
                Had a clean with Ritepro? Leave a review and help others find the right cleaner for their home or business.
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
    </div>
  );
}
