const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const clientDir = path.join('public', 'demo', 'clients');
const teamDir = path.join('public', 'demo', 'team');

fs.mkdirSync(clientDir, { recursive: true });
fs.mkdirSync(teamDir, { recursive: true });

// 20 Client Logos
const clientBrands = [
  { name: 'Apex Horizon', tag: 'AH', color1: '#0600FC', color2: '#1d4ed8' },
  { name: 'Brahmaputra Greens', tag: 'BG', color1: '#059669', color2: '#047857' },
  { name: 'Kaziranga Organics', tag: 'KO', color1: '#059669', color2: '#065f46' },
  { name: 'Northeast Ventures', tag: 'NV', color1: '#0600FC', color2: '#4338ca' },
  { name: 'Assam Silk Co.', tag: 'AS', color1: '#d97706', color2: '#b45309' },
  { name: 'Kamakhya Jewels', tag: 'KJ', color1: '#db2777', color2: '#be185d' },
  { name: 'Zenith Tech Labs', tag: 'ZT', color1: '#7c3aed', color2: '#6d28d9' },
  { name: 'Pragjyotish Foods', tag: 'PF', color1: '#dc2626', color2: '#b91c1c' },
  { name: 'Vortex Media Group', tag: 'VM', color1: '#0891b2', color2: '#0e7490' },
  { name: 'Saraighat Logistics', tag: 'SL', color1: '#0d9488', color2: '#0f766e' },
  { name: 'Highland Hospitality', tag: 'HH', color1: '#ea580c', color2: '#c2410c' },
  { name: 'Dispur Medicare', tag: 'DM', color1: '#0284c7', color2: '#0369a1' },
  { name: 'Nova Cloudworks', tag: 'NC', color1: '#0600FC', color2: '#1e1ea8' },
  { name: 'Rongali Lifestyle', tag: 'RL', color1: '#c026d3', color2: '#a21caf' },
  { name: 'Majuli Handlooms', tag: 'MH', color1: '#65a30d', color2: '#4d7c0f' },
  { name: 'Axom Agro Fresh', tag: 'AA', color1: '#16a34a', color2: '#15803d' },
  { name: 'Skyline Guwahati', tag: 'SG', color1: '#475569', color2: '#334155' },
  { name: 'Barak Retail Group', tag: 'BR', color1: '#e11d48', color2: '#be123c' },
  { name: 'Heritage Brews Assam', tag: 'HB', color1: '#ca8a04', color2: '#a16207' },
  { name: 'Pulse Fitness NE', tag: 'PF', color1: '#9333ea', color2: '#7e22ce' },
];

async function generateClients() {
  for (let i = 0; i < clientBrands.length; i++) {
    const c = clientBrands[i];
    const num = i + 1;
    const svg = `
      <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="120" rx="16" fill="#FFFFFF" stroke="#D6D6F0" stroke-width="1.5"/>
        <g transform="translate(24, 30)">
          <rect width="60" height="60" rx="14" fill="${c.color1}" fill-opacity="0.1" stroke="${c.color1}" stroke-opacity="0.3" stroke-width="1.5"/>
          <text x="30" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="${c.color1}" text-anchor="middle">${c.tag}</text>
          
          <text x="75" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1E1E1E">${c.name.split(' ')[0]}</text>
          <text x="75" y="48" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#6B6B7B">${c.name.split(' ').slice(1).join(' ') || 'Studio'}</text>
        </g>
      </svg>
    `;
    await sharp(Buffer.from(svg)).png().toFile(path.join(clientDir, `client-${num}.png`));
  }
  console.log('Generated 20 client logos');
}

// 10 Team Members
const teamData = [
  { name: 'Arindam Kashyap', role: 'Founder &amp; CEO', initials: 'AK', bg: '#0600FC', accent: '#0600FC' },
  { name: 'Priyanka Das', role: 'Head of Growth &amp; SEO', initials: 'PD', bg: '#db2777', accent: '#db2777' },
  { name: 'Debasish Baruah', role: 'Lead Web Architect', initials: 'DB', bg: '#7c3aed', accent: '#7c3aed' },
  { name: 'Ananya Sharma', role: 'Social Media Strategist', initials: 'AS', bg: '#d97706', accent: '#d97706' },
  { name: 'Bikramjit Saikia', role: 'Senior Video Producer', initials: 'BS', bg: '#059669', accent: '#059669' },
  { name: 'Rhea Sengupta', role: 'Creative Art Director', initials: 'RS', bg: '#0891b2', accent: '#0891b2' },
  { name: 'Tanmoy Goswami', role: 'Performance Ads Specialist', initials: 'TG', bg: '#dc2626', accent: '#dc2626' },
  { name: 'Nabanita Borah', role: 'Lead Copywriter', initials: 'NB', bg: '#9333ea', accent: '#9333ea' },
  { name: 'Manish Kalita', role: 'Operations Manager', initials: 'MK', bg: '#475569', accent: '#475569' },
  { name: 'Trishna Deka', role: 'Senior Account Manager', initials: 'TD', bg: '#0d9488', accent: '#0d9488' },
];

async function generateTeam() {
  for (let i = 0; i < teamData.length; i++) {
    const t = teamData[i];
    const num = i + 1;
    const svg = `
      <svg width="400" height="480" viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="480" rx="24" fill="#FFFFFF"/>
        <rect width="400" height="480" rx="24" fill="none" stroke="#D6D6F0" stroke-width="1.5"/>

        <!-- Avatar Circle with Ring -->
        <circle cx="200" cy="180" r="88" fill="#F0F0F6" stroke="${t.accent}" stroke-width="2.5" stroke-dasharray="6 4"/>
        <circle cx="200" cy="180" r="76" fill="${t.bg}" fill-opacity="0.12"/>
        <text x="200" y="202" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="${t.accent}" text-anchor="middle" letter-spacing="2">${t.initials}</text>
        
        <!-- Electric Blue Pixel Square on Collar -->
        <rect x="238" y="228" width="16" height="16" rx="3" fill="#0600FC"/>

        <!-- Text details -->
        <text x="200" y="320" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#1E1E1E" text-anchor="middle">${t.name}</text>
        <text x="200" y="352" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="${t.accent}" text-anchor="middle">${t.role}</text>
        
        <rect x="150" y="380" width="100" height="28" rx="14" fill="#F0F0F6" stroke="#D6D6F0" stroke-width="1"/>
        <text x="200" y="399" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#6B6B7B" text-anchor="middle" letter-spacing="1">GUWAHATI, IN</text>
      </svg>
    `;
    await sharp(Buffer.from(svg)).png().toFile(path.join(teamDir, `team-${num}.png`));
  }
  console.log('Generated 10 team avatars in light theme');
}

async function main() {
  await generateClients();
  await generateTeam();
}

main().catch(console.error);
