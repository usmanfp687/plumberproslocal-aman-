const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// The file has garbage duplicates appended to the end.
// We know that the clean CSS ends with the `@media (max-width: 991px)` block which handles the mobile menu.
// Let's find the end of that block and truncate the file there.

const marker = '@media (max-width: 991px) {';
const markerIdx = css.indexOf(marker);

if (markerIdx !== -1) {
  function findEnd(str, start) {
    let depth = 0, i = start;
    while (i < str.length) {
      if (str[i] === '{') depth++;
      else if (str[i] === '}') { depth--; if (depth === 0) return i + 1; }
      i++;
    }
    return str.length;
  }
  
  const endIdx = findEnd(css, markerIdx);
  css = css.substring(0, endIdx);
}

// Now we need to make sure the About and Contact components are responsive inside the 768px media query.
// They were previously not added to the 768px or 1024px queries.

const responsiveRules = `
@media (max-width: 1024px) {
  .about-hero-grid { gap: 30px; }
  .about-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .about-services-grid { grid-template-columns: repeat(3, 1fr); }
  .contact-main-grid { grid-template-columns: 1fr; gap: 40px; }
}
@media (max-width: 768px) {
  .about-hero-grid { grid-template-columns: 1fr; }
  .about-hero-content { text-align: center; }
  .about-hero-content > div { justify-content: center; }
  .about-story-grid { grid-template-columns: 1fr; gap: 40px; }
  .about-services-grid { grid-template-columns: repeat(2, 1fr); }
  .contact-faq-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; gap: 0; }
  .about-hero { padding: 56px 0; }
  .about-story { padding: 56px 0; }
  .contact-hero { padding: 56px 0 46px; }
  .contact-body { padding: 56px 0; }
}
`;

css += '\n' + responsiveRules;

fs.writeFileSync(cssPath, css, 'utf8');
console.log('CSS truncated and responsive rules added successfully.');
