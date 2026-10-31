import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ClientsSection from "@/components/ClientsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0F0F6] text-[#1E1E1E] relative selection:bg-[#0600FC] selection:text-white">
      {/* Sticky Blurred Glass Navigation */}
      <Navbar />

      {/* Section 1: Hero with 3D Animation */}
      <HeroSection />

      {/* Section 2: About / Company Showcase */}
      <AboutSection />

      {/* Section 3: Services (Full-Stack Capabilities) */}
      <ServicesSection />

      {/* Section: Pricing / Plans */}
      <PricingSection />

      {/* Section 4: Clients */}
      <ClientsSection />

      {/* Section 5: Team (10 Members Carousel & "30 people, one mission") */}
      <TeamSection />

      {/* Section 6: Client Feedback (7 Testimonials 3D Coverflow) */}
      <TestimonialsSection />

      {/* Section 7: Contact & Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
