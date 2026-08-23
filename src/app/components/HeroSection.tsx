"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import { BUSINESS_CONFIG } from "@/lib/config";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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
    const elements = heroRef?.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 pb-24 md:pb-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FAF8F3 0%, #FDF3E7 50%, #FAF0E0 100%)",
      }}
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 blob-primary opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 blob-accent opacity-40 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 blob-primary opacity-30 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-5 flex flex-col gap-5 relative z-10">
            {/* Badge */}
            <div className="scroll-reveal stagger-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Now Booking for 2026 Events
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="scroll-reveal stagger-2">
              <h1 className="font-display text-hero-xl font-bold text-foreground leading-tight">
                Delicious Food.{" "}
                <span className="text-gradient-saffron">Memorable</span>{" "}
                Celebrations.
              </h1>
            </div>

            {/* Subheadline */}
            <div className="scroll-reveal stagger-3">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                Authentic Indian catering crafted with fresh ingredients and
                love. From intimate house parties to grand weddings — we bring
                the feast to you.
              </p>
            </div>

            {/* Pricing highlight */}
            <div className="scroll-reveal stagger-3">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-border shadow-card">
                <span className="text-2xl font-display font-bold text-primary">
                  ₹200
                </span>
                <div className="w-px h-8 bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground">per person</p>
                  <p className="text-sm font-semibold text-foreground">
                    Special Veg Thali
                  </p>
                </div>
                <div className="veg-badge ml-auto">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Veg
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="scroll-reveal stagger-4 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG?.phone}`}
                className="btn-primary text-base justify-center"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                📞 Call Now to Order
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG?.whatsapp}?text=Hello%20Mugdha%20Caterers!%20I%20would%20like%20to%20inquire%20about%20catering%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base justify-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>

            {/* Explore menu */}
            <div className="scroll-reveal stagger-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
              >
                Explore Full Menu
                <svg
                  width="16"
                  height="16"
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
              </Link>
            </div>
          </div>

          {/* Right: Bento Grid Visual */}
          <div className="lg:col-span-7 hidden lg:block relative h-[580px]">
            {/* BENTO GRID AUDIT:
               Array has 4 items: [MainTall, TopRight, BottomLeft, BottomRight]
               Row 1: [col-1..5: MainTall cs-5 rs-2] [col-6..12: TopRight cs-7 rs-1]
               Row 2: [col-1..5: (occupied)] [col-6..9: BottomLeft cs-4 rs-1] [col-10..12: BottomRight cs-3 rs-1]
               Placed 4/4 ✓
              */}
            <div className="grid grid-cols-12 grid-rows-2 gap-4 h-full">
              {/* MainTall: col-span-5 row-span-2 */}
              <div className="col-span-5 row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer shadow-warm-lg">
                <AppImage
                  src="https://images.unsplash.com/photo-1682142882953-75b4ccd12386"
                  alt="Traditional Indian thali with multiple colorful dishes on a brass plate, warm festive lighting, rich saffron tones"
                  fill
                  sizes="(max-width: 1280px) 30vw, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 gradient-warm" />
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="veg-badge mb-2 inline-flex">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    Pure Veg
                  </span>
                  <p className="text-xs font-medium text-white/70 uppercase tracking-wider">
                    Signature
                  </p>
                  <h3 className="text-lg font-display font-bold">
                    Special Thali
                  </h3>
                  <p className="text-sm font-semibold text-accent">
                    ₹200 / person
                  </p>
                </div>
              </div>

              {/* TopRight: col-span-7 row-span-1 */}
              <div className="col-span-7 row-span-1 rounded-3xl overflow-hidden relative group cursor-pointer shadow-card">
                <AppImage
                  src="https://images.unsplash.com/photo-1723832348105-2e69f948135a"
                  alt="Elegant wedding buffet setup with Indian dishes under warm string lights, dark ambient hall, wooden tables"
                  fill
                  sizes="(max-width: 1280px) 40vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 gradient-warm" />
                <div className="absolute top-4 right-4">
                  <div className="glass-dark px-3 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-xs font-semibold text-white">
                      Wedding Catering
                    </span>
                  </div>
                </div>
              </div>

              {/* BottomLeft: col-span-4 row-span-1 */}
              <div className="col-span-4 row-span-1 rounded-3xl overflow-hidden relative group cursor-pointer shadow-card">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_165a27f93-1784476048517.png"
                  alt="Chef preparing dosas at a live food counter, steam rising, evening event lighting, dark background"
                  fill
                  sizes="(max-width: 1280px) 25vw, 250px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 gradient-warm" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">
                    🔥 Live
                  </p>
                  <p className="text-sm font-semibold">Dosa Counter</p>
                </div>
              </div>

              {/* BottomRight: col-span-3 row-span-1 */}
              <div
                className="col-span-3 row-span-1 rounded-3xl overflow-hidden relative flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #C8520A, #F5A623)",
                }}
              >
                <div className="text-center text-white p-4">
                  <p className="text-3xl font-display font-bold">500+</p>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
                    Events Catered
                  </p>
                  <p className="text-xs opacity-70 mt-1">Across the Region</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -left-8 top-1/3 glass-card p-4 rounded-2xl shadow-warm-lg animate-float w-52">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "rgba(200,82,10,0.1)" }}
                >
                  🍽️
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Today's Special
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Special Veg Thali
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-secondary">
                <span className="text-xs text-muted-foreground">
                  Per Person
                </span>
                <span className="text-sm font-bold text-primary">₹200</span>
              </div>
            </div>
          </div>

          {/* Mobile Hero Image */}
          <div className="lg:hidden w-full">
            <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-warm-lg">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1e4e6e9d2-1772194107998.png"
                alt="Traditional Indian thali with multiple colorful dishes on a brass plate, warm festive lighting"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 gradient-warm" />
              <div className="absolute bottom-5 left-5 text-white">
                <div className="veg-badge mb-2 inline-flex">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Pure Veg
                </div>
                <h3 className="text-xl font-display font-bold">
                  Special Thali — ₹200
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
