"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/lib/config";

export default function StickyMobileBar() {
  const [cartCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Hide when scrolling down fast, show when scrolling up
      if (currentY > lastScrollY + 10 && currentY > 300) {
        setVisible(false);
      } else if (currentY < lastScrollY - 5) {
        setVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`sticky-mobile-bar transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Call */}
      <a
        href={`tel:${BUSINESS_CONFIG?.phone}`}
        className="sticky-bar-btn flex-1"
        aria-label="Call Now"
      >
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(200,82,10,0.1)" }}
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="#C8520A"
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
        <span className="text-primary font-semibold">Call</span>
      </a>
      {/* Divider */}
      <div className="w-px h-10 bg-border" />
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${BUSINESS_CONFIG?.whatsapp}?text=Hello%20Mugdha%20Caterers!%20I%20would%20like%20to%20place%20a%20catering%20order.`}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-bar-btn flex-1"
        aria-label="WhatsApp"
      >
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-green-50">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <span className="text-green-600 font-semibold">WhatsApp</span>
      </a>
      {/* Divider */}
      <div className="w-px h-10 bg-border" />
      {/* Order / Menu */}
      <Link
        href="/menu"
        className="sticky-bar-btn flex-1 relative"
        aria-label="View Menu"
      >
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center relative"
          style={{ background: "linear-gradient(135deg, #C8520A, #E8651A)" }}
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-foreground text-xs font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <span className="text-primary font-semibold">Menu</span>
      </Link>
    </div>
  );
}
