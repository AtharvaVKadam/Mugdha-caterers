import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import SpecialThaliSection from "@/app/components/SpecialThaliSection";
import ServicesSection from "@/app/components/ServicesSection";
import GallerySection from "@/app/components/GallerySection";
import HowItWorksSection from "@/app/components/HowItWorksSection";
import ReviewsSection from "@/app/components/ReviewsSection";
import ContactSection from "@/app/components/ContactSection";
import StickyMobileBar from "@/app/components/StickyMobileBar";
import AboutSection from "@/app/components/AboutSection";
import LiveCountersSection from "@/app/components/LiveCountersSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <SpecialThaliSection />
      <LiveCountersSection />
      <ServicesSection />
      <GallerySection />
      <HowItWorksSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
