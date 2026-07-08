const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Find the first 768px media query starting around line 1591
const q1 = '@media (max-width: 768px) {';
const searchStart = css.indexOf('/* ============================================================\n   RESPONSIVE');
const m1 = css.indexOf(q1, searchStart);

if (m1 !== -1) {
  // We know that right after `.location-meta { font-size: 14px !important; }` there should be a closing brace before `/* Brand column */` starts.
  // Let's just do a regex replace to insert the brace.
  const target = '.location-meta { font-size: 14px !important; }';
  const replacement = '.location-meta { font-size: 14px !important; }\n}\n';
  
  // Only replace if not already closed
  const checkSlice = css.substring(m1, m1 + 500);
  if (!checkSlice.includes(replacement)) {
    css = css.replace(target, replacement);
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log('Successfully closed 768px media query.');
  } else {
    console.log('Already closed.');
  }
}
