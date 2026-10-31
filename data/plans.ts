export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  badge?: string;
  popular?: boolean;
  shortDesc?: string;
  features: string[];
  ctaText: string;
}

export const plansData: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹9,900",
    period: "/ month",
    popular: false,
    shortDesc: "Essential digital presence and creative assets for growing businesses.",
    features: [
      "Social media management",
      "2 social media platforms managed",
      "2 creatives every month",
      "2 videos every month",
      "2 motion graphic videos every month",
      "Ads campaign management",
    ],
    ctaText: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹26,800",
    period: "/ month",
    badge: "Most Popular",
    popular: true,
    shortDesc: "Comprehensive organic search and social growth to accelerate customer acquisition.",
    features: [
      "Social media management",
      "2 social media platforms managed",
      "2 creatives every month",
      "2 videos every month",
      "2 motion graphic videos every month",
      "Ads campaign management",
      "Search engine optimization (SEO)",
    ],
    ctaText: "Get Started",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹44,890",
    period: "/ month",
    popular: false,
    shortDesc: "Maximum multi-channel dominance with high-volume video and web management.",
    features: [
      "Social media management",
      "Unlimited social media platforms managed",
      "8 creatives every month",
      "12 videos every month",
      "8 motion graphic videos every month",
      "Ads campaign management",
      "Search engine optimization (SEO)",
      "Website management",
    ],
    ctaText: "Get Started",
  },
  {
    id: "custom",
    name: "Custom",
    price: "Let's talk",
    period: "",
    popular: false,
    shortDesc: "Need something different? Tell us your goals and we'll build a plan around your business.",
    features: [
      "Dedicated senior growth strategist",
      "Custom multi-channel marketing campaigns",
      "Tailored video, 3D & motion production",
      "Omnichannel paid media scaling",
      "Priority SLA & 24/7 strategic support",
    ],
    ctaText: "Contact Us",
  },
];
