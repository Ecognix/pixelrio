const sharp = require('sharp');
const fs = require('fs');

async function makeLightLogo() {
  const { data, info } = await sharp('public/logo-original.png').raw().toBuffer({ resolveWithObject: true });
  
  const lightBuf = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
    if (b > 140 && r < 80 && g < 80) {
      // Electric blue pixel: #0600FC
      lightBuf[i] = 6;
      lightBuf[i+1] = 0;
      lightBuf[i+2] = 252;
      lightBuf[i+3] = 255;
    } else {
      const lum = (r + g + b) / 3;
      if (lum > 245) {
        // White background -> transparent
        lightBuf[i] = 240;
        lightBuf[i+1] = 240;
        lightBuf[i+2] = 246;
        lightBuf[i+3] = 0;
      } else {
        // Main text: #1E1E1E with anti-aliasing preserved
        const textAlpha = Math.round(255 - lum);
        lightBuf[i] = 30;
        lightBuf[i+1] = 30;
        lightBuf[i+2] = 30;
        lightBuf[i+3] = textAlpha;
      }
    }
  }

  const trimmed = await sharp(lightBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .trim()
    .toBuffer();

  await sharp(trimmed)
    .extend({
      top: 16,
      bottom: 16,
      left: 20,
      right: 20,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile('public/logo.png');

  // Also update favicon and apple-icon with light theme:
  const iconSvg = Buffer.from(`<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="28" fill="#FFFFFF"/>
    <rect x="1" y="1" width="126" height="126" rx="27" fill="none" stroke="#D6D6F0" stroke-width="2"/>
    <text x="32" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="76" font-weight="900" fill="#1E1E1E">P</text>
    <rect x="82" y="32" width="22" height="22" rx="4" fill="#0600FC"/>
  </svg>`);

  await sharp(iconSvg).resize(64, 64).png().toFile('app/icon.png');
  await sharp(iconSvg).resize(180, 180).png().toFile('app/apple-icon.png');
  await sharp(iconSvg).resize(32, 32).png().toFile('public/favicon.ico');

  console.log('Light theme logo and icons generated!');
}

makeLightLogo().catch(console.error);
