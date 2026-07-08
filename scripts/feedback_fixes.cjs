const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

const finalFixes = `

/* ============================================================
   USER FEEDBACK FIXES (Footer, Menu Colors, Centering)
   ============================================================ */

@media (max-width: 991px) {
  /* Fix Footer on tablet */
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 768px) {
  /* Give enough breathing room on edges */
  .container {
    padding: 0 24px !important;
  }
  
  /* Center headers and text on mobile to avoid looking awkward */
  .sec-title h2, .sec-title4 h2, .faq-inner-title, .sec-title4 .sub-text, .sec-center, .sec-title {
    text-align: center;
  }
  .sec-title4 { text-align: center; }
  .sec-title4 .sub-line { margin: 0 auto 12px; }

  /* Fix Footer on mobile */
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  /* Make mobile menu text visible against navy background */
  .mobile-nav-links a {
    color: var(--white) !important;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .mobile-nav-links li { border-bottom: none; }
  
  .choose-grid, .faq-grid, .testi-grid, .counter-grid, .services-row, .addon-row, .trust-grid, .process-grid {
    padding: 0 4px; /* Slight inset for grids so they don't look glued to the edge */
  }
}
`;

css += finalFixes;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Final user feedback fixes applied.');
