"use client";

import React from "react";
import HeroCanvas from "./Hero3D/HeroCanvas";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* 3D Background Canvas */}
      <HeroCanvas />

      {/* Atmospheric lighting layers */}
      <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F0F6] to-transparent pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Agency Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#D6D6F0] backdrop-blur-xl mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0600FC] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0600FC]"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#0600FC]">
            Digital Growth &amp; Creative Studio
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1E1E1E] max-w-4xl leading-[1.08] mb-6">
          We Turn Brands Into{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] via-[#0600FC] to-[#0600FC]">
            Growth Stories
            <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0600FC] ml-2 sm:ml-3 rounded-[2px] align-baseline shadow-[0_2px_14px_rgba(6,0,252,0.45)] animate-pixel-glow" />
          </span>
        </h1>

        {/* Sub-line */}
        <p className="text-base sm:text-xl md:text-2xl text-[#6B6B7B] font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          SEO, social media, ads, web and video, all under one roof.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white bg-[#0600FC] hover:bg-[#0500d4] transition-all duration-300 shadow-[0_4px_20px_rgba(6,0,252,0.35)] hover:shadow-[0_6px_28px_rgba(6,0,252,0.5)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => handleScrollTo("services")}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-[#1E1E1E] bg-[#FFFFFF] hover:bg-[#F0F0F6] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#0600FC] transition-transform duration-200 group-hover:rotate-12" />
            <span>See Our Work</span>
          </button>
        </div>

        {/* Floating Quick Trust Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full">
          <div className="px-4 py-3 rounded-2xl bg-[#FFFFFF] shadow-sm text-center">
            <div className="text-xl sm:text-2xl font-black text-[#1E1E1E]">100+</div>
            <div className="text-[11px] sm:text-xs text-[#6B6B7B] font-medium">Brands Scaled</div>
          </div>
          <div className="px-4 py-3 rounded-2xl bg-[#FFFFFF] shadow-sm text-center">
            <div className="text-xl sm:text-2xl font-black text-[#0600FC]">4.8x</div>
            <div className="text-[11px] sm:text-xs text-[#6B6B7B] font-medium">Average ROAS</div>
          </div>
          <div className="px-4 py-3 rounded-2xl bg-[#FFFFFF] shadow-sm text-center">
            <div className="text-xl sm:text-2xl font-black text-[#1E1E1E]">30+</div>
            <div className="text-[11px] sm:text-xs text-[#6B6B7B] font-medium">In-House Experts</div>
          </div>
          <div className="px-4 py-3 rounded-2xl bg-[#FFFFFF] shadow-sm text-center">
            <div className="text-xl sm:text-2xl font-black text-[#0600FC]">#1</div>
            <div className="text-[11px] sm:text-xs text-[#6B6B7B] font-medium">Guwahati Digital Agency</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => handleScrollTo("about")}
          aria-label="Scroll down to About section"
          className="mt-12 text-[#6B6B7B] hover:text-[#0600FC] transition-colors duration-200 animate-bounce flex flex-col items-center gap-1 group"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#6B6B7B] group-hover:text-[#0600FC]">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
