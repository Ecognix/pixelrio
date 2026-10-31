import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F0F0F6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pixelrio.in"),
  title: {
    default: "Pixelrio Studio | Digital Marketing & Creative Agency | Guwahati, Assam",
    template: "%s | Pixelrio Studio",
  },
  description:
    "Pixelrio Studio is a premier digital marketing and creative agency based in Ulubari, Guwahati, Assam. We combine SEO, performance ads, social media, web development, and cinematic video to turn regional and national brands into exponential growth stories.",
  keywords: [
    "Pixelrio Studio",
    "Digital Marketing Agency Guwahati",
    "SEO Agency Assam",
    "Social Media Marketing Guwahati",
    "Web Design Ulubari Guwahati",
    "Meta Ads & Google Ads Assam",
    "Video Production Guwahati",
    "Creative Agency North East India",
    "Local SEO Guwahati",
    "E-commerce Development Assam",
  ],
  authors: [{ name: "Pixelrio Studio", url: "https://www.pixelrio.in" }],
  creator: "Pixelrio Studio",
  publisher: "Pixelrio Studio",
  alternates: {
    canonical: "https://www.pixelrio.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pixelrio.in",
    siteName: "Pixelrio Studio",
    title: "Pixelrio Studio — We Turn Brands Into Growth Stories",
    description:
      "Guwahati's trusted digital growth partner for SEO, paid ads, website development, branding, and video production.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pixelrio Studio - Creative & Digital Marketing Agency in Guwahati, Assam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelrio Studio | Digital Marketing & Creative Agency in Guwahati",
    description:
      "We turn brands into growth stories. SEO, social media, ads, web and video under one roof in Ulubari, Guwahati.",
    images: ["/og-image.png"],
    creator: "@pixelriostudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-[#F0F0F6] text-[#1E1E1E] font-sans selection:bg-[#0600FC] selection:text-white min-h-screen relative antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
