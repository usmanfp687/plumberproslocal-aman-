const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// ── STEP 1: Remove ALL duplicate sections ────────────────────────────────
// Strategy: split on known unique markers, keep only the first occurrence of each duplicate block

// Remove duplicate @media (max-width: 1024px) blocks — keep only first
let parts1024 = css.split('@media (max-width: 1024px)');
// Keep the content before the first split + first block + everything after the second block ends
if (parts1024.length > 2) {
  // Find the end of each 1024 block (count braces)
  function findBlockEnd(str, start) {
    let depth = 0;
    let i = start;
    while (i < str.length) {
      if (str[i] === '{') depth++;
      else if (str[i] === '}') {
        depth--;
        if (depth === 0) return i + 1;
      }
      i++;
    }
    return str.length;
  }
  // Rebuild: before_first + first_block + strip all subsequent 1024 blocks
  // Just keep everything up to and including the first 1024 block
  const idx1 = css.indexOf('@media (max-width: 1024px)');
  const end1 = findBlockEnd(css, idx1);
  const before = css.substring(0, end1);
  let after = css.substring(end1);
  // Remove all other @media (max-width: 1024px) blocks
  while (after.includes('@media (max-width: 1024px)')) {
    const idx2 = after.indexOf('@media (max-width: 1024px)');
    const end2 = findBlockEnd(after, idx2);
    after = after.substring(0, idx2) + after.substring(end2);
  }
  css = before + after;
}

// Remove duplicate @media (max-width: 768px) blocks — keep only first
{
  const idx1 = css.indexOf('@media (max-width: 768px)');
  if (idx1 !== -1) {
    function findEnd(str, start) {
      let depth = 0, i = start;
      while (i < str.length) {
        if (str[i] === '{') depth++;
        else if (str[i] === '}') { depth--; if (depth === 0) return i + 1; }
        i++;
      }
      return str.length;
    }
    const end1 = findEnd(css, idx1);
    const before = css.substring(0, end1);
    let after = css.substring(end1);
    while (after.includes('@media (max-width: 768px)')) {
      const idx2 = after.indexOf('@media (max-width: 768px)');
      const end2 = findEnd(after, idx2);
      after = after.substring(0, idx2) + after.substring(end2);
    }
    css = before + after;
  }
}

// Remove duplicate .footer-grid blocks — keep only first
{
  function findEnd(str, start) {
    let depth = 0, i = start;
    while (i < str.length) {
      if (str[i] === '{') depth++;
      else if (str[i] === '}') { depth--; if (depth === 0) return i + 1; }
      i++;
    }
    return str.length;
  }
  const first = css.indexOf('.footer-grid {');
  if (first !== -1) {
    const end1 = findEnd(css, first);
    const before = css.substring(0, end1);
    let after = css.substring(end1);
    while (after.includes('.footer-grid {')) {
      const idx2 = after.indexOf('.footer-grid {');
      const end2 = findEnd(after, idx2);
      after = after.substring(0, idx2) + after.substring(end2);
    }
    css = before + after;
  }
}

// ── STEP 2: Fix .mobile-menu-btn — ensure display:none globally ──────────
// Remove any garbled mobile-menu-btn blocks first, then re-add clean version
css = css.replace(/\/\* Mobile menu[^*]*\*\/[\s\S]*?\.mobile-menu \{[\s\S]*?display: none;\s*\}/g, '');
css = css.replace(/\.mobile-menu-btn \{[\s\S]*?\}/g, '');

// Ensure mobile-menu-btn is properly defined before the 991 media query
const clean991 = `
/* ── Mobile menu: hidden on desktop, shown on mobile ── */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: auto;
  color: rgba(255,255,255,0.85);
}
.mobile-menu { display: none; }
`;

// Insert before @media (max-width: 991px)
if (css.includes('@media (max-width: 991px)') && !css.includes('display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  margin-left: auto;\n  color: rgba')) {
  css = css.replace('@media (max-width: 991px)', clean991 + '\n@media (max-width: 991px)');
}

// Inside 991 media query, make sure .mobile-menu-btn shows as flex
css = css.replace(
  /@media \(max-width: 991px\) \{[\s\S]*?\.mobile-menu-btn \{[\s\S]*?\}/,
  (match) => {
    if (match.includes('display: flex') || match.includes('display: block')) return match;
    return match.replace('.mobile-menu-btn {', '.mobile-menu-btn {\n    display: flex;');
  }
);

// ── STEP 3: Make sure @media (max-width: 991px) has mobile-menu-btn = flex
css = css.replace(
  /(@media \(max-width: 991px\) \{)([\s\S]*?)(\}[\s\n]*\/\* ──|$)/,
  (match, open, body, close) => {
    if (!body.includes('.mobile-menu-btn')) {
      body = `\n  .mobile-menu-btn { display: flex; }\n` + body;
    }
    return open + body + close;
  }
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('CSS deduplication complete.');

// Verify
const final = fs.readFileSync(cssPath, 'utf8');
console.log('footer-grid count:', (final.match(/\.footer-grid \{/g)||[]).length);
console.log('1024px media count:', (final.match(/@media \(max-width: 1024px\)/g)||[]).length);
console.log('768px media count:', (final.match(/@media \(max-width: 768px\)/g)||[]).length);
console.log('mobile-menu-btn count:', (final.match(/\.mobile-menu-btn/g)||[]).length);
console.log('about-hero count:', (final.match(/\.about-hero \{/g)||[]).length);
console.log('contact-hero count:', (final.match(/\.contact-hero \{/g)||[]).length);
