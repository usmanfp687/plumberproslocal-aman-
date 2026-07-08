const fs = require('fs');
const css = fs.readFileSync('styles/globals.css', 'utf8');

let depth = 0;
let lastOpen = -1;
let line = 1;

for (let i = 0; i < css.length; i++) {
  if (css[i] === '\n') line++;
  if (css[i] === '{') {
    depth++;
    if (depth === 1) lastOpen = line;
  }
  if (css[i] === '}') {
    depth--;
  }
}

console.log('Final depth:', depth);
console.log('Line of last unclosed block (if depth > 0):', lastOpen);

// Also check for unclosed @media blocks
const lines = css.split('\n');
let currentMedia = null;
let currentDepth = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('@media')) {
    currentMedia = i + 1;
  }
  currentDepth += (lines[i].match(/\{/g) || []).length;
  currentDepth -= (lines[i].match(/\}/g) || []).length;
}
console.log('Lines array length:', lines.length);
