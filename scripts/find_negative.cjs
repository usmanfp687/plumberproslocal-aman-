const fs = require('fs');
const css = fs.readFileSync('styles/globals.css', 'utf8');

let depth = 0;
let lines = css.split('\n');

for (let i = 0; i < lines.length; i++) {
  const openCount = (lines[i].match(/\{/g) || []).length;
  const closeCount = (lines[i].match(/\}/g) || []).length;
  depth += openCount - closeCount;
  if (depth < 0) {
    console.log('Depth went negative at line:', i + 1);
    console.log(lines[i]);
    break;
  }
}
