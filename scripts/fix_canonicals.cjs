const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Update src/_includes/layout.njk
const layoutPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/_includes/layout.njk';
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

// Replace canonical link
layoutContent = layoutContent.replace(
  /{%\s*if\s*canonical\s*%}<link rel="canonical" href="{{ canonical }}">.*?{%\s*endif\s*%}/,
  '<link rel="canonical" href="{{ site.DOMAIN }}{{ page.url }}">'
);

// Replace og:url
layoutContent = layoutContent.replace(
  /{%\s*if\s*canonical\s*%}<meta property="og:url" content="{{ canonical }}">.*?{%\s*endif\s*%}/,
  '<meta property="og:url" content="{{ site.DOMAIN }}{{ page.url }}">'
);

fs.writeFileSync(layoutPath, layoutContent, 'utf8');
console.log('Updated layout.njk');

// 2. Remove canonical from frontmatter of all .njk files
const getFiles = (dir, filesList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '_site') {
        getFiles(filePath, filesList);
      }
    } else {
      if (filePath.endsWith('.njk')) {
        filesList.push(filePath);
      }
    }
  }
  return filesList;
};

const allNjkFiles = getFiles('C:/New 25% Sites/LocalElectricianEmergency/src');
let strippedCount = 0;

for (const filePath of allNjkFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('canonical:')) {
    // Remove the canonical line from frontmatter. We use a regex that handles leading spaces and potential quotes.
    const newContent = content.replace(/^[ \t]*canonical:.*?(?:\r\n|\n)/m, '');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      strippedCount++;
    }
  }
}

console.log("Stripped manual canonicals from " + strippedCount + " files.");
