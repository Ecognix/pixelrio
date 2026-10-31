# Pixelrio Studio — Digital Marketing & Creative Agency

A modern, high-performance single-page website for **Pixelrio Studio**, a premier digital marketing and creative agency based in **Ulubari, Guwahati, Assam, India**.

Built with **Next.js 16 (App Router, TypeScript)**, **Tailwind CSS v4**, **Three.js** via **React Three Fiber & @react-three/drei**, and **Lenis** smooth scrolling.

---

## 🚀 Live Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom Glassmorphism & Electric Blue tokens
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) (with `prefers-reduced-motion` compliance)
- **Animations & Interactions**: CSS 3D Transforms, Custom 3D Tilt calculations, Marquee keyframes, and Canvas Confetti
- **Icons**: [Lucide React](https://lucide.dev/) + Crisp SVG Brand Icons
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/) for optimized WebP/PNG assets

---

## 🎨 Brand Design System

| Element | Specification | Hex / Value |
| :--- | :--- | :--- |
| **Theme** | Dark Theme | `#0a0a0f` (near-black background) |
| **Surface** | Glassmorphic Cards | `rgba(18, 18, 28, 0.7)` with `backdrop-blur-xl` |
| **Accent Color** | Pixelrio Electric Blue | `#2b2bff` (from the blue pixel square in the logo) |
| **Glow Effects** | Secondary Atmospheric Glow | `rgba(43, 43, 255, 0.35)` & `rgba(99, 102, 241, 0.2)` |
| **Typography** | Body: `Inter` \| Headings & Display: `Space Grotesk` | Google Fonts via `next/font` |

---

## 📐 Sections Overview

1. **Sticky Glass Navbar**:
   - Blurred glassmorphism header (`backdrop-blur-xl`)
   - Logo in `/public/logo.png`
   - Smooth navigation links: `Home`, `About`, `Services`, `Clients`, `Team`, `Testimonials`, `Contact`
   - Active section spy and "Get a Quote" electric blue action button.
   - Fully responsive slide-down mobile drawer.

2. **Section 1: Hero with 3D Pixel Scene**:
   - Full-screen dynamic 3D scene (`ssr: false` with animated loading state)
   - Glassmorphic "pixel" cubes that gently drift, respond to mouse hover parallax, and assemble into the letter **"P"**
   - Distinct **Electric Blue Pixel** cube (`#2b2bff`) with glowing emissive core and point light
   - Scroll dispersal effect: as the user scrolls, the cubes spread out and float downward into the next section
   - Headline: *"We Turn Brands Into Growth Stories."*
   - Sub-line: *"Digital marketing, social media management, branding, and web or app development—all under one roof."*
   - Action buttons: *"Start Your Project"* and *"See Our Work"*.
   - Lightweight 2D/SVG fallback for devices with `prefers-reduced-motion` or without WebGL.

3. **Section 2: About / Company Showcase**:
   - Animated count-up counters (triggered on scroll into view):
     - **100+** Brands Helped
     - **5+** Years of Experience
     - **30+** Member Team
   - Verified story copy highlighting Pixelrio Studio's Guwahati roots and North East vision
   - Three 3D tilt-on-hover cards: **Mission**, **Vision**, and **Values** (creativity, honesty, results).

4. **Section 3: Services (4 Core Offerings)**:
   - Interactive grid of 3D tilt cards with icons, 2-line descriptions, deliverables, and metric badges
   - Digital Marketing, Social Media Management, Branding, and Web / App Development are configured in `data/services.ts`.
   - "Inquire" button on each card that smoothly scrolls to the contact form and automatically preselects that service.

5. **Section 4: Clients (20 Brands)**:
   - 3D perspective dual-lane infinite marquee (lane 1 left, lane 2 right) with 3D tilt angle
   - "All 20 Grid" / "3D Marquee" toggle switch
   - Demo names (`Client Name 1` to `Client Name 20`) and demo logo images in `/public/demo/clients/client-X.png`
   - Configured cleanly via `data/clients.ts`.

6. **Section 5: Team (10 Members)**:
   - 3D rotating carousel with next/prev controls, dot indicators, and a full 10-member grid view toggle
   - 10 roles: Founder, SEO Specialist, Social Media Manager, Video Editor, Graphic Designer, Web Developer, Content Writer, Ads Specialist, Operations Manager, Account Manager
   - Required banner: *"30 people, one mission: your growth."*
   - Configured cleanly via `data/team.ts`.

7. **Section 6: Client Feedback (7 Testimonials)**:
   - 3D Coverflow carousel with auto-sliding and pause on hover
   - 7 detailed testimonials with 5-star ratings, quotes, designations, companies, and verified badges
   - Configured cleanly via `data/testimonials.ts`.

8. **Section 7: Contact & Studio Location**:
   - Required CTA: *"Let's grow your brand."*
   - Interactive contact form with real-time validation (name, email, phone, service dropdown, message) and celebratory confetti success state
   - Direct Agency Details:
     - **Phone / WhatsApp**: `+91 7085885578`
     - **Website**: `www.pixelrio.in`
     - **Address**: `Ulubari, Guwahati, Assam 781007, India`
   - Interactive Google Maps embed styled in dark mode for Ulubari, Guwahati
   - Direct WhatsApp instant chat link.

9. **Footer**:
   - Official Pixelrio Studio logo (`/public/logo.png`)
   - Quick navigation links & core service shortcuts
   - Social media icons (Instagram, LinkedIn, Facebook, X/Twitter, YouTube, WhatsApp)
   - "Back to Top" smooth scroll trigger.

---

## 🛠️ Getting Started & Installation

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+ (Node v24 supported)
- **npm**: v9+

### 2. Installation
Open your terminal in the project directory:

\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

### 3. Start Development Server
\`\`\`bash
npm run dev
\`\`\`
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

---

## 📁 How to Update Demo Content

All content has been organized into modular data files so you can easily customize names, copy, and images:

### 1. Services (`data/services.ts`)
To modify or add a service, edit the array in `data/services.ts`:
\`\`\`typescript
The four core offerings are Digital Marketing, Social Media Management, Branding, and Web / App Development.
\`\`\`

### 2. Clients (`data/clients.ts`)
Replace demo names or image paths in `data/clients.ts`:
\`\`\`typescript
{
  id: 1,
  name: "Your Client Name",
  category: "Industry Category",
  image: "/demo/clients/client-1.png", // replace with your logo in /public/demo/clients/
  growthMetric: "+320% Qualified Leads"
}
\`\`\`

### 3. Team Members (`data/team.ts`)
Update team bios, photos, and roles in `data/team.ts`:
\`\`\`typescript
{
  id: 1,
  name: "Arindam Kashyap",
  role: "Founder & Creative Director",
  image: "/demo/team/team-1.png", // replace with photo in /public/demo/team/
  bio: "Ex-digital strategist with 9+ years scaling direct-to-consumer...",
  experience: "9+ Years",
  skills: ["Brand Strategy", "Creative Direction", "Venture Growth"]
}
\`\`\`

### 4. Testimonials (`data/testimonials.ts`)
Update client quotes and ratings in `data/testimonials.ts`:
\`\`\`typescript
{
  id: 1,
  quote: "Pixelrio helped us triple our reach in three months...",
  clientName: "Client Name",
  company: "Client Company",
  designation: "Founder & CEO",
  rating: 5,
  highlight: "3x Organic Reach in 90 Days",
  avatarText: "CN"
}
\`\`\`

### 5. Logos & Branding Assets (`public/`)
- Logo: `public/logo.png`
- Favicon: `public/favicon.ico`, `app/icon.png`
- OpenGraph Card: `public/og-image.png`

---

## 🔍 SEO & Performance Checklist

- [x] **Metadata**: Dynamic metadata base URL, custom OpenGraph tags, Twitter cards, keywords.
- [x] **Sitemap**: Generated dynamically via `app/sitemap.ts` (`/sitemap.xml`).
- [x] **Robots**: Configured via `app/robots.ts` (`/robots.txt`).
- [x] **Next/Image**: All team, client, and logo images optimized with responsive `sizes` and WebP/AVIF output.
- [x] **Lazy 3D Loading**: Hero 3D Canvas loaded dynamically with `ssr: false` and lightweight loading fallback.
- [x] **Reduced Motion**: Graceful 2D fallback for users requesting reduced motion.
