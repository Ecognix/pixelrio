"use client";

import React, { useRef, useState } from "react";
import { servicesData, ServiceItem } from "@/data/services";
import {
  Share2,
  TrendingUp,
  Code2,
  Palette,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

// Icon dictionary map for 100% static bundler safety
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Share2,
  TrendingUp,
  Code2,
  Palette,
  Sparkles,
};

function ServiceCard({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = ICON_MAP[service.iconName] || Sparkles;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleSelectService = () => {
    window.dispatchEvent(
      new CustomEvent("pixelrio-select-service", {
        detail: { serviceTitle: service.title },
      })
    );
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${
          isHovered ? 1.025 : 1
        }, ${isHovered ? 1.025 : 1}, 1)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="rounded-3xl bg-[#FFFFFF] shadow-sm p-6 sm:p-7 relative flex flex-col justify-between group h-full transition-colors overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#0600FC]/8 blur-3xl transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div>
        {/* Top bar with icon and tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#0600FC]/10 border border-[#0600FC]/20 flex items-center justify-center text-[#0600FC] group-hover:bg-[#0600FC] group-hover:text-white transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#F0F0F6] text-[#6B6B7B] group-hover:text-[#0600FC] transition-colors font-semibold">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#1E1E1E] mb-2 group-hover:text-[#0600FC] transition-colors duration-200">
          {service.title}
        </h3>

        {/* 2-line description */}
        <p className="text-[#6B6B7B] text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2">
          {service.shortDesc}
        </p>

        {/* Deliverables snippet */}
        <div className="space-y-1.5 mb-6">
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#1E1E1E]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0600FC] shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer with Metric & CTA */}
      <div className="pt-4 flex items-center justify-between">
        {service.stats ? (
          <span className="text-xs font-mono font-semibold text-[#0600FC]">
            {service.stats}
          </span>
        ) : (
          <span className="text-xs text-[#6B6B7B]">Custom Strategy</span>
        )}

        <button
          onClick={handleSelectService}
          aria-label={`Inquire about ${service.title}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E1E1E] group-hover:text-[#0600FC] group-hover:translate-x-0.5 transition-all"
        >
          <span>Inquire</span>
          <ArrowUpRight className="w-4 h-4 text-[#0600FC]" />
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#F0F0F6] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#0600FC]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-xs font-mono uppercase tracking-wider text-[#0600FC] font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0600FC]" />
              What We Do
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1E1E] tracking-tight">
              Four Ways to Grow. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] via-[#0600FC] to-[#0600FC]">
                One Growth Partner.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B6B7B] max-w-md">
            Digital marketing, social media management, branding, and web or app development—all under one roof.
          </p>
        </div>

        {/* Four core services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
