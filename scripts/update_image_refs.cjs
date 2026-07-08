const fs = require('fs');
const path = require('path');

const getFiles = (dir, filesList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '_site' && file !== 'scripts' && file !== '.git') {
        getFiles(filePath, filesList);
      }
    } else {
      if (filePath.endsWith('.njk') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
        filesList.push(filePath);
      }
    }
  }
  return filesList;
};

const allFiles = getFiles('C:/New 25% Sites/LocalElectricianEmergency/src');
// Include data/services.js
allFiles.push('C:/New 25% Sites/LocalElectricianEmergency/data/services.js');

let replacedCount = 0;

for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('.png')) {
    const newContent = content.replace(/\.png/g, '.webp');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      replacedCount++;
    }
  }
}

console.log('Replaced .png with .webp in ' + replacedCount + ' files.');
