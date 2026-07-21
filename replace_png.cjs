const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      results.push(file);
    }
  });
  return results;
}

const dirsToSearch = [
  path.join(__dirname, 'src'),
  path.join(__dirname, 'data')
];

let replacedFiles = [];

dirsToSearch.forEach(dir => {
  const files = walk(dir);
  files.forEach(file => {
    if (file.endsWith('.njk') || file.endsWith('.js') || file.endsWith('.json')) {
      let content = fs.readFileSync(file, 'utf8');
      if (content.includes('.png')) {
        content = content.replace(/\.png/g, '.webp');
        fs.writeFileSync(file, content, 'utf8');
        replacedFiles.push(file);
      }
    }
  });
});

console.log('Replaced .png with .webp in:', replacedFiles);
