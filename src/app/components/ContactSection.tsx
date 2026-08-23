"use client";

import React, { useEffect, useRef } from "react";
import { BUSINESS_CONFIG } from "@/lib/config";

export default function ContactSection() {
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
      className="section-pad px-4 sm:px-6 bg-background"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 scroll-reveal">
          <span className="section-label">📍 Get In Touch</span>
          <h2 className="font-display text-section-title font-bold text-foreground mt-3">
            Contact & Location
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Ready to plan your event? Reach out to us directly — we're just a
            call or message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact cards */}
          <div className="flex flex-col gap-4 scroll-reveal">
            {/* Phone */}
            <a
              href={`tel:${BUSINESS_CONFIG?.phone}`}
              className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-border shadow-card hover:shadow-warm transition-all duration-300 group tap-target"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #C8520A, #E8651A)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                  Call Now to Order
                </p>
                <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {BUSINESS_CONFIG?.phone}
                </p>
                <p className="text-xs text-muted-foreground">
                  {BUSINESS_CONFIG?.businessHours}
                </p>
              </div>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG?.whatsapp}?text=Hello%20Mugdha%20Caterers!%20I%20would%20like%20to%20make%20a%20catering%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-border shadow-card hover:shadow-warm transition-all duration-300 group tap-target"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-green-500 transition-all duration-300 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                  WhatsApp Us
                </p>
                <p className="text-base font-bold text-foreground group-hover:text-green-600 transition-colors">
                  Send a Message
                </p>
                <p className="text-xs text-muted-foreground">
                  Quick replies, instant inquiry
                </p>
              </div>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>

            {/* Address */}
            <a
              href={BUSINESS_CONFIG?.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-border shadow-card hover:shadow-warm transition-all duration-300 group tap-target"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(200,82,10,0.1)" }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#C8520A"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                  Our Location
                </p>
                <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {BUSINESS_CONFIG?.address}
                </p>
                <p className="text-xs text-primary font-medium mt-0.5">
                  Tap to open in Maps →
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${BUSINESS_CONFIG?.email}`}
              className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-border shadow-card hover:shadow-warm transition-all duration-300 group tap-target"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(200,82,10,0.1)" }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#C8520A"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                  Email Us
                </p>
                <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {BUSINESS_CONFIG?.email}
                </p>
                <p className="text-xs text-muted-foreground">
                  For detailed inquiries
                </p>
              </div>
            </a>
          </div>

          {/* Map embed placeholder + Quick inquiry */}
          <div className="flex flex-col gap-4 scroll-reveal stagger-2">
            {/* Map placeholder */}
            <div className="relative rounded-3xl overflow-hidden h-56 sm:h-72 lg:h-80 bg-muted border border-border shadow-card">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_CONFIG?.address)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mugdha Caterers Location"
                className="w-full h-full"
              />
              <div className="absolute bottom-4 left-4">
                <a
                  href={BUSINESS_CONFIG?.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-warm text-sm font-semibold text-primary hover:shadow-warm-lg transition-all"
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>

            {/* Quick inquiry card */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-border shadow-card">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                Quick Event Inquiry
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Tell us about your event and we'll get back to you with a
                customised quote.
              </p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG?.whatsapp}?text=Hello%20Mugdha%20Caterers!%20I%20need%20a%20catering%20quote%20for%20my%20event.%20Please%20get%20in%20touch.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-base"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Inquiry on WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS_CONFIG?.phone}`}
                  className="btn-outline w-full justify-center text-base"
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
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
