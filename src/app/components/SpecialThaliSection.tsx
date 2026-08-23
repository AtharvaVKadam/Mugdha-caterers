"use client";

import React, { useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { SPECIAL_THALI, ADD_ONS, BUSINESS_CONFIG } from "@/lib/config";

export default function SpecialThaliSection() {
  const [guests, setGuests] = useState(50);
  const [guestInput, setGuestInput] = useState("50");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleGuestChange = (delta: number) => {
    const newVal = Math.max(10, guests + delta);
    setGuests(newVal);
    setGuestInput(String(newVal));
  };

  const handleInputChange = (val: string) => {
    setGuestInput(val);
    const num = parseInt(val);
    if (!isNaN(num) && num >= 1) {
      setGuests(num);
    }
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  };

  const packageTotal = SPECIAL_THALI.price * guests;

  const addOnTotal = selectedAddOns.reduce((sum, id) => {
    const addon = ADD_ONS.find((a) => a.id === id);
    if (addon?.price) return sum + addon.price * guests;
    return sum;
  }, 0);

  const grandTotal = packageTotal + addOnTotal;

  const buildWhatsAppMessage = () => {
    const selectedAddOnNames = selectedAddOns
      .map((id) => {
        const addon = ADD_ONS.find((a) => a.id === id);
        if (!addon) return "";
        if (addon.price)
          return `${addon.name} — ₹${addon.price} × ${guests} = ₹${addon.price * guests}`;
        return `${addon.name} — Price to be discussed`;
      })
      .filter(Boolean)
      .join("\n");

    const message = `Hello Mugdha Caterers! 👋

I would like to make a catering inquiry.

📦 Selected Package: ${SPECIAL_THALI.name}
👥 Number of People: ${guests}
💰 Price Per Person: ₹${SPECIAL_THALI.price}
💵 Package Total: ₹${packageTotal.toLocaleString("en-IN")}

${selectedAddOnNames ? `✨ Add-Ons:\n${selectedAddOnNames}\n` : ""}
💵 Estimated Total (Fixed Items): ₹${grandTotal.toLocaleString("en-IN")}

Please share availability and final details. Thank you!`;

    return encodeURIComponent(message);
  };

  return (
    <section className="section-pad px-4 sm:px-6 bg-background" id="packages">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label">⭐ Featured Package</span>
          <h2 className="font-display text-section-title font-bold text-foreground mt-3">
            Special Vegetarian Thali
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Complete Traditional Veg Thali — ₹200 Only
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Thali Visual + Items */}
          <div className="food-card overflow-hidden">
            <div className="relative h-56 sm:h-72">
              <AppImage
                src={SPECIAL_THALI.image}
                alt="Traditional Indian thali with multiple colorful dishes on a brass plate, warm festive lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 gradient-warm-top" />
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="veg-badge">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Pure Veg
                </div>
                <div
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #C8520A, #F5A623)",
                  }}
                >
                  ⭐ Best Seller
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-xl text-foreground">
                  {SPECIAL_THALI.name}
                </h3>
                <div className="text-right">
                  <p className="text-2xl font-display font-bold text-primary">
                    ₹200
                  </p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>

              {/* Items grid */}
              <div className="space-y-3">
                {SPECIAL_THALI.items.map((group) => (
                  <div key={group.category} className="flex gap-3">
                    <span className="text-xs font-bold text-muted-foreground w-32 flex-shrink-0 pt-0.5">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-foreground font-medium border border-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="flex flex-col gap-5">
            {/* Guest counter */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-border shadow-card">
              <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2">
                <span className="text-xl">👥</span>
                Number of Guests
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleGuestChange(-10)}
                  disabled={guests <= 10}
                  className="counter-btn flex-shrink-0"
                  aria-label="Decrease by 10"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <input
                    type="number"
                    value={guestInput}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="w-full text-center text-3xl font-display font-bold text-foreground bg-transparent border-none outline-none"
                    min="1"
                    aria-label="Number of guests"
                  />
                  <p className="text-xs text-muted-foreground">people</p>
                </div>
                <button
                  onClick={() => handleGuestChange(10)}
                  className="counter-btn flex-shrink-0"
                  aria-label="Increase by 10"
                >
                  +
                </button>
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                {[25, 50, 100, 200, 500].map((n) => (
                  <button
                    key={n}
                    onClick={() => {
                      setGuests(n);
                      setGuestInput(String(n));
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all tap-target ${
                      guests === n
                        ? "bg-primary text-white border-primary"
                        : "bg-muted text-muted-foreground border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Package total */}
            <div
              className="rounded-2xl p-4 border border-primary/20"
              style={{ background: "rgba(200,82,10,0.05)" }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Package Total</p>
                  <p className="text-xs text-muted-foreground">
                    ₹{SPECIAL_THALI.price} × {guests} guests
                  </p>
                </div>
                <p className="text-2xl font-display font-bold text-primary">
                  ₹{packageTotal.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-border shadow-card">
              <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2">
                <span className="text-xl">✨</span>
                Upgrade Your Meal
              </h3>
              <div className="space-y-3">
                {ADD_ONS.map((addon) => {
                  const isSelected = selectedAddOns.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-2xl border-2 transition-all duration-200 text-left tap-target ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-muted/30 hover:border-primary/50"
                      }`}
                    >
                      <span className="text-2xl flex-shrink-0">
                        {addon.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-bold text-foreground">
                            {addon.name}
                          </p>
                          {addon.popular && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-semibold"
                              style={{
                                background: "rgba(245,166,35,0.15)",
                                color: "#C8520A",
                              }}
                            >
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {addon.description}
                        </p>
                        {addon.price ? (
                          <p className="text-xs font-bold text-primary mt-0.5">
                            +₹{addon.price}/person · ₹
                            {(addon.price * guests).toLocaleString("en-IN")} for{" "}
                            {guests} guests
                          </p>
                        ) : (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Price to be discussed
                          </p>
                        )}
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all ${
                          isSelected
                            ? "bg-primary border-primary"
                            : "border-border"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            width="12"
                            height="12"
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
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grand total */}
            <div
              className="rounded-3xl p-5 text-white"
              style={{
                background: "linear-gradient(135deg, #C8520A, #E8651A)",
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-sm opacity-80">Estimated Total</p>
                  <p className="text-xs opacity-60">(Fixed price items only)</p>
                </div>
                <p className="text-3xl font-display font-bold">
                  ₹{grandTotal.toLocaleString("en-IN")}
                </p>
              </div>
              {addOnTotal > 0 && (
                <div className="text-xs opacity-80 mb-3 space-y-0.5">
                  <p>Package: ₹{packageTotal.toLocaleString("en-IN")}</p>
                  <p>Add-ons: ₹{addOnTotal.toLocaleString("en-IN")}</p>
                </div>
              )}
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white font-bold text-primary text-sm hover:bg-secondary transition-colors tap-target"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
