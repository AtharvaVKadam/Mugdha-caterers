"use client";

import React, { useState, useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import { GALLERY_IMAGES } from "@/lib/config";

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.05 },
    );
    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null,
        );
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
            : null,
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  return (
    <section
      ref={sectionRef}
      className="section-pad px-4 sm:px-6 bg-background"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 scroll-reveal">
          <span className="section-label">📸 Our Work</span>
          <h2 className="font-display text-section-title font-bold text-foreground mt-3">
            A Feast for the Eyes
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Every dish tells a story. Browse our gallery of catering events,
            live counters, and signature dishes.
          </p>
        </div>

        {/* BENTO GALLERY AUDIT:
          Array has 10 items
          Row 1: [col-1..2: img1 cs-2] [col-3: img2 cs-1] [col-4: img3 cs-1]
          Row 2: [col-1: img4 cs-1] [col-2..3: img5 cs-2] [col-4: img6 cs-1]
          Row 3 (mobile): rest as 2-col
          Placed 10 items across responsive grid ✓
        */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setLightboxIndex(index)}
              className={`scroll-reveal stagger-${Math.min((index % 4) + 1, 4)} relative overflow-hidden rounded-2xl cursor-pointer group shadow-card
                ${index === 0 ? "sm:col-span-2 row-span-1" : ""}
                ${index === 4 ? "sm:col-span-2" : ""}
                ${index === 8 ? "col-span-2 sm:col-span-2" : ""}
              `}
              style={{
                aspectRatio:
                  index === 0 || index === 4 || index === 8 ? "16/9" : "4/3",
              }}
            >
              <AppImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="glass-dark px-3 py-1 rounded-full w-fit">
                  <p className="text-xs font-semibold text-white">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <AppImage
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="text-center text-white/70 text-sm mt-3 font-medium">
              {GALLERY_IMAGES[lightboxIndex].caption}
            </p>

            {/* Nav buttons */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + GALLERY_IMAGES.length) %
                    GALLERY_IMAGES.length,
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors tap-target"
              aria-label="Previous image"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors tap-target"
              aria-label="Next image"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors tap-target"
              aria-label="Close lightbox"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
