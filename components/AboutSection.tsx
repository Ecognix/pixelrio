"use client";

import React, { useEffect, useRef, useState } from "react";
import MinimalCoreCanvas from "./Minimal3D/MinimalCoreCanvas";
import { Target, Compass, Sparkles, Award, Users, TrendingUp } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

function AnimatedCounter({ end, suffix = "+", label, sublabel, icon }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <div
      ref={elementRef}
      className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] shadow-sm relative overflow-hidden group transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0600FC]/5 rounded-full blur-2xl group-hover:bg-[#0600FC]/10 transition-all duration-500 pointer-events-none" />
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-[#0600FC]/10 border border-[#0600FC]/20 flex items-center justify-center text-[#0600FC] shadow-[0_2px_8px_rgba(6,0,252,0.1)]">
          {icon}
        </div>
        <span className="text-xs uppercase font-mono tracking-wider text-[#6B6B7B]">
          Metric Verified
        </span>
      </div>
      <div className="text-4xl sm:text-5xl font-black text-[#1E1E1E] tracking-tight mb-2">
        {count}
        <span className="text-[#0600FC] ml-1">{suffix}</span>
      </div>
      <div className="text-lg font-bold text-[#1E1E1E]">{label}</div>
      <div className="text-xs sm:text-sm text-[#6B6B7B] mt-1">{sublabel}</div>
    </div>
  );
}

// 3D Tilt Card Component
function TiltCard({
  title,
  subtitle,
  description,
  icon,
  badge,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
}) {
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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${
          isHovered ? 1.02 : 1
        }, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
      className="rounded-3xl bg-[#FFFFFF] shadow-sm p-8 relative flex flex-col justify-between group h-full transition-colors"
    >
      {/* Glow on hover */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0600FC]/5 to-transparent transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#F0F0F6] flex items-center justify-center text-[#0600FC] shadow-sm">
            {icon}
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0600FC]/10 text-[#0600FC] border border-[#0600FC]/20 font-semibold">
            {badge}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">{title}</h3>
        <p className="text-xs uppercase font-mono tracking-wider text-[#0600FC] font-semibold mb-4">
          {subtitle}
        </p>
        <p className="text-[#6B6B7B] text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mt-8 pt-4 border-t border-[#D6D6F0] flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#0600FC]" />
        <span className="text-xs text-[#6B6B7B] font-medium">Core Agency Pillar</span>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-[#F0F0F6]">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0600FC]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0600FC]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Minimalist 3D Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#D6D6F0] text-xs font-mono uppercase tracking-wider text-[#0600FC] font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0600FC]" />
              About Pixelrio Studio
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1E1E] tracking-tight mb-6">
              Guwahati&apos;s Dedicated Digital Growth Partner.
            </h2>
            <p className="text-base sm:text-lg text-[#6B6B7B] leading-relaxed font-normal">
              Pixelrio Studio is a Guwahati-based creative and digital marketing agency. We combine strategy, design, content and technology to help businesses get found, get noticed and get customers. Our 30-member team treats every client&apos;s growth as its own personal project. Our vision is to become the North East&apos;s most trusted digital growth partner and to help local brands compete on a national stage.
            </p>
          </div>

          {/* Right Minimalist 3D Core Card */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[320px] sm:h-[360px] rounded-3xl bg-[#FFFFFF] shadow-sm transition-all p-5 flex flex-col justify-between overflow-hidden group">
              {/* Card Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#0600FC]/8 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0600FC]/15 transition-all duration-500" />
              
              {/* Card Header */}
              <div className="flex items-center justify-between z-10 pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F0F6] border border-[#D6D6F0] text-[11px] font-mono text-[#0600FC] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#0600FC] animate-ping" />
                  <span>3D Kinetic Core</span>
                </div>
                <span className="text-[11px] font-mono text-[#6B6B7B]">
                  Drag to rotate
                </span>
              </div>

              {/* 3D Canvas */}
              <div className="absolute inset-0">
                <MinimalCoreCanvas />
              </div>

              {/* Card Footer */}
              <div className="z-10 mt-auto flex items-center justify-between text-xs text-[#6B6B7B] pointer-events-none pt-2.5 border-t border-[#D6D6F0]/60 bg-white/60 backdrop-blur-xs rounded-xl px-2">
                <span className="font-semibold text-[#1E1E1E]">Precision Kinetic Geometry</span>
                <span className="font-mono text-[10px] text-[#0600FC] font-bold">WebGL • 60 FPS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <AnimatedCounter
            end={100}
            suffix="+"
            label="Brands Helped"
            sublabel="From local startups to pan-India industry leaders"
            icon={<TrendingUp className="w-6 h-6" />}
          />
          <AnimatedCounter
            end={5}
            suffix="+"
            label="Years of Experience"
            sublabel="Delivering profitable ROAS & SEO authority"
            icon={<Award className="w-6 h-6" />}
          />
          <AnimatedCounter
            end={30}
            suffix="+"
            label="Member Team"
            sublabel="Specialists in Ulubari, Guwahati, Assam"
            icon={<Users className="w-6 h-6" />}
          />
        </div>

        {/* Mission, Vision, Values (3D Tilt Cards) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#0600FC] font-semibold">
                Our DNA
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1E1E1E] mt-1">
                Mission, Vision &amp; Core Values
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6B6B7B] max-w-md">
              Hover to interact with our foundational pillars crafted to elevate businesses in Northeast India and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <TiltCard
              title="Our Mission"
              subtitle="Unstoppable Local Growth"
              description="To provide every enterprise with an unfair digital advantage — engineering measurable campaigns, high-ranking SEO assets, and world-class digital experiences."
              icon={<Target className="w-7 h-7" />}
              badge="PURPOSE"
            />
            <TiltCard
              title="Our Vision"
              subtitle="Regional to Global"
              description="To become the North East's most trusted digital growth partner and help homegrown brands compete with supreme confidence on national and international stages."
              icon={<Compass className="w-7 h-7" />}
              badge="HORIZON"
            />
            <TiltCard
              title="Our Values"
              subtitle="Creativity • Honesty • Results"
              description="We reject vanity metrics. We measure ourselves solely on business outcomes, transparent communication, and relentless creative innovation."
              icon={<Sparkles className="w-7 h-7" />}
              badge="PRINCIPLES"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
