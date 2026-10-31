"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicMinimalScene = dynamic(() => import("./MinimalCoreScene"), {
  ssr: false,
  loading: () => <MinimalCoreLoadingState />,
});

function MinimalCoreLoadingState() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#0600FC]/10 border border-[#0600FC]/30 flex items-center justify-center animate-pulse">
          <div className="w-3 h-3 bg-[#0600FC] rounded-sm" />
        </div>
        <span className="text-[10px] font-mono text-[#6B6B7B] tracking-wider uppercase">
          Loading 3D Core...
        </span>
      </div>
    </div>
  );
}

// Fallback for reduced motion or devices without WebGL
function MinimalCoreFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D6D6F0] animate-spin [animation-duration:14s]" />
        <div className="w-16 h-16 rounded-2xl border border-[#0600FC]/30 bg-[#0600FC]/5 flex items-center justify-center rotate-45">
          <div className="w-7 h-7 bg-[#0600FC] rounded-md shadow-[0_2px_12px_rgba(6,0,252,0.4)]" />
        </div>
      </div>
    </div>
  );
}

export default function MinimalCoreCanvas() {
  const [useFallback, setUseFallback] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

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
    }
  }, []);

  if (!isClient) return <MinimalCoreLoadingState />;
  if (useFallback) return <MinimalCoreFallback />;

  return <DynamicMinimalScene />;
}
