"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import { REVIEWS } from "@/lib/config";

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 },
    );
    const elements = sectionRef?.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pad px-4 sm:px-6 bg-white"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 scroll-reveal">
          <span className="section-label">⭐ Reviews</span>
          <h2 className="font-display text-section-title font-bold text-foreground mt-3">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-2">
            Real words from real customers who celebrated with Mugdha Caterers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {REVIEWS?.map((review, index) => (
            <div
              key={review?.id}
              className={`scroll-reveal stagger-${Math.min(index + 1, 4)} bg-secondary rounded-3xl p-5 sm:p-6 border border-border hover:shadow-card transition-all duration-300 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review?.rating })?.map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    fill="#F5A623"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4 italic">
                "{review?.review}"
              </p>

              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
                  <AppImage
                    src={review?.avatar}
                    alt={`${review?.name}, customer review photo`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {review?.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review?.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground italic">
            * Reviews shown are representative. More reviews available on
            request.
          </p>
        </div>
      </div>
    </section>
  );
}
