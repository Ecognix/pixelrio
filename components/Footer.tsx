"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
} from "lucide-react";

// Crisp inline brand social icons
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#D6D6F0] relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#0600FC]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Bio (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="#hero" onClick={(e) => handleScrollTo(e, "#hero")} className="inline-block">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.png"
                  alt="Pixelrio Studio"
                  fill
                  className="object-contain object-left"
                  sizes="180px"
                />
              </div>
            </Link>
            <p className="text-[#6B6B7B] text-sm leading-relaxed max-w-sm">
              Pixelrio Studio is Guwahati&apos;s leading creative and digital marketing agency. We engineer data-driven growth strategies, high-performing websites, and magnetic campaigns for ambitious brands.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B7B]">
              <span className="w-2 h-2 rounded-full bg-[#0600FC] animate-ping" />
              <span>Headquartered in Ulubari, Guwahati, Assam</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pixelrio on Instagram"
                className="w-9 h-9 rounded-xl bg-[#F0F0F6] hover:bg-[#0600FC]/10 text-[#1E1E1E] hover:text-[#0600FC] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pixelrio on LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#F0F0F6] hover:bg-[#0600FC]/10 text-[#1E1E1E] hover:text-[#0600FC] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pixelrio on Facebook"
                className="w-9 h-9 rounded-xl bg-[#F0F0F6] hover:bg-[#0600FC]/10 text-[#1E1E1E] hover:text-[#0600FC] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pixelrio on X (Twitter)"
                className="w-9 h-9 rounded-xl bg-[#F0F0F6] hover:bg-[#0600FC]/10 text-[#1E1E1E] hover:text-[#0600FC] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pixelrio on YouTube"
                className="w-9 h-9 rounded-xl bg-[#F0F0F6] hover:bg-[#0600FC]/10 text-[#1E1E1E] hover:text-[#0600FC] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917085885578"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#1E1E1E] font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6B6B7B]">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleScrollTo(e, "#hero")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, "#about")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  About Studio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  All 16 Services
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  onClick={(e) => handleScrollTo(e, "#clients")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Clients &amp; Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => handleScrollTo(e, "#team")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Team Members
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleScrollTo(e, "#testimonials")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Client Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Start Project / Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#1E1E1E] font-bold mb-4">
              Featured Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6B6B7B]">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Search Engine Optimization
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Meta &amp; Google Ads (PPC)
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Next.js Website Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Social Media Strategy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Video Production &amp; Reels
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-[#0600FC] transition-colors"
                >
                  Google Business Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Ulubari Agency Info */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#1E1E1E] font-bold mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#6B6B7B]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0600FC] shrink-0 mt-0.5" />
                <span>Ulubari, Guwahati, Assam 781007, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0600FC] shrink-0" />
                <a href="tel:+917085885578" className="hover:text-[#0600FC] transition-colors">
                  +91 7085885578
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#0600FC] shrink-0" />
                <a href="https://www.pixelrio.in" className="hover:text-[#0600FC] transition-colors">
                  www.pixelrio.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0600FC] shrink-0" />
                <a href="mailto:growth@pixelrio.in" className="hover:text-[#0600FC] transition-colors">
                  growth@pixelrio.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#D6D6F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B7B]">
          <p>© 2026 Pixelrio Studio. All rights reserved. Ulubari, Guwahati, Assam.</p>

          <div className="flex items-center gap-6">
            <span className="text-[#6B6B7B]">Crafted with precision for North East India</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0F0F6] hover:bg-[#D6D6F0] text-[#1E1E1E] transition-colors shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
