const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// I will find the first unclosed block and close it.
// Actually, let's just parse the CSS.

let out = '';
let depth = 0;
let lines = css.split('\n');

// Clean out the rogue brace I just inserted
lines = lines.filter((line, index) => {
  if (line.trim() === '}' && index === 1744) return false;
  return true;
});

css = lines.join('\n');
fs.writeFileSync(cssPath, css, 'utf8');
