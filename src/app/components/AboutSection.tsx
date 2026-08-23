"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import { BUSINESS_CONFIG } from "@/lib/config";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 },
    );
    const elements = sectionRef?.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const highlights = [
    {
      icon: "🌿",
      title: "Fresh Ingredients",
      desc: "Sourced fresh daily, cooked with care",
    },
    {
      icon: "👨‍🍳",
      title: "Expert Chefs",
      desc: "Traditional recipes, modern presentation",
    },
    { icon: "🎉", title: "All Events", desc: "Weddings to corporate lunches" },
    { icon: "🤝", title: "Reliable Service", desc: "On-time, every time" },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-pad px-4 sm:px-6 bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <div className="scroll-reveal relative">
            <div className="relative rounded-3xl overflow-hidden h-72 sm:h-96 lg:h-[480px] shadow-warm-lg">
              <AppImage
                src="https://images.unsplash.com/photo-1696271026737-a00041d5ea54"
                alt="Large catering setup with multiple food stations, warm string lights overhead, dark ambient hall with rich food spread"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(26,16,8,0) 50%, rgba(26,16,8,0.5) 100%)",
                }}
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 glass-card p-4 rounded-2xl shadow-warm-lg animate-float-delayed">
              <p className="text-2xl font-display font-bold text-primary">
                500+
              </p>
              <p className="text-xs text-muted-foreground font-medium">
                Happy Events
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col gap-6 lg:gap-7">
            <div className="scroll-reveal">
              <span className="section-label">About Us</span>
            </div>
            <div className="scroll-reveal stagger-1">
              <h2 className="font-display text-section-title font-bold text-foreground">
                Authentic Flavours,{" "}
                <span className="text-gradient-saffron">Crafted with Love</span>
              </h2>
            </div>
            <div className="scroll-reveal stagger-2">
              <p className="text-base text-muted-foreground leading-relaxed">
                At Mugdha Caterers, we believe every celebration deserves
                extraordinary food. Founded with a passion for authentic Indian
                cuisine, we bring the warmth of home-cooked meals to your most
                special moments.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mt-3">
                From the freshness of our vegetables to the precision of our
                spices, every dish is prepared with care and served with pride.
                Whether it's 50 guests or 500, we deliver consistent quality and
                flavour.
              </p>
            </div>

            {/* Highlights */}
            <div className="scroll-reveal stagger-3 grid grid-cols-2 gap-3">
              {highlights?.map((item) => (
                <div
                  key={item?.title}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-secondary border border-border"
                >
                  <span className="text-2xl flex-shrink-0">{item?.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {item?.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item?.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="scroll-reveal stagger-4">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG?.whatsapp}?text=Hello%20Mugdha%20Caterers!%20I%20would%20like%20to%20plan%20an%20event%20with%20you.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                🎉 Plan Your Event With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
