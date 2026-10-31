"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Clients", href: "#clients" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect current section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#F0F0F6]/90 backdrop-blur-xl border-b border-[#D6D6F0] shadow-[0_4px_20px_-2px_rgba(6,0,252,0.06)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative h-9 w-36 sm:h-10 sm:w-40 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Pixelrio Studio Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 140px, 160px"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF]/80 backdrop-blur-md shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-[#0600FC] bg-[#0600FC]/10 border border-[#0600FC]/30 shadow-[0_2px_10px_rgba(6,0,252,0.12)] font-semibold"
                      : "text-[#6B6B7B] hover:text-[#1E1E1E] hover:bg-[#F0F0F6]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0600FC] hover:bg-[#0500d4] transition-all duration-300 shadow-[0_4px_16px_rgba(6,0,252,0.3)] hover:shadow-[0_6px_24px_rgba(6,0,252,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="text-xs px-3.5 py-1.5 rounded-full font-medium text-white bg-[#0600FC] hover:bg-[#0500d4]"
            >
              Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-[#FFFFFF] text-[#1E1E1E] hover:text-[#0600FC]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#FFFFFF]/95 backdrop-blur-2xl border-b border-[#D6D6F0] shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "bg-[#0600FC]/10 text-[#0600FC] border border-[#0600FC]/30 font-semibold"
                    : "text-[#6B6B7B] hover:text-[#1E1E1E] hover:bg-[#F0F0F6]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="mt-3 w-full py-3 rounded-xl text-center text-sm font-semibold text-white bg-[#0600FC] hover:bg-[#0500d4] shadow-[0_4px_16px_rgba(6,0,252,0.35)]"
            >
              Get a Quote Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
