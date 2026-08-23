"use client";

import React, { useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { LIVE_COUNTERS, BUSINESS_CONFIG } from "@/lib/config";

export default function LiveCountersSection() {
  const [selectedCounters, setSelectedCounters] = useState<string[]>([]);
  const [guests, setGuests] = useState(50);
  const [guestInput, setGuestInput] = useState("50");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const toggleCounter = (id: string) => {
    setSelectedCounters((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const handleGuestChange = (delta: number) => {
    const newVal = Math.max(10, guests + delta);
    setGuests(newVal);
    setGuestInput(String(newVal));
  };

  const buildWhatsAppMessage = () => {
    const countersText = selectedCounters
      .map((id) => {
        const counter = LIVE_COUNTERS.find((c) => c.id === id);
        return counter ? `• ${counter.name}` : "";
      })
      .filter(Boolean)
      .join("\n");

    const message = `Hello Mugdha Caterers! 👋

I would like to inquire about Live Food Counters.

🔥 Selected Live Counters:
${countersText || "None selected yet"}

👥 Number of Expected Guests: ${guests}
📅 Event Date: ${eventDate || "To be confirmed"}
🎉 Event Type: ${eventType || "To be confirmed"}
📍 Event Location: ${eventLocation || "To be confirmed"}

👤 Name: ${customerName || "Not provided"}
📱 Phone: ${customerPhone || "Not provided"}

⚠️ Note: Live counter pricing depends on selected counters, guest count, and event details.

Please share availability and quote. Thank you!`;

    return encodeURIComponent(message);
  };

  return (
    <section
      className="section-pad px-4 sm:px-6 bg-foreground text-white"
      id="live-counters"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-primary/20 text-accent">
            🔥 Premium Feature
          </span>
          <h2 className="font-display text-section-title font-bold text-white mt-3">
            Live Food Counters
          </h2>
          <p className="text-white/60 mt-2 max-w-2xl mx-auto text-base">
            Freshly Prepared. Live. Right at Your Event. Add excitement with our
            interactive live counters — a crowd favourite at every celebration.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70">
            <span>ℹ️</span>
            Pricing depends on selected counters, guest count & event details —
            Quote provided on request
          </div>
        </div>

        {/* Counter cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {LIVE_COUNTERS.map((counter) => {
            const isSelected = selectedCounters.includes(counter.id);
            return (
              <button
                key={counter.id}
                onClick={() => toggleCounter(counter.id)}
                className={`relative rounded-2xl overflow-hidden text-left transition-all duration-300 tap-target group ${
                  isSelected
                    ? "ring-2 ring-accent scale-[1.02]"
                    : "hover:scale-[1.01]"
                }`}
                aria-pressed={isSelected}
              >
                <div className="relative h-28 sm:h-36">
                  <AppImage
                    src={counter.image}
                    alt={`${counter.name} being prepared at a live food counter, evening event lighting, dark atmospheric background`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(26,16,8,0) 30%, rgba(26,16,8,0.85) 100%)",
                    }}
                  />
                  {isSelected && (
                    <div
                      className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: "#F5A623" }}
                    >
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p className="text-xs font-bold text-white leading-tight">
                    {counter.name}
                  </p>
                  {counter.subtitle && (
                    <p className="text-xs text-white/60 mt-0.5 leading-tight">
                      {counter.subtitle}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected summary + form */}
        {selectedCounters.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 mb-6">
            <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              ✅ Selected Counters ({selectedCounters.length})
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedCounters.map((id) => {
                const counter = LIVE_COUNTERS.find((c) => c.id === id);
                if (!counter) return null;
                return (
                  <span
                    key={id}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-accent/40"
                    style={{ background: "rgba(245,166,35,0.15)" }}
                  >
                    {counter.icon} {counter.name}
                    <button
                      onClick={() => toggleCounter(id)}
                      className="ml-1 opacity-60 hover:opacity-100 transition-opacity"
                      aria-label={`Remove ${counter.name}`}
                    >
                      ×
                    </button>
                  </span>
                );
              })}
            </div>

            {/* Event details form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-white/60 mb-1 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/60 mb-1 block">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/60 mb-1 block">
                  Event Date
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-accent/60 transition-colors"
                  style={{ colorScheme: "dark" }}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/60 mb-1 block">
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-accent/60 transition-colors"
                  style={{ colorScheme: "dark" }}
                >
                  <option value="">Select event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="House Party">House Party</option>
                  <option value="Religious Function">Religious Function</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-white/60 mb-1 block">
                  Number of Guests
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleGuestChange(-10)}
                    disabled={guests <= 10}
                    className="counter-btn flex-shrink-0 w-10 h-10 text-base"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={guestInput}
                    onChange={(e) => {
                      setGuestInput(e.target.value);
                      const n = parseInt(e.target.value);
                      if (!isNaN(n) && n >= 1) setGuests(n);
                    }}
                    className="flex-1 text-center px-3 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-bold focus:outline-none focus:border-accent/60"
                    min="1"
                  />
                  <button
                    onClick={() => handleGuestChange(10)}
                    className="counter-btn flex-shrink-0 w-10 h-10 text-base"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-white/60 mb-1 block">
                  Event Location / Area
                </label>
                <input
                  type="text"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  placeholder="City / Area / Venue"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${buildWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center mt-5 text-base"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Request Quote on WhatsApp
            </a>
          </div>
        )}

        {selectedCounters.length === 0 && (
          <div className="text-center py-6">
            <p className="text-white/50 text-sm">
              Tap any counter above to select it, then request a quote
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
