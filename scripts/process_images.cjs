const fs = require('fs');
const path = require('path');

const artifactsDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\07946d30-084a-45d8-8811-2da1a5d7221b';
const imagesDir = 'C:\\New 25% Sites\\LocalElectricianEmergency\\public\\assets\\images';

const imageMap = {
  'emergency_electrician': 'emergency-commercial-electrician.png',
  'panel_upgrade': 'panel-upgrade.png',
  'wiring_services': 'wiring-services.png',
  'outlet_switch_repair': 'outlet-switch-repair.png',
  'lighting_installation': 'lighting-installation.png',
  'ev_charger': 'ev-charger-installation.png',
  'ceiling_fan': 'ceiling-fan-installation.png',
  'generator': 'generator-installation.png',
  'circuit_breaker': 'circuit-breaker-repair.png',
  'smoke_detector': 'smoke-detector-installation.png',
  'surge_protection': 'surge-protection.png',
  'commercial_electrical': 'commercial-electrical-services.png',
  'residential_electrical': 'bathroom-electrical-services.png',
  'faq_electrical': 'pipe-leak-repair-electrical.png'
};

// 1. Copy Images
const files = fs.readdirSync(artifactsDir);
for (const [prefix, newName] of Object.entries(imageMap)) {
  // Find the latest file matching the prefix
  const matchingFiles = files.filter(f => f.startsWith(prefix + '_') && f.endsWith('.png'));
  if (matchingFiles.length > 0) {
    // Sort to get the latest (by timestamp in the name)
    matchingFiles.sort();
    const latestFile = matchingFiles[matchingFiles.length - 1];
    
    const srcPath = path.join(artifactsDir, latestFile);
    const destPath = path.join(imagesDir, newName);
    
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${latestFile} to ${newName}`);
  } else {
    console.warn(`No file found for prefix ${prefix}`);
  }
}

// 2. Replace .webp with .png in codebase
function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('.webp')) {
    content = content.replace(/\.webp/g, '.png');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const dirsToScan = [
  'C:\\New 25% Sites\\LocalElectricianEmergency\\data',
  'C:\\New 25% Sites\\LocalElectricianEmergency\\src',
  'C:\\New 25% Sites\\LocalElectricianEmergency\\src\\cities',
  'C:\\New 25% Sites\\LocalElectricianEmergency\\src\\states',
  'C:\\New 25% Sites\\LocalElectricianEmergency\\src\\services'
];

dirsToScan.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isFile() && (f.endsWith('.js') || f.endsWith('.njk'))) {
      replaceInFile(fullPath);
    }
  });
});

console.log('Image processing complete.');
