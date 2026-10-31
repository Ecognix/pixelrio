const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createLogos() {
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  if (!fs.existsSync('app')) {
    fs.mkdirSync('app', { recursive: true });
  }

  // 1. Trimmed logo with clean padding (420 x 130) transparent background
  const trimmed = await sharp('public/logo-trimmed.png').toBuffer();
  await sharp(trimmed)
    .extend({
      top: 16,
      bottom: 16,
      left: 20,
      right: 20,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile('public/logo.png'); // Primary logo for navbar & footer

  // 2. Icon with the iconic 'P' and blue pixel for favicon
  const iconSvg = Buffer.from(`<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="28" fill="#0a0a0f"/>
    <rect x="1" y="1" width="126" height="126" rx="27" fill="none" stroke="#2b2bff" stroke-width="2" stroke-opacity="0.4"/>
    <text x="32" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="76" font-weight="900" fill="#ffffff">P</text>
    <rect x="82" y="32" width="22" height="22" rx="4" fill="#2b2bff"/>
  </svg>`);

  await sharp(iconSvg).resize(64, 64).png().toFile('app/icon.png');
  await sharp(iconSvg).resize(180, 180).png().toFile('app/apple-icon.png');
  await sharp(iconSvg).resize(32, 32).png().toFile('public/favicon.ico');
  
  // 3. OpenGraph preview image (1200x630)
  const ogSvg = Buffer.from(`<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg-glow" cx="70%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#2b2bff" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#0a0a0f" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#93c5fd"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#0a0a0f"/>
    <rect width="1200" height="630" fill="url(#bg-glow)"/>

    <g transform="translate(100, 140)">
      <rect x="0" y="0" width="36" height="36" rx="6" fill="#2b2bff"/>
      <text x="56" y="28" font-family="system-ui, sans-serif" font-size="22" font-weight="800" letter-spacing="4" fill="#2b2bff">PIXELRIO STUDIO</text>
      
      <text x="0" y="160" font-family="system-ui, sans-serif" font-size="64" font-weight="900" fill="url(#text-grad)">We Turn Brands Into</text>
      <text x="0" y="240" font-family="system-ui, sans-serif" font-size="64" font-weight="900" fill="#2b2bff">Growth Stories.</text>
      
      <text x="0" y="320" font-family="system-ui, sans-serif" font-size="24" font-weight="400" fill="#9ca3af">Guwahati's Premier Digital Marketing &amp; Creative Agency</text>
      <text x="0" y="360" font-family="system-ui, sans-serif" font-size="20" font-weight="500" fill="#6b7280">Ulubari, Guwahati, Assam • www.pixelrio.in</text>
    </g>
  </svg>`);

  await sharp(ogSvg).png().toFile('public/og-image.png');
  console.log('All branding assets and logos generated successfully!');
}

createLogos().catch(console.error);
