"use client";

import React, { useState, useEffect, useRef } from "react";
import { testimonialsData, TestimonialItem } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2, Play, Pause } from "lucide-react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const total = testimonialsData.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, isAutoPlaying]);

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative bg-[#F0F0F6] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0600FC]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-xs font-mono uppercase tracking-wider text-[#0600FC] font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0600FC]" />
              Client Testimonials &amp; Impact
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1E1E] tracking-tight">
              Real Impact. Verified Growth. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] via-[#0600FC] to-[#0600FC]">
                What Our Clients Say.
              </span>
            </h2>
          </div>

          {/* Autoplay & Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause Autoplay" : "Resume Autoplay"}
              className="p-2.5 rounded-full bg-[#FFFFFF] text-[#6B6B7B] hover:text-[#1E1E1E] transition-colors shadow-sm"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full bg-[#FFFFFF] hover:bg-[#F0F0F6] text-[#1E1E1E] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full bg-[#0600FC] hover:bg-[#0500d4] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(6,0,252,0.3)]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Coverflow Container */}
        <div
          className="relative min-h-[460px] flex items-center justify-center [perspective:1400px] overflow-hidden sm:overflow-visible py-8"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {testimonialsData.map((item, index) => {
            // Calculate circular offset relative to activeIndex
            let diff = index - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isVisible = Math.abs(diff) <= 1;

            if (!isVisible) return null;

            // Compute 3D translation & rotation
            const translateX = diff * 340;
            const translateZ = isCenter ? 60 : -140;
            const rotateY = diff * -25;
            const scale = isCenter ? 1 : 0.88;
            const opacity = isCenter ? 1 : 0.55;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
                  opacity,
                }}
                className={`absolute w-full max-w-[420px] sm:max-w-[480px] rounded-3xl bg-[#FFFFFF] p-8 sm:p-10 cursor-pointer select-none transition-all ${
                  isCenter
                    ? "shadow-[0_16px_40px_-8px_rgba(6,0,252,0.18)] z-20"
                    : "shadow-sm z-10 hover:opacity-85"
                }`}
              >
                {/* Quote Icon & 5 Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0600FC]/10 border border-[#0600FC]/20 flex items-center justify-center text-[#0600FC]">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500/10 px-3 py-1 rounded-full">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="text-xs font-bold text-amber-600 ml-1">5.0</span>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="mb-4">
                  <span className="text-xs font-mono font-bold text-[#0600FC] bg-[#0600FC]/10 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-[#1E1E1E] text-sm sm:text-base leading-relaxed mb-8 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Brand Meta */}
                <div className="pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#0600FC]/10 border border-[#0600FC]/20 flex items-center justify-center font-bold text-xs sm:text-sm text-[#0600FC] shrink-0">
                      {item.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#1E1E1E] flex items-center gap-1.5">
                        {item.brandName}
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0600FC] shrink-0" />
                      </h4>
                      <p className="text-xs text-[#6B6B7B]">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-[#0600FC] shadow-[0_2px_8px_rgba(6,0,252,0.4)]"
                  : "w-2 bg-[#D6D6F0] hover:bg-[#6B6B7B]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
