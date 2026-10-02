"use client";

import { useState } from "react";
import type { Review } from "@/data/reviews";

function StarButton({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="p-0.5 -m-0.5">
      <svg
        className={`w-8 h-8 transition-colors ${selected ? "text-amber-400" : "text-gray-200 hover:text-amber-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </button>
  );
}

interface ReviewFormProps {
  onSubmitted: (review: Review) => void;
}

export function ReviewForm({ onSubmitted }: ReviewFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!name.trim() || !email.trim() || rating === 0 || !content.trim()) return;
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), rating, content: content.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit");
      }

      const submitted: Review = {
        id: `user-${Date.now()}`,
        name: name.trim(),
        rating,
        content: content.trim(),
        tags: [],
      };

      const stored = JSON.parse(localStorage.getItem("ritepro-reviews") || "[]");
      stored.unshift(submitted);
      localStorage.setItem("ritepro-reviews", JSON.stringify(stored));

      onSubmitted(submitted);
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="bg-sage/10 border border-sage/20 rounded-xl p-8 text-center">
        <div className="w-14 h-14 bg-sage/20 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-black">Thank You!</h3>
        <p className="mt-1 text-sm text-gray-500">
          Your review has been submitted and will appear after moderation.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8">
      <h3 className="text-lg font-bold text-black mb-6">Write a Review</h3>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating *</label>
          <div
            className="flex gap-1"
            onMouseLeave={() => setHoverRating(0)}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <StarButton
                key={star}
                selected={star <= (hoverRating || rating)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="review-name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
            <input
              id="review-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate focus:border-transparent"
              placeholder="e.g. Sarah M."
            />
          </div>
          <div>
            <label htmlFor="review-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              id="review-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="review-content" className="block text-sm font-medium text-gray-700 mb-1">Your Review *</label>
          <textarea
            id="review-content"
            required
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate focus:border-transparent resize-none"
            placeholder="Tell others about your experience..."
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={sending || !name.trim() || !email.trim() || rating === 0 || !content.trim()}
          className="w-full bg-black text-white py-3.5 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors disabled:opacity-40"
        >
          {sending ? "Submitting..." : "Submit Review"}
        </button>

        <p className="text-xs text-gray-400 text-center">
          Your email won&apos;t be published. Reviews are moderated before appearing.
        </p>
      </div>
    </div>
  );
}
