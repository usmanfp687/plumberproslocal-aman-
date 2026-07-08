const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// I will add rules to the END of the file, safely inside a new 991px and 768px media block to override everything properly.
const comprehensiveMobileFixes = `

/* ============================================================
   COMPREHENSIVE MOBILE LAYOUT FIXES
   ============================================================ */

/* Catch-all for images */
img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 991px) {
  /* Grids that should start collapsing at tablet width */
  .choose-grid { grid-template-columns: 1fr; gap: 32px; }
  .faq-grid { grid-template-columns: 1fr; gap: 32px; }
  .testi-grid { grid-template-columns: 1fr; }
  .counter-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}

@media (max-width: 768px) {
  /* Grids that must be 1 column on phones */
  .counter-grid { grid-template-columns: 1fr; gap: 20px; }
  .services-row { grid-template-columns: 1fr; }
  .addon-row { grid-template-columns: 1fr; }
  .trust-grid { grid-template-columns: 1fr; gap: 16px; }
  .process-grid { grid-template-columns: 1fr; gap: 24px; }
  .process-grid::before { display: none; }
  
  /* Ensure images inside these grids don't overflow */
  .choose-img { text-align: center; }
  .choose-img img { margin: 0 auto; display: block; border-radius: 12px; }
  .faq-img { text-align: center; display: none; /* Hide decorative FAQ image on small mobile to save space */ }
  
  /* Typography and padding adjustments to prevent edge cutting */
  .container { padding: 0 20px; overflow-x: hidden; }
  .rs-counter { padding: 40px 0; }
  
  .about-hero-stats { grid-template-columns: 1fr 1fr; gap: 12px; }
  .about-services-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  
  .cfaq-item { padding: 18px 16px; }
  .form-success { padding: 32px 20px; }
}

/* Force body overflow-x hidden to prevent any rogue elements from causing horizontal scroll */
body, html {
  overflow-x: hidden;
  max-width: 100vw;
}
`;

css += comprehensiveMobileFixes;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Comprehensive mobile fixes applied.');
