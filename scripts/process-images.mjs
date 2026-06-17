import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SRC_DIR = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\e6c6df47-da7b-40e7-827d-b2f13cb73687';
const DEST_DIR = 'c:\\Nationwide Sites\\plumbing-local-pros\\public\\images';

const files = {
  'service_faucet_1781371918099.png': 'service-faucet.webp',
  'service_sewer_1781371957942.png': 'service-sewer.webp',
  'service_disposal_1781371985781.png': 'service-disposal.webp',
  'service_leak_1781372010607.png': 'service-leak.webp',
  'service_bathroom_1781372038435.png': 'service-bathroom.webp',
  'service_filtration_1781372063984.png': 'service-filtration.webp',
  'service_sump_1781372090124.png': 'service-sump.webp',
};

async function processImages() {
  console.log('Processing new images...');
  
  if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
  }

  for (const [src, dest] of Object.entries(files)) {
    const srcPath = path.join(SRC_DIR, src);
    const destPath = path.join(DEST_DIR, dest);
    
    if (fs.existsSync(srcPath)) {
      const info = await sharp(srcPath)
        .resize(800, 600, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(destPath);
        
      const stat = fs.statSync(destPath);
      console.log(`- ${dest}: ${(stat.size / 1024).toFixed(1)} KB`);
    } else {
      console.log(`Skipped (not found): ${src}`);
    }
  }
  console.log('Done!');
}

processImages().catch(console.error);
