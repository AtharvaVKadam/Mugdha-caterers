"use client";

import React, { useState, useMemo } from "react";
import AppImage from "@/components/ui/AppImage";
import { BUSINESS_CONFIG, LIVE_COUNTERS } from "@/lib/config";

// ─── Menu Data ────────────────────────────────────────────────────────────────
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | null;
  category: string;
  image: string;
  isVeg: boolean;
  pricingUnit?: "person" | "kg";
  isBestSeller?: boolean;
  isTodaySpecial?: boolean;
  isPopular?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // Special Thalis
  {
    id: "thali-veg-special",
    name: "Special Vegetarian Thali",
    description:
      "Complete traditional veg thali with rice, dal tadka, 2 sabji, roti, puri, gulab jamun, salad, papad & pickle",
    price: 200,
    category: "Special Thalis",
    image: "https://images.unsplash.com/photo-1654762782546-8e1b87d8d924",
    isVeg: true,
    isBestSeller: true,
    isTodaySpecial: true,
  },
  {
    id: "thali-nonveg-special",
    name: "Special Non-Veg Thali",
    description:
      "Hearty non-veg thali with rice, flavourful chicken gravy, spicy chicken sukka & jowar bhakri",
    price: 220,
    category: "Special Thalis",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    isVeg: false,
    isBestSeller: true,
  },
  // Biryani
  {
    id: "biryani-veg",
    name: "Veg Biryani",
    description:
      "Fragrant, flavourful & perfectly spiced vegetable biryani, served in a rich aromatic style",
    price: 700,
    pricingUnit: "kg",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "biryani-chicken",
    name: "Chicken Biryani",
    description:
      "Deliciously spiced chicken biryani prepared with aromatic rice and tender chicken pieces",
    price: 800,
    pricingUnit: "kg",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
    isVeg: false,
    isBestSeller: true,
  },
  // Rice
  {
    id: "rice-steamed",
    name: "Steamed Rice",
    description: "Perfectly cooked long-grain basmati rice",
    price: null,
    category: "Rice",
    image: "https://images.unsplash.com/photo-1627482265910-5c0ff6bee088",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "rice-jeera",
    name: "Jeera Rice",
    description: "Fragrant basmati rice tempered with cumin seeds and ghee",
    price: null,
    category: "Rice",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_15dbafb4a-1764675886662.png",
    isVeg: true,
    isPopular: true,
  },
  // Dal
  {
    id: "dal-tadka",
    name: "Dal Tadka",
    description:
      "Yellow lentils tempered with ghee, cumin, garlic and dried red chilli",
    price: null,
    category: "Dal",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1ae002055-1772309481794.png",
    isVeg: true,
    isBestSeller: true,
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    description: "Slow-cooked black lentils in a rich tomato and cream gravy",
    price: null,
    category: "Dal",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_148c23cac-1764651863855.png",
    isVeg: true,
    isPopular: true,
  },
  // Vegetable Preparations
  {
    id: "sabji-seasonal",
    name: "Seasonal Vegetable Sabji",
    description:
      "Fresh seasonal vegetables cooked in traditional Indian spices",
    price: null,
    category: "Vegetable Preparations",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1c5b2e0f5-1785067848849.png",
    isVeg: true,
  },
  {
    id: "sabji-special",
    name: "Chef's Special Veg Sabji",
    description: "Our chef's signature daily preparation with fresh vegetables",
    price: null,
    category: "Vegetable Preparations",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_13d352cf7-1773982756586.png",
    isVeg: true,
    isBestSeller: true,
  },
  {
    id: "paneer-butter",
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in a rich, creamy tomato-based gravy",
    price: null,
    category: "Vegetable Preparations",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1841404fe-1772184688119.png",
    isVeg: true,
    isPopular: true,
  },
  // Breads
  {
    id: "bread-roti",
    name: "Fresh Roti / Chapati",
    description: "Soft whole wheat flatbread made fresh to order",
    price: null,
    category: "Breads",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1b360b38e-1775062136912.png",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "bread-puri",
    name: "Puri",
    description: "Deep-fried fluffy whole wheat bread, crispy and golden",
    price: null,
    category: "Breads",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1e1bdc612-1774200738675.png",
    isVeg: true,
  },
  {
    id: "bread-bhakri",
    name: "Jowar Bhakri",
    description: "Traditional Maharashtrian sorghum flatbread, made fresh",
    price: null,
    category: "Breads",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1a3d3718b-1786131051235.png",
    isVeg: true,
  },
  // Desserts
  {
    id: "sweet-gulab-jamun",
    name: "Gulab Jamun",
    description:
      "Soft milk-solid dumplings soaked in rose-flavoured sugar syrup",
    price: null,
    category: "Desserts",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1ebb8e7f5-1784181270456.png",
    isVeg: true,
    isBestSeller: true,
  },
  {
    id: "sweet-jalebi",
    name: "Jalebi",
    description: "Crispy spiral-shaped sweets soaked in saffron sugar syrup",
    price: null,
    category: "Desserts",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1d4a3dc0e-1786202470778.png",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "sweet-rasmalai",
    name: "Rasmalai",
    description: "Soft paneer patties in chilled saffron-flavoured milk",
    price: null,
    category: "Desserts",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_14f97219c-1774257830637.png",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "sweet-basundi",
    name: "Basundi",
    description: "Thickened sweetened milk dessert with cardamom and nuts",
    price: null,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1669200236020-fc78dd7cfbac",
    isVeg: true,
  },
  // Accompaniments
  {
    id: "acc-salad",
    name: "Fresh Garden Salad",
    description: "Crisp seasonal vegetables with a light lemon dressing",
    price: null,
    category: "Accompaniments",
    image: "https://images.unsplash.com/photo-1659603903007-28c60a54687d",
    isVeg: true,
  },
  {
    id: "acc-papad",
    name: "Roasted Papad",
    description: "Crispy thin lentil wafer, roasted to perfection",
    price: null,
    category: "Accompaniments",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1da3386f7-1765389444103.png",
    isVeg: true,
  },
  {
    id: "acc-pickle",
    name: "Traditional Indian Pickle",
    description: "Tangy homestyle achar — mango, lime or mixed",
    price: null,
    category: "Accompaniments",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1624301a6-1783512248007.png",
    isVeg: true,
  },
  // Starters
  {
    id: "starter-samosa",
    name: "Crispy Samosa",
    description: "Golden pastry filled with spiced potato and peas",
    price: null,
    category: "Starters",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1588e47e1-1770103239544.png",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "starter-kachori",
    name: "Kachori",
    description: "Flaky deep-fried pastry with spiced lentil filling",
    price: null,
    category: "Starters",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1471e7873-1778329978247.png",
    isVeg: true,
  },
];

const CATEGORIES = [
  "All",
  "Special Thalis",
  "Starters",
  "Biryani",
  "Rice",
  "Dal",
  "Vegetable Preparations",
  "Breads",
  "Desserts",
  "Accompaniments",
];

// ─── Cart Types ────────────────────────────────────────────────────────────────
interface CartItem {
  item: MenuItem;
  quantity: number;
}

export default function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegFilter, setVegFilter] = useState<"all" | "veg" | "nonveg">("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [guests, setGuests] = useState(50);
  const [guestInput, setGuestInput] = useState("50");
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedLiveCounters, setSelectedLiveCounters] = useState<string[]>(
    [],
  );

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchVeg =
        vegFilter === "all" ||
        (vegFilter === "veg" && item.isVeg) ||
        (vegFilter === "nonveg" && !item.isVeg);
      return matchCategory && matchSearch && matchVeg;
    });
  }, [activeCategory, searchQuery, vegFilter]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c,
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((c) =>
          c.item.id === itemId ? { ...c, quantity: c.quantity - 1 } : c,
        );
      }
      return prev.filter((c) => c.item.id !== itemId);
    });
  };

  const getItemQuantity = (itemId: string) => {
    return cart.find((c) => c.item.id === itemId)?.quantity ?? 0;
  };

  const totalCartItems = cart.reduce((sum, c) => sum + c.quantity, 0);

  const toggleLiveCounter = (id: string) => {
    setSelectedLiveCounters((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const buildWhatsAppMessage = () => {
    const itemLines = cart
      .map(
        (c) =>
          `• ${c.item.name} × ${c.quantity}${c.item.pricingUnit === "kg" ? " kg" : ""}`,
      )
      .join("\n");

    const liveCounterLines = selectedLiveCounters
      .map((id) => {
        const counter = LIVE_COUNTERS.find((c) => c.id === id);
        return counter ? `• ${counter.name}` : "";
      })
      .filter(Boolean)
      .join("\n");

    const message = `Hello Mugdha Caterers! 👋

I would like to place a catering inquiry.

👥 Number of Guests: ${guests}

🍽️ Selected Menu Items:
${itemLines || "No specific items selected"}

${liveCounterLines ? `🔥 Live Counters Requested:\n${liveCounterLines}\n` : ""}
📝 Please share pricing and availability for the above items for ${guests} guests.

Thank you!`;

    return encodeURIComponent(message);
  };

  return (
    <div className="pt-16 pb-24 md:pb-16">
      {/* Page Header */}
      <div className="bg-foreground text-white py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/30 text-accent mb-3">
            🍽️ Our Menu
          </span>
          <h1 className="font-display text-hero-lg font-bold text-white">
            Full Menu
          </h1>
          <p className="text-white/60 mt-2 max-w-xl text-base">
            Explore our complete menu. Select items, enter your guest count, and
            send your inquiry directly on WhatsApp.
          </p>

          {/* Guest count in header */}
          <div className="mt-5 inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 border border-white/20">
            <span className="text-sm font-semibold text-white/80">
              👥 Guests:
            </span>
            <button
              onClick={() => {
                const n = Math.max(10, guests - 10);
                setGuests(n);
                setGuestInput(String(n));
              }}
              disabled={guests <= 10}
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-base bg-primary text-white disabled:opacity-40 tap-target"
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
              className="w-16 text-center bg-transparent text-white font-bold text-lg border-none outline-none"
              min="1"
            />

            <button
              onClick={() => {
                const n = guests + 10;
                setGuests(n);
                setGuestInput(String(n));
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-base bg-primary text-white tap-target"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Search + Filters */}
        <div className="py-5 flex flex-col sm:flex-row gap-3 sticky top-16 z-30 bg-background pb-3 pt-4 border-b border-border">
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
            />
          </div>
          {/* Veg filter */}
          <div className="flex gap-2">
            {(["all", "veg", "nonveg"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setVegFilter(f)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all tap-target ${
                  vegFilter === f
                    ? f === "veg"
                      ? "bg-green-500 text-white border-green-500"
                      : f === "nonveg"
                        ? "bg-red-500 text-white border-red-500"
                        : "bg-primary text-white border-primary"
                    : "bg-muted text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {f === "all" ? "All" : f === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
              </button>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-3 -mx-4 px-4 sm:-mx-6 sm:px-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-all tap-target ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-warm"
                  : "bg-white text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Today's Special Banner */}
        {activeCategory === "All" && (
          <div
            className="my-4 rounded-2xl overflow-hidden relative h-28 sm:h-36"
            style={{ background: "linear-gradient(135deg, #C8520A, #F5A623)" }}
          >
            <div className="absolute inset-0 flex items-center justify-between px-5 sm:px-8">
              <div className="text-white">
                <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">
                  ⭐ Today's Special
                </p>
                <h3 className="font-display font-bold text-xl sm:text-2xl">
                  Special Veg Thali
                </h3>
                <p className="text-white/80 text-sm">
                  Complete meal for ₹200/person
                </p>
              </div>
              <div className="text-right text-white">
                <p className="text-3xl sm:text-4xl font-display font-bold">
                  ₹200
                </p>
                <p className="text-xs opacity-80">per person</p>
              </div>
            </div>
          </div>
        )}

        {/* Menu grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-bold text-foreground text-lg mb-1">
              No items found
            </p>
            <p className="text-muted-foreground text-sm">
              Try a different search or category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {filteredItems.map((item) => {
              const qty = getItemQuantity(item.id);
              return (
                <div key={item.id} className="food-card group flex flex-col">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <AppImage
                      src={item.image}
                      alt={`${item.name}, ${item.isVeg ? "vegetarian" : "non-vegetarian"} Indian dish, warm food photography`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {item.isTodaySpecial && (
                        <span
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold text-white"
                          style={{
                            background:
                              "linear-gradient(135deg, #C8520A, #F5A623)",
                          }}
                        >
                          ⭐ Today's Special
                        </span>
                      )}
                      {item.isBestSeller && !item.isTodaySpecial && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold text-white bg-foreground/80">
                          🔥 Best Seller
                        </span>
                      )}
                      {item.isPopular &&
                        !item.isBestSeller &&
                        !item.isTodaySpecial && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-accent/20 text-foreground border border-accent/30">
                            Popular
                          </span>
                        )}
                    </div>
                    {/* Veg indicator */}
                    <div className="absolute top-3 right-3">
                      <div
                        className={`w-6 h-6 rounded flex items-center justify-center border-2 ${item.isVeg ? "border-green-500 bg-white" : "border-red-500 bg-white"}`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${item.isVeg ? "bg-green-500" : "bg-red-500"}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="font-bold text-foreground text-sm sm:text-base mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1 mb-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between gap-3 mt-auto">
                      <div>
                        {item.price ? (
                          <p className="font-display font-bold text-lg text-primary">
                            ₹{item.price}
                            <span className="text-xs font-normal text-muted-foreground">
                              /{item.pricingUnit === "kg" ? "kg" : "person"}
                            </span>
                          </p>
                        ) : (
                          <p className="text-xs text-muted-foreground font-medium italic">
                            Price on request
                          </p>
                        )}
                      </div>

                      {/* Add to cart */}
                      {qty === 0 ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 tap-target"
                        >
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
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 rounded-xl flex items-center justify-center bg-primary/10 text-primary font-bold tap-target"
                          >
                            −
                          </button>
                          <span className="text-sm font-bold text-foreground w-6 text-center">
                            {qty}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-8 h-8 rounded-xl flex items-center justify-center bg-primary text-white font-bold tap-target"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Live Counters Section on Menu Page */}
        <div className="mt-8 mb-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">
                🔥 Live Food Counters
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Add live counters to your event — pricing on request
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {LIVE_COUNTERS.map((counter) => {
              const isSelected = selectedLiveCounters.includes(counter.id);
              return (
                <button
                  key={counter.id}
                  onClick={() => toggleLiveCounter(counter.id)}
                  className={`relative rounded-2xl overflow-hidden text-left transition-all duration-300 tap-target group ${
                    isSelected
                      ? "ring-2 ring-primary scale-[1.02]"
                      : "hover:scale-[1.01]"
                  }`}
                >
                  <div className="relative h-24 sm:h-32">
                    <AppImage
                      src={counter.image}
                      alt={`${counter.name} being prepared at a live food counter, evening event lighting, dark atmospheric background`}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
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
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center bg-primary">
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
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-xs font-bold text-white leading-tight">
                      {counter.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cart Summary — Fixed bottom on mobile, sidebar on desktop */}
      {(totalCartItems > 0 || selectedLiveCounters.length > 0) && (
        <>
          {/* Mobile: Floating cart button */}
          <div className="fixed bottom-20 right-4 z-40 md:hidden">
            <button
              onClick={() => setCartOpen(true)}
              className="btn-primary rounded-2xl px-5 py-3 shadow-warm-lg relative"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="font-bold">View Order</span>
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-foreground text-xs font-bold flex items-center justify-center">
                {totalCartItems + selectedLiveCounters.length}
              </span>
            </button>
          </div>

          {/* Desktop: Sticky sidebar */}
          <div className="hidden md:block fixed top-20 right-4 z-40 w-80">
            <CartSummaryCard
              cart={cart}
              selectedLiveCounters={selectedLiveCounters}
              guests={guests}
              onRemove={removeFromCart}
              onAdd={addToCart}
              onToggleLiveCounter={toggleLiveCounter}
              whatsappMessage={buildWhatsAppMessage()}
              whatsapp={BUSINESS_CONFIG.whatsapp}
              phone={BUSINESS_CONFIG.phone}
            />
          </div>
        </>
      )}

      {/* Mobile Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={() => setCartOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-3xl p-4 max-h-[85vh] overflow-y-auto">
            <div className="w-10 h-1 rounded-full bg-border mx-auto mb-4" />
            <CartSummaryCard
              cart={cart}
              selectedLiveCounters={selectedLiveCounters}
              guests={guests}
              onRemove={removeFromCart}
              onAdd={addToCart}
              onToggleLiveCounter={toggleLiveCounter}
              whatsappMessage={buildWhatsAppMessage()}
              whatsapp={BUSINESS_CONFIG.whatsapp}
              phone={BUSINESS_CONFIG.phone}
              onClose={() => setCartOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Cart Summary Card Component ──────────────────────────────────────────────
interface CartSummaryCardProps {
  cart: CartItem[];
  selectedLiveCounters: string[];
  guests: number;
  onRemove: (id: string) => void;
  onAdd: (item: MenuItem) => void;
  onToggleLiveCounter: (id: string) => void;
  whatsappMessage: string;
  whatsapp: string;
  phone: string;
  onClose?: () => void;
}

function CartSummaryCard({
  cart,
  selectedLiveCounters,
  guests,
  onRemove,
  onAdd,
  onToggleLiveCounter,
  whatsappMessage,
  whatsapp,
  phone,
  onClose,
}: CartSummaryCardProps) {
  const pricedTotal = cart.reduce((sum, c) => {
    if (!c.item.price) return sum;
    const multiplier =
      c.item.pricingUnit === "kg" ? c.quantity : c.quantity * guests;
    return sum + c.item.price * multiplier;
  }, 0);

  return (
    <div className="bg-white rounded-3xl border border-border shadow-warm-lg overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4 border-b border-border"
        style={{ background: "linear-gradient(135deg, #C8520A, #E8651A)" }}
      >
        <h3 className="font-bold text-white text-base">Your Order Summary</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/80 font-medium">
            👥 {guests} guests
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white tap-target"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-3 max-h-64 overflow-y-auto no-scrollbar">
        {/* Cart items */}
        {cart.length > 0 && (
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Menu Items
            </p>
            {cart.map((c) => (
              <div key={c.item.id} className="flex items-center gap-2 py-1.5">
                <div
                  className={`w-3 h-3 rounded flex-shrink-0 border ${c.item.isVeg ? "border-green-500" : "border-red-500"}`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full m-auto mt-[2px] ${c.item.isVeg ? "bg-green-500" : "bg-red-500"}`}
                  />
                </div>
                <span className="text-xs text-foreground flex-1 font-medium truncate">
                  {c.item.name}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onRemove(c.item.id)}
                    className="w-6 h-6 rounded-lg flex items-center justify-center bg-muted text-foreground text-xs font-bold tap-target"
                  >
                    −
                  </button>
                  <span className="text-xs font-bold w-4 text-center">
                    {c.quantity}
                  </span>
                  <button
                    onClick={() => onAdd(c.item)}
                    className="w-6 h-6 rounded-lg flex items-center justify-center bg-primary text-white text-xs font-bold tap-target"
                  >
                    +
                  </button>
                </div>
                {c.item.price && (
                  <span className="text-xs font-bold text-primary w-16 text-right">
                    ₹
                    {(
                      c.item.price *
                      (c.item.pricingUnit === "kg"
                        ? c.quantity
                        : guests * c.quantity)
                    ).toLocaleString("en-IN")}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Live counters */}
        {selectedLiveCounters.length > 0 && (
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              🔥 Live Counters
            </p>
            {selectedLiveCounters.map((id) => {
              const counter = LIVE_COUNTERS.find((c) => c.id === id);
              if (!counter) return null;
              return (
                <div key={id} className="flex items-center gap-2 py-1.5">
                  <span className="text-base flex-shrink-0">
                    {counter.icon}
                  </span>
                  <span className="text-xs text-foreground flex-1 font-medium truncate">
                    {counter.name}
                  </span>
                  <span className="text-xs text-muted-foreground italic">
                    Quote reqd.
                  </span>
                  <button
                    onClick={() => onToggleLiveCounter(id)}
                    className="w-6 h-6 rounded-lg flex items-center justify-center bg-muted text-muted-foreground text-xs tap-target"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Totals */}
      <div className="px-4 pb-4 pt-2 border-t border-border space-y-2">
        {pricedTotal > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Estimated Total
            </span>
            <span className="text-base font-display font-bold text-primary">
              ₹{pricedTotal.toLocaleString("en-IN")}
            </span>
          </div>
        )}
        {selectedLiveCounters.length > 0 && (
          <p className="text-xs text-muted-foreground italic">
            + Live counter pricing to be discussed
          </p>
        )}

        <a
          href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center text-sm mt-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Send on WhatsApp
        </a>
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all tap-target"
        >
          <svg
            width="16"
            height="16"
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
          Call to Order
        </a>
      </div>
    </div>
  );
}
