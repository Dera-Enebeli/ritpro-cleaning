import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < review.rating ? "text-amber-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">
        &ldquo;{review.content}&rdquo;
      </p>
      <div className="mt-4 pt-4 border-t border-gray-50">
        <p className="text-sm font-bold text-black">{review.name}</p>
        {review.location && (
          <p className="text-xs text-gray-400">{review.location}</p>
        )}
      </div>
    </div>
  );
}

export function InlineTestimonial({ review }: { review: Review }) {
  return (
    <div className="bg-sage/10 border border-sage/20 rounded-xl p-5 mb-6">
      <div className="flex gap-0.5 mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < review.rating ? "text-amber-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-700 italic leading-relaxed">
        &ldquo;{review.content}&rdquo;
      </p>
      <p className="mt-2 text-sm font-bold text-gray-900">— {review.name}</p>
    </div>
  );
}
