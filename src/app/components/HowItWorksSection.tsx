"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { HOW_IT_WORKS, BUSINESS_CONFIG } from "@/lib/config";

export default function HowItWorksSection() {
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
      className="section-pad px-4 sm:px-6 bg-secondary"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 scroll-reveal">
          <span className="section-label">📋 Simple Process</span>
          <h2 className="font-display text-section-title font-bold text-foreground mt-3">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Ordering catering from Mugdha Caterers is simple. Here's how to get
            started.
          </p>
        </div>

        {/* Steps — asymmetric layout, not a uniform 3-col grid */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {HOW_IT_WORKS?.map((step, index) => (
              <div
                key={step?.step}
                className={`scroll-reveal stagger-${Math.min(index + 1, 4)} relative flex flex-col items-center text-center`}
              >
                {/* Step number + icon */}
                <div className="relative mb-4">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl shadow-warm transition-transform duration-300 hover:scale-110"
                    style={{
                      background:
                        index % 2 === 0
                          ? "linear-gradient(135deg, #C8520A, #E8651A)"
                          : "white",
                      border:
                        index % 2 !== 0 ? "2px solid var(--border)" : "none",
                    }}
                  >
                    {step?.icon}
                  </div>
                  <div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#1A1008" }}
                  >
                    {step?.step}
                  </div>
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base mb-1.5">
                  {step?.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {step?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-reveal mt-10 text-center flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/menu" className="btn-primary text-base">
            🍽️ Start Your Order
          </Link>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG?.whatsapp}?text=Hello%20Mugdha%20Caterers!%20I%20need%20a%20catering%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base"
          >
            💬 Quick Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
