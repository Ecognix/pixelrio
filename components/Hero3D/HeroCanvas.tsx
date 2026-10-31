"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import with ssr: false as required
const DynamicPixelScene = dynamic(() => import("./PixelScene"), {
  ssr: false,
  loading: () => <Hero3DLoadingState />,
});

function Hero3DLoadingState() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-3">
        {/* Animated pulsing pixel cube */}
        <div className="w-12 h-12 rounded-lg bg-[#0600FC]/10 border border-[#0600FC] animate-pulse flex items-center justify-center shadow-[0_4px_16px_rgba(6,0,252,0.25)]">
          <div className="w-4 h-4 bg-[#0600FC] rounded-sm animate-ping" />
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#6B6B7B]">
          Initializing 3D Space...
        </span>
      </div>
    </div>
  );
}

// Lightweight 2D/SVG Fallback for prefers-reduced-motion or mobile/unsupported WebGL
function LightweightFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden pointer-events-none opacity-80">
      <div className="absolute inset-0 bg-radial-hero" />
      <div className="grid grid-cols-4 gap-3 w-48 h-64 p-4 border border-[#D6D6F0] rounded-2xl bg-[#FFFFFF]/80 backdrop-blur-sm shadow-sm">
        {/* Simplified "P" shape in grid */}
        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />
        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />
        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />
        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />

        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />

        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />
        <div className="w-8 h-8 rounded bg-[#0600FC] shadow-[0_2px_12px_rgba(6,0,252,0.45)]" />
        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />
        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />

        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />

        <div className="w-8 h-8 rounded bg-[#D6D6F0]" />
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
      </div>
    </div>
  );
}

export default function HeroCanvas() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check WebGL availability
    let hasWebGL = false;
    try {
      const canvas = document.createElement("canvas");
      hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch {
      hasWebGL = false;
    }

    if (prefersReducedMotion || !hasWebGL) {
      setUseFallback(true);
      return;
    }

    // Scroll progress handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1.5);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) {
    return <Hero3DLoadingState />;
  }

  if (useFallback) {
    return <LightweightFallback />;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <DynamicPixelScene scrollProgress={scrollProgress} />
    </div>
  );
}
