const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgPath = 'C:/Users/pc/.gemini/antigravity/brain/35e213df-3143-4ede-ad2c-dc26ded7b425/.user_uploaded/media_1793472251349_6d7c1b8f.jpg';
const outputDir = 'public/clients';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 14 clients defined with bounding boxes in the 1024x674 image
const clientsConfig = [
  // Row 0
  {
    id: 1,
    slug: 'shifting-gears',
    name: 'Shifting Gears',
    category: 'Automotive & Performance',
    metric: '+320% Inquiries',
    box: { left: 10, top: 8, width: 242, height: 138 }
  },
  {
    id: 2,
    slug: 'shifting-gears-service',
    name: 'Shifting Gears Service',
    category: 'Auto Care & Workshop',
    metric: '1,800+ Bookings',
    box: { left: 270, top: 8, width: 230, height: 138 }
  },
  {
    id: 3,
    slug: 'baraatis-by-shifting-gears',
    name: 'Baraatis by Shifting-Gears',
    category: 'Luxury & Wedding Rentals',
    metric: '95% Peak Season Booking',
    box: { left: 516, top: 8, width: 228, height: 138 }
  },
  {
    id: 4,
    slug: 'crave-corner',
    name: 'Crave Corner',
    category: 'Café & Quick Service Food',
    metric: '4.5x Walk-In Growth',
    box: { left: 760, top: 8, width: 250, height: 138 }
  },

  // Row 1
  {
    id: 5,
    slug: 'maanvi-properties',
    name: 'Maanvi Properties',
    category: 'Real Estate & Rentals',
    metric: '₹14Cr+ Inventory Sold',
    box: { left: 10, top: 162, width: 242, height: 164 }
  },
  {
    id: 6,
    slug: 'malik-fabrics',
    name: 'Malik Fabrics',
    category: 'Premium Textiles & Fashion',
    metric: '+280% Online Reach',
    box: { left: 270, top: 162, width: 230, height: 164 }
  },
  {
    id: 7,
    slug: 'hill-mynah-bamboo-resort',
    name: 'Hill Mynah Bamboo Resort',
    category: 'Eco Tourism & Hospitality',
    metric: '88% Weekend Occupancy',
    box: { left: 516, top: 162, width: 228, height: 164 }
  },
  {
    id: 8,
    slug: 'hill-mynah-cafe',
    name: 'Hill Mynah Cafe',
    category: 'Specialty Coffee & Dining',
    metric: '2.4M Social Views',
    box: { left: 760, top: 162, width: 250, height: 164 }
  },

  // Row 2
  {
    id: 9,
    slug: 'pr-design',
    name: 'PR Design',
    category: 'Interior Architecture & Decor',
    metric: '60+ Home Renovations',
    box: { left: 10, top: 342, width: 242, height: 164 }
  },
  {
    id: 10,
    slug: 'arihant-agency',
    name: 'Arihant Agency',
    category: 'Design & Home Decor',
    metric: '#1 Local Search Ranking',
    box: { left: 270, top: 342, width: 230, height: 164 }
  },
  {
    id: 11,
    slug: 'brotomotiv-guwahati',
    name: 'Brotomotiv Guwahati',
    category: 'Automotive Detailing & PPF',
    metric: '5.2x Monthly Leads',
    box: { left: 516, top: 342, width: 228, height: 164 }
  },
  {
    id: 12,
    slug: 'the-wall-studio',
    name: 'The Wall Studio (TWS)',
    category: 'Wall Decor & Architecture',
    metric: '+410% Store Visits',
    box: { left: 760, top: 342, width: 250, height: 164 }
  },

  // Row 3
  {
    id: 13,
    slug: 'aspire-homes',
    name: 'Aspire Homes',
    category: 'Residential Development',
    metric: 'Phase 1 & 2 Sold Out',
    box: { left: 10, top: 522, width: 242, height: 145 }
  },
  {
    id: 14,
    slug: 'guwahati-realtors-association',
    name: 'Guwahati Realtors Association (GRA)',
    category: 'Industry Real Estate Body',
    metric: 'Official Digital Partner',
    box: { left: 270, top: 522, width: 230, height: 145 }
  }
];

async function extractLogos() {
  for (const c of clientsConfig) {
    const rawBuffer = await sharp(imgPath)
      .extract(c.box)
      .toBuffer();

    // Trim surrounding white space
    const trimmed = await sharp(rawBuffer)
      .trim()
      .toBuffer();

    // Create a standardized clean 320x160 canvas with transparent/clean white background
    await sharp(trimmed)
      .resize({
        width: 240,
        height: 110,
        fit: 'inside',
        withoutEnlargement: false
      })
      .extend({
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, `${c.slug}.png`));

    console.log(`Extracted: ${c.name} -> ${c.slug}.png`);
  }

  console.log('All 14 client logos successfully extracted and processed!');
}

extractLogos().catch(console.error);
