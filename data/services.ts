export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  tag: string;
  stats?: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDesc:
      "Grow your business with performance-focused campaigns that improve visibility, attract customers, and turn spend into measurable results.",
    iconName: "TrendingUp",
    tag: "Growth",
    stats: "4.8x Average ROAS",
    deliverables: [
      "Search Engine & Local SEO",
      "Google and Meta Ads",
      "Campaign Strategy & Optimization",
      "Analytics & Performance Reporting",
    ],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortDesc:
      "Build an active, recognizable social presence with thoughtful content, community management, and platform-specific campaigns.",
    iconName: "Share2",
    tag: "Engagement",
    stats: "3.5M+ Views Generated",
    deliverables: [
      "Content & Campaign Strategy",
      "Social Media Platform Management",
      "Community Management",
      "Reels & Shorts Strategy",
    ],
  },
  {
    id: "branding",
    title: "Branding",
    shortDesc:
      "Create a distinctive brand identity with memorable visuals, clear positioning, and consistent guidelines for every touchpoint.",
    iconName: "Palette",
    tag: "Identity",
    stats: "100+ Identities Built",
    deliverables: [
      "Logo Design & Visual Assets",
      "Brand Identity Systems",
      "Brand Guidelines & Positioning",
      "Stationery & Packaging",
    ],
  },
  {
    id: "web-app-development",
    title: "Web / App Development",
    shortDesc:
      "Launch fast, reliable websites and mobile apps designed around your customers, business goals, and future growth.",
    iconName: "Code2",
    tag: "Engineering",
    stats: "0.8s Avg Page Load",
    deliverables: [
      "Website Design & Development",
      "E-commerce & Shopify Stores",
      "iOS & Android Mobile Apps",
      "API & Cloud Integration",
    ],
  },
];
