"use client";

import React, { useState, useEffect } from "react";
import { servicesData } from "@/data/services";
import confetti from "canvas-confetti";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  CheckCircle,
  Sparkles,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Search Engine Optimization (SEO) & Local SEO",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleSelectPlan = (e: Event) => {
      const customEvent = e as CustomEvent<{
        planName: string;
        price: string;
        isCustom: boolean;
      }>;
      const { planName, price, isCustom } = customEvent.detail;

      if (isCustom) {
        setFormData((prev) => ({
          ...prev,
          service: "Custom Plan",
          message:
            "Hi Pixelrio team, we are looking for a Custom plan. Here are our goals, current challenges, and requirements: ",
        }));
      } else {
        const fullPlan = `${planName} Plan (${price}/mo)`;
        setFormData((prev) => ({
          ...prev,
          service: fullPlan,
          message: `Hi Pixelrio team, I would like to get started with the ${planName} Plan (${price}/month). Please share the onboarding roadmap.`,
        }));
      }
    };

    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceTitle: string }>;
      if (customEvent.detail?.serviceTitle) {
        setFormData((prev) => ({
          ...prev,
          service: customEvent.detail.serviceTitle,
        }));
      }
    };

    window.addEventListener("pixelrio-select-plan", handleSelectPlan);
    window.addEventListener("pixelrio-select-service", handleSelectService);
    return () => {
      window.removeEventListener("pixelrio-select-plan", handleSelectPlan);
      window.removeEventListener("pixelrio-select-service", handleSelectService);
    };
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      errs.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) {
      errs.message = "Please describe your project or requirements";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0600FC", "#2b2bff", "#D6D6F0", "#1E1E1E"],
        });
      } catch {
        // Fallback silently if canvas not supported
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Search Engine Optimization (SEO) & Local SEO",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#F0F0F6] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0600FC]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#0600FC]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#D6D6F0] text-xs font-mono uppercase tracking-wider text-[#0600FC] font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0600FC]" />
            Let&apos;s Build Together
          </div>
          {/* Exact required CTA headline */}
          <h2 className="text-3xl sm:text-6xl font-black text-[#1E1E1E] tracking-tight mb-4">
            Let&apos;s grow your brand.
          </h2>
          <p className="text-base sm:text-xl text-[#6B6B7B]">
            Tell us about your objectives. We will review your digital footprint and respond with an actionable growth strategy within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#FFFFFF] p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#0600FC]/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-6">
                Guwahati Office &amp; Connect
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0600FC]/10 border border-[#0600FC]/20 flex items-center justify-center text-[#0600FC] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#6B6B7B] block mb-0.5">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href="tel:+917085885578"
                      className="text-base font-bold text-[#1E1E1E] hover:text-[#0600FC] transition-colors"
                    >
                      +91 7085885578
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0600FC]/10 border border-[#0600FC]/20 flex items-center justify-center text-[#0600FC] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#6B6B7B] block mb-0.5">
                      Official Website
                    </span>
                    <a
                      href="https://www.pixelrio.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#1E1E1E] hover:text-[#0600FC] transition-colors flex items-center gap-1.5"
                    >
                      <span>www.pixelrio.in</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#0600FC]" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0600FC]/10 border border-[#0600FC]/20 flex items-center justify-center text-[#0600FC] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#6B6B7B] block mb-0.5">
                      Direct Email
                    </span>
                    <a
                      href="mailto:growth@pixelrio.in"
                      className="text-base font-bold text-[#1E1E1E] hover:text-[#0600FC] transition-colors"
                    >
                      growth@pixelrio.in
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0600FC]/10 border border-[#0600FC]/20 flex items-center justify-center text-[#0600FC] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#6B6B7B] block mb-0.5">
                      Agency Studio
                    </span>
                    <p className="text-sm font-semibold text-[#1E1E1E] leading-relaxed">
                      Ulubari, Guwahati, Assam 781007, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="mt-8 pt-6 border-t border-[#D6D6F0]">
                <a
                  href="https://wa.me/917085885578?text=Hi%20Pixelrio%20Studio,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 font-bold text-sm flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat Immediately on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl bg-[#FFFFFF] overflow-hidden shadow-sm h-64 sm:h-72 relative">
              <iframe
                title="Pixelrio Studio Location - Ulubari, Guwahati, Assam"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14324.78912423985!2d91.75114777085025!3d26.17387413645025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a597a7605e59b%3A0xe9f798aa12ff5e54!2sUlubari%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 left-3 bg-[#FFFFFF]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#D6D6F0] text-[11px] font-mono text-[#1E1E1E] flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0600FC] animate-ping" />
                Ulubari, Guwahati, Assam
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#FFFFFF] p-8 sm:p-10 shadow-sm relative">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#0600FC]/10 border border-[#0600FC] flex items-center justify-center text-[#0600FC] mb-6 shadow-[0_4px_20px_rgba(6,0,252,0.25)] animate-in zoom-in-75 duration-300">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1E1E1E] mb-3">
                    Project Request Received!
                  </h3>
                  <p className="text-[#6B6B7B] max-w-md mb-8 leading-relaxed text-sm sm:text-base">
                    Thank you, <span className="text-[#0600FC] font-bold">{formData.name}</span>. Our strategy team in Ulubari, Guwahati is reviewing your requirements for <span className="text-[#1E1E1E] font-medium">{formData.service}</span>. We will connect within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full text-sm font-bold text-[#1E1E1E] bg-[#F0F0F6] hover:bg-[#D6D6F0] transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#D6D6F0]">
                    <div>
                      <h3 className="text-xl font-bold text-[#1E1E1E]">Start Your Project</h3>
                      <p className="text-xs text-[#6B6B7B] mt-0.5">
                        Fill out the details below to receive a customized growth roadmap.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#0600FC] bg-[#0600FC]/10 px-3 py-1 rounded-full border border-[#0600FC]/20 font-semibold">
                      24h Response
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#1E1E1E] mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-[#F0F0F6] border text-[#1E1E1E] text-sm placeholder:text-[#6B6B7B] focus:outline-none focus:bg-[#FFFFFF] transition-all ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#D6D6F0] focus:border-[#0600FC] focus:shadow-[0_0_15px_rgba(6,0,252,0.15)]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#1E1E1E] mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-[#F0F0F6] border text-[#1E1E1E] text-sm placeholder:text-[#6B6B7B] focus:outline-none focus:bg-[#FFFFFF] transition-all ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#D6D6F0] focus:border-[#0600FC] focus:shadow-[0_0_15px_rgba(6,0,252,0.15)]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#1E1E1E] mb-2 font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-[#F0F0F6] border text-[#1E1E1E] text-sm placeholder:text-[#6B6B7B] focus:outline-none focus:bg-[#FFFFFF] transition-all ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#D6D6F0] focus:border-[#0600FC] focus:shadow-[0_0_15px_rgba(6,0,252,0.15)]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#1E1E1E] mb-2 font-medium">
                        Primary Service Needed *
                      </label>
                      <select
                        id="service-select"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#F0F0F6] border border-[#D6D6F0] text-[#1E1E1E] text-sm focus:outline-none focus:bg-[#FFFFFF] focus:border-[#0600FC] transition-all cursor-pointer"
                      >
                        <optgroup label="Growth Plans">
                          <option value="Starter Plan (₹9,900/mo)">Starter Plan (₹9,900/mo)</option>
                          <option value="Growth Plan (₹26,800/mo)">Growth Plan (₹26,800/mo)</option>
                          <option value="Premium Plan (₹44,890/mo)">Premium Plan (₹44,890/mo)</option>
                          <option value="Custom Plan">Custom Plan</option>
                        </optgroup>
                        <optgroup label="Individual Services">
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1E1E1E] mb-2 font-medium">
                      Project Goals &amp; Timeline *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your brand, current challenges, target audience, and ideal timeline..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-[#F0F0F6] border text-[#1E1E1E] text-sm placeholder:text-[#6B6B7B] focus:outline-none focus:bg-[#FFFFFF] transition-all resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#D6D6F0] focus:border-[#0600FC] focus:shadow-[0_0_15px_rgba(6,0,252,0.15)]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full font-bold text-sm sm:text-base text-white bg-[#0600FC] hover:bg-[#0500d4] transition-all duration-300 shadow-[0_4px_20px_rgba(6,0,252,0.35)] hover:shadow-[0_6px_28px_rgba(6,0,252,0.5)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting Your Request...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#6B6B7B]">
                    🔒 Strict client confidentiality. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
