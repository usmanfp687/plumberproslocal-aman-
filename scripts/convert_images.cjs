const fs = require('fs');
const path = require('path');

// Wait for sharp to be loaded
let sharp;
try {
  sharp = require('sharp');
} catch(e) {
  console.log("sharp not installed yet, try again later");
  process.exit(1);
}

const imagesDir = 'C:/New 25% Sites/LocalElectricianEmergency/public/assets/images';

// Plumbing keywords to filter out old webp files
const plumbingKeywords = ['plumb', 'faucet', 'toilet', 'drain', 'sewer', 'hydro-jetting', 'leak-detection-repair-plumber', 'garbage-disposal', 'sump-pump', 'water-heater', 'water-filtration', 'kitchen-plumbing'];

async function processImages() {
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const basename = path.basename(file, ext);
    const fullPath = path.join(imagesDir, file);

    // 1. Delete plumbing images
    const isPlumbing = plumbingKeywords.some(kw => basename.includes(kw));
    if (isPlumbing) {
      console.log('Deleting plumbing image: ' + file);
      fs.unlinkSync(fullPath);
      continue;
    }

    // 2. Convert PNG to WebP
    if (ext === '.png') {
      const outPath = path.join(imagesDir, basename + '.webp');
      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outPath);
        console.log('Converted ' + file + ' to webp');
        // Delete original PNG
        fs.unlinkSync(fullPath);
        console.log('Deleted original ' + file);
      } catch (err) {
        console.error('Failed to convert ' + file + ': ' + err.message);
      }
    }
  }
}

processImages().then(() => console.log('Image processing complete.'));
