const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'assets', 'images');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    const filePath = path.join(dir, file);
    const parsed = path.parse(filePath);
    const outPath = path.join(dir, parsed.name + '.webp');
    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outPath)
      .then(() => {
        console.log(`Converted ${file} to webp`);
        fs.unlinkSync(filePath);
      })
      .catch(err => console.error(err));
  }
});
