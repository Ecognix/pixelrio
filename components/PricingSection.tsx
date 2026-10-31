"use client";

import React, { useRef, useState } from "react";
import { plansData, PricingPlan } from "@/data/plans";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";

function PricingCard({ plan }: { plan: PricingPlan }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  const handleSelectPlan = () => {
    // Dispatch custom event for contact form pre-fill
    window.dispatchEvent(
      new CustomEvent("pixelrio-select-plan", {
        detail: {
          planName: plan.name,
          price: plan.price,
          isCustom: plan.id === "custom",
        },
      })
    );

    // Smooth scroll to contact section
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isGrowth = plan.popular;

  return (
    <div
      className={`relative flex flex-col h-full ${
        isGrowth ? "lg:-translate-y-3 z-10" : "z-0"
      }`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${
            isHovered ? 1.025 : 1
          }, ${isHovered ? 1.025 : 1}, 1)`,
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`rounded-3xl bg-[#FFFFFF] p-6 sm:p-8 relative flex flex-col justify-between h-full transition-all duration-300 overflow-hidden ${
          isGrowth
            ? "border-2 border-[#0600FC] shadow-[0_16px_40px_-8px_rgba(6,0,252,0.18)]"
            : "shadow-sm"
        }`}
      >
        {/* Glow Effects */}
        <div
          className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#0600FC]/10 blur-3xl transition-opacity duration-300 pointer-events-none ${
            isHovered || isGrowth ? "opacity-100" : "opacity-0"
          }`}
        />

        <div>
          {/* Card Top / Header */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] tracking-tight">
              {plan.name}
            </h3>
            {plan.badge && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#0600FC] text-white shadow-[0_2px_10px_rgba(6,0,252,0.3)]">
                <Sparkles className="w-3 h-3" />
                {plan.badge}
              </span>
            )}
          </div>

          {/* Pricing Block */}
          <div className="mb-6 pb-6 border-b border-[#D6D6F0]">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black text-[#1E1E1E] tracking-tight">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-xs sm:text-sm font-medium text-[#6B6B7B]">
                  {plan.period}
                </span>
              )}
            </div>
            {plan.shortDesc && (
              <p className="text-xs sm:text-sm text-[#6B6B7B] mt-2.5 leading-relaxed">
                {plan.shortDesc}
              </p>
            )}
          </div>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#6B6B7B] font-semibold">
              Included Deliverables
            </p>
            <ul className="space-y-2.5">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E1E1E]">
                  <div
                    className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      isGrowth
                        ? "bg-[#0600FC] text-white shadow-sm"
                        : "bg-[#0600FC]/10 text-[#0600FC]"
                    }`}
                  >
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={handleSelectPlan}
            className={`w-full py-3.5 px-5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 group ${
              isGrowth
                ? "bg-[#0600FC] text-white hover:bg-[#0500d4] shadow-[0_4px_18px_rgba(6,0,252,0.35)] hover:shadow-[0_6px_24px_rgba(6,0,252,0.5)] hover:scale-[1.01]"
                : "bg-[#F0F0F6] text-[#1E1E1E] hover:bg-[#0600FC] hover:text-white shadow-sm hover:scale-[1.01]"
            }`}
          >
            <span>{plan.ctaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative bg-[#F0F0F6] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#0600FC]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#D6D6F0] text-xs font-mono uppercase tracking-wider text-[#0600FC] font-semibold mb-4 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#0600FC]" />
              Transparent Pricing
            </div>
            {/* Required Section Heading */}
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1E1E] tracking-tight">
              Choose Your Growth Plan
            </h2>
          </div>
          {/* Required Sub-line */}
          <p className="text-sm sm:text-base text-[#6B6B7B] max-w-md">
            Simple plans for every stage of your business.
          </p>
        </div>

        {/* 4 Pricing Cards Grid (Responsive Row, Stacked on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plansData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
