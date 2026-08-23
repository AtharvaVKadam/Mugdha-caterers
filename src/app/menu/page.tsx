import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuPageClient from "@/app/menu/components/MenuPageClient";
import StickyMobileBar from "@/app/components/StickyMobileBar";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <MenuPageClient />
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
