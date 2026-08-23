"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import { SERVICES, BUSINESS_CONFIG } from "@/lib/config";

export default function ServicesSection() {
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
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 scroll-reveal">
          <span className="section-label">🎉 We Cater For</span>
          <h2 className="font-display text-section-title font-bold text-foreground mt-3">
            Every Celebration, Every Occasion
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            From intimate gatherings to grand events, Mugdha Caterers brings
            authentic flavours to every celebration.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
          Array has 6 items: [Wedding, Birthday, Corporate, HouseParty, Religious, Bulk]
          Row 1: [col-1..2: Wedding cs-2] [col-3: Birthday cs-1]
          Row 2: [col-1: Corporate cs-1] [col-2..3: HouseParty cs-2]
          Row 3: [col-1..2: Religious cs-2] [col-3: Bulk cs-1]
          Placed 6/6 ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES?.map((service, index) => (
            <div
              key={service?.id}
              className={`scroll-reveal stagger-${Math.min(index + 1, 4)} food-card group relative overflow-hidden ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              } ${index === 3 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <div
                className={`relative overflow-hidden ${index === 0 || index === 3 ? "h-52 sm:h-64" : "h-52"}`}
              >
                <AppImage
                  src={service?.image}
                  alt={`${service?.name} catering setup with Indian food, warm ambient lighting, elegant event decoration`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 gradient-warm" />
                <div className="absolute top-4 left-4">
                  <span className="text-3xl">{service?.icon}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {service?.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service?.description}
                </p>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG?.whatsapp}?text=Hello%20Mugdha%20Caterers!%20I%20need%20catering%20for%20a%20${encodeURIComponent(service?.name)}%20event.%20Please%20share%20details%20and%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                >
                  Get a Catering Quote
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
