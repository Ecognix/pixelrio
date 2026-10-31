"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { teamData, TeamMember } from "@/data/team";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  LayoutGrid,
  RotateCw,
} from "lucide-react";

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-3xl bg-[#FFFFFF] overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(6,0,252,0.12)] transition-all duration-300 flex flex-col justify-between group h-full">
      <div>
        {/* Photo Container */}
        <div className="relative w-full aspect-square bg-[#F0F0F6] overflow-hidden flex items-center justify-center p-4">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="absolute top-6 right-6">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[#0600FC] border border-[#D6D6F0] font-semibold shadow-sm">
              {member.experience}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-bold text-[#1E1E1E] group-hover:text-[#0600FC] transition-colors mb-1.5">
            {member.name}
          </h3>
          <p className="text-xs uppercase font-mono tracking-wider text-[#0600FC] font-semibold mb-3.5">
            {member.role}
          </p>
          <p className="text-xs sm:text-sm text-[#6B6B7B] leading-relaxed mb-5">
            {member.bio}
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-1.5">
            {member.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-[#F0F0F6] text-[#6B6B7B] border border-[#D6D6F0]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-3.5 border-t border-[#D6D6F0] bg-[#FFFFFF] flex items-center justify-between text-xs text-[#6B6B7B]">
        <span className="flex items-center gap-1.5 font-medium">
          <CheckCircle className="w-3.5 h-3.5 text-[#0600FC]" />
          Founding Member • Guwahati
        </span>
        <span className="font-mono text-[10px] text-[#6B6B7B]">
          0{member.id} / 03
        </span>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewStyle, setViewStyle] = useState<"grid" | "carousel">("grid");

  const total = teamData.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewStyle !== "carousel") return;
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewStyle]);

  return (
    <section id="team" className="py-24 sm:py-32 relative bg-[#F0F0F6] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0600FC]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#D6D6F0] text-xs font-mono uppercase tracking-wider text-[#0600FC] font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0600FC]" />
              Founding Leadership
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1E1E] tracking-tight mb-3">
              Meet The Founding Members.
            </h2>
            {/* Required line */}
            <p className="text-lg sm:text-xl font-bold text-[#0600FC] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#0600FC] shadow-[0_2px_10px_rgba(6,0,252,0.4)]" />
              30 people, one mission: your growth.
            </p>
          </div>

          {/* View Toggle & Carousel Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-[#FFFFFF] p-1.5 rounded-2xl shadow-sm">
              <button
                onClick={() => setViewStyle("grid")}
                aria-label="Founders Grid View"
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  viewStyle === "grid"
                    ? "bg-[#0600FC] text-white shadow-[0_2px_10px_rgba(6,0,252,0.3)]"
                    : "text-[#6B6B7B] hover:text-[#1E1E1E]"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Founders Grid</span>
              </button>
              <button
                onClick={() => setViewStyle("carousel")}
                aria-label="3D Carousel View"
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  viewStyle === "carousel"
                    ? "bg-[#0600FC] text-white shadow-[0_2px_10px_rgba(6,0,252,0.3)]"
                    : "text-[#6B6B7B] hover:text-[#1E1E1E]"
                }`}
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>3D Rotate</span>
              </button>
            </div>

            {viewStyle === "carousel" && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous Founder"
                  className="w-10 h-10 rounded-full bg-[#FFFFFF] hover:bg-[#F0F0F6] text-[#1E1E1E] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next Founder"
                  className="w-10 h-10 rounded-full bg-[#0600FC] hover:bg-[#0500d4] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(6,0,252,0.3)]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Featured View: Grid (Default) vs Rotating 3D */}
        {viewStyle === "grid" ? (
          /* Grid View: 3 Founding Members Side-by-Side */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          /* Rotating 3D Carousel View */
          <div className="relative py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[-1, 0, 1].map((offset) => {
                const index = (activeIndex + offset + total) % total;
                const member = teamData[index];
                const isCenter = offset === 0;

                return (
                  <div
                    key={`carousel-slot-${offset}-${member.id}`}
                    onClick={() => {
                      if (offset !== 0) setActiveIndex(index);
                    }}
                    className={`transition-all duration-500 cursor-pointer ${
                      isCenter
                        ? "scale-100 opacity-100 z-10"
                        : "scale-95 opacity-60 hover:opacity-85 hidden md:block"
                    }`}
                  >
                    <TeamCard member={member} />
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {teamData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to founder ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-8 bg-[#0600FC] shadow-[0_2px_8px_rgba(6,0,252,0.4)]"
                      : "w-2 bg-[#D6D6F0] hover:bg-[#6B6B7B]"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
