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
    id: "seo-local-seo",
    title: "Search Engine Optimization (SEO) & Local SEO",
    shortDesc: "Dominate Google search results and Google Maps pack in Guwahati and across India with high-intent keyword ranking.",
    iconName: "Search",
    tag: "High ROI",
    stats: "+240% Organic Traffic",
    deliverables: ["Local 3-Pack Optimization", "Technical SEO Audits", "High-Authority Link Building", "Keyword Intent Strategy"]
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    shortDesc: "Strategic content, viral campaigns, active community management, and paid promotion that convert followers into customers.",
    iconName: "Share2",
    tag: "Engagement",
    stats: "3.5M+ Views Generated",
    deliverables: ["Content & Campaign Strategy", "Community Management", "Paid Social Promotion", "Reels & Shorts Strategy"]
  },
  {
    id: "paid-ads",
    title: "Paid Ads (Meta & Google Ads)",
    shortDesc: "Laser-targeted pay-per-click advertising with hyper-optimized ROAS across Google Search, YouTube, Instagram & Meta.",
    iconName: "TrendingUp",
    tag: "Performance",
    stats: "4.8x Average ROAS",
    deliverables: ["Google Search & Shopping Ads", "Meta Conversion Funnels", "Retargeting & Lookalikes", "A/B Creative Testing"]
  },
  {
    id: "web-app-development",
    title: "Web / App Development",
    shortDesc: "High-performance websites, custom e-commerce storefronts, and mobile apps built for lightning speed and conversion.",
    iconName: "Code2",
    tag: "Engineering",
    stats: "0.8s Avg Page Load",
    deliverables: ["Next.js & React Websites", "E-commerce & Shopify Stores", "iOS & Android Mobile Apps", "API & Cloud Integration"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Intuitive product design, interactive wireframing, and design systems crafted for effortless usability and delight.",
    iconName: "Layout",
    tag: "Design",
    stats: "Pixel-Perfect Prototypes",
    deliverables: ["Figma Design Systems", "User Journey Mapping", "Wireframes & Prototypes", "Usability Testing"]
  },
  {
    id: "branding",
    title: "Branding",
    shortDesc: "Memorable logo design, comprehensive brand identity systems, and typography and visual brand guidelines.",
    iconName: "Sparkles",
    tag: "Identity",
    stats: "100+ Identities Built",
    deliverables: ["Logo Design & Visual Assets", "Brand Identity Systems", "Brand Guidelines & Positioning", "Stationery & Packaging"]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortDesc: "High-impact visual creatives for social media banners, pitch decks, hoardings, print collateral, and marketing campaigns.",
    iconName: "Palette",
    tag: "Creative",
    stats: "5,000+ Assets Created",
    deliverables: ["Social Media Creatives", "Brochures & Billboards", "Pitch Decks & Presentations", "Infographics & Illustrations"]
  },
  {
    id: "video-production-editing",
    title: "Video Production and Video Editing",
    shortDesc: "Cinematic commercial shoots, corporate interviews, high-retention reel edits, and motion graphics that grab attention.",
    iconName: "Film",
    tag: "Visuals",
    stats: "4K Cinema Quality",
    deliverables: ["Scripting & Storyboarding", "On-Location Shoots in Assam", "Short-Form Reel/TikTok Edits", "Dynamic Motion Graphics"]
  },
  {
    id: "content-marketing-copywriting",
    title: "Content Marketing and Copywriting",
    shortDesc: "Persuasive sales copy, thought-leadership articles, and SEO blogs that position your brand as an undisputed industry authority.",
    iconName: "PenTool",
    tag: "Storytelling",
    stats: "Compelling Narratives",
    deliverables: ["Long-Form SEO Articles", "High-Converting Sales Copy", "Brand Story & Whitepapers", "Newsletter Editorial"]
  },
  {
    id: "email-whatsapp-marketing",
    title: "Email and WhatsApp Marketing",
    shortDesc: "Automated direct response campaigns, drip sequences, and broadcast flows delivering 40%+ open rates and direct sales.",
    iconName: "Mail",
    tag: "Direct Reach",
    stats: "42% Avg Open Rate",
    deliverables: ["WhatsApp Business API Automation", "Klaviyo & Mailchimp Flows", "Cart Abandonment Sequences", "Segmented Broadcasts"]
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    shortDesc: "Strategic collaborations with top North-Eastern and pan-India digital creators to amplify trust and brand buzz.",
    iconName: "Megaphone",
    tag: "Influence",
    stats: "50+ Creator Network",
    deliverables: ["Influencer Identification & Vetting", "Campaign Briefing & Logistics", "Performance Tracking", "UGC Creative Production"]
  },
  {
    id: "online-reputation-management",
    title: "Online Reputation Management",
    shortDesc: "Protect and elevate your brand image across Google Reviews, Trustpilot, forums, and press with proactive sentiment control.",
    iconName: "ShieldCheck",
    tag: "Trust",
    stats: "4.9★ Average Rating",
    deliverables: ["Review Generation Systems", "Crisis Sentiment Control", "Negative Review Resolution", "Brand Mention Monitoring"]
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile Management",
    shortDesc: "Full optimization and active management of your Google Maps listing to dominate local phone calls, visits, and directions.",
    iconName: "MapPin",
    tag: "Local Dominance",
    stats: "#1 Guwahati Ranking",
    deliverables: ["Weekly Posts & Updates", "Photo & Video Uploads", "Review Reply Automation", "Geotagged Optimization"]
  },
  {
    id: "analytics-reporting",
    title: "Analytics and Performance Reporting",
    shortDesc: "Real-time Looker Studio dashboards tracking every rupee spent, conversion paths, and customer lifetime value.",
    iconName: "BarChart3",
    tag: "Transparency",
    stats: "Live 24/7 Dashboards",
    deliverables: ["GA4 & Pixel Setup", "Custom Looker Dashboards", "Monthly Executive Summaries", "Attribution Modeling"]
  }
];
