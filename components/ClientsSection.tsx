"use client";

import React, { useState } from "react";
import Image from "next/image";
import { clientsData, ClientItem } from "@/data/clients";
import { Sparkles, LayoutGrid, Layers } from "lucide-react";

function ClientCard({ client }: { client: ClientItem }) {
  return (
    <div className="w-[280px] sm:w-[320px] shrink-0 p-5 rounded-2xl bg-[#FFFFFF] shadow-sm hover:shadow-[0_4px_20px_rgba(6,0,252,0.12)] transition-all duration-300 group flex flex-col justify-between">
      <div className="flex items-center gap-4 mb-3">
        <div className="relative w-24 h-14 rounded-xl bg-[#F0F0F6] overflow-hidden shrink-0 transition-colors flex items-center justify-center">
          <Image
            src={client.image}
            alt={client.name}
            fill
            className="object-contain p-1.5"
            sizes="96px"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-[#1E1E1E] truncate group-hover:text-[#0600FC] transition-colors">
            {client.name}
          </h4>
          <span className="text-xs text-[#6B6B7B] block truncate">
            {client.category}
          </span>
        </div>
      </div>

      <div className="pt-3 flex items-center justify-between">
        <span className="text-[11px] font-mono font-semibold text-[#0600FC] bg-[#0600FC]/10 px-2.5 py-0.5 rounded-full">
          {client.growthMetric}
        </span>
        <span className="text-[10px] text-[#6B6B7B] font-mono">
          ID #{client.id.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");

  // Split into two balanced lanes of 7 clients each
  const row1 = clientsData.slice(0, 7);
  const row2 = clientsData.slice(7, 14);

  return (
    <section id="clients" className="py-24 sm:py-32 relative bg-[#F0F0F6] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0600FC]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-xs font-mono uppercase tracking-wider text-[#0600FC] font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0600FC]" />
              Portfolio &amp; Client Roster
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1E1E] tracking-tight">
              Trusted by Leading <br className="hidden sm:inline" />
              Brands Across Industries.
            </h2>
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center gap-2 bg-[#FFFFFF] p-1.5 rounded-2xl shadow-sm self-start md:self-auto">
            <button
              onClick={() => setViewMode("marquee")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === "marquee"
                  ? "bg-[#0600FC] text-white shadow-[0_2px_10px_rgba(6,0,252,0.3)]"
                  : "text-[#6B6B7B] hover:text-[#1E1E1E]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Marquee</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === "grid"
                  ? "bg-[#0600FC] text-white shadow-[0_2px_10px_rgba(6,0,252,0.3)]"
                  : "text-[#6B6B7B] hover:text-[#1E1E1E]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All 14 Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee View */}
      {viewMode === "marquee" ? (
        <div className="relative w-full overflow-hidden [perspective:1200px]">
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#F0F0F6] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#F0F0F6] to-transparent z-20 pointer-events-none" />

          {/* 3D Tilted Marquee Stage */}
          <div className="flex flex-col gap-6 [transform:rotateX(6deg)]">
            {/* Lane 1: Scrolling Left */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee flex gap-6">
                {[...row1, ...row1].map((client, index) => (
                  <ClientCard key={`row1-${client.id}-${index}`} client={client} />
                ))}
              </div>
            </div>

            {/* Lane 2: Scrolling Right */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee-reverse flex gap-6">
                {[...row2, ...row2].map((client, index) => (
                  <ClientCard key={`row2-${client.id}-${index}`} client={client} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs font-mono text-[#6B6B7B]">
              Hover over any brand card to pause motion • Configured via /data/clients.ts
            </span>
          </div>
        </div>
      ) : (
        /* Grid View: All 14 clients displayed */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {clientsData.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
