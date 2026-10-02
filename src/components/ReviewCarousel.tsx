"use client";

import { useState, useEffect, useCallback } from "react";
import type { Review } from "@/data/reviews";
import { ReviewCard } from "@/components/ReviewCard";

export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = reviews.length;
  const pageSize = 3;
  const pages = Math.ceil(total / pageSize);

  const goTo = useCallback(
    (page: number) => setCurrent(Math.max(0, Math.min(page, pages - 1))),
    [pages]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused || pages <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pages);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, pages]);

  const start = current * pageSize;
  const visible = reviews.slice(start, start + pageSize);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {pages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous reviews"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-terracotta w-5" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next reviews"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
