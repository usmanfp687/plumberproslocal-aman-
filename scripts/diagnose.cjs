const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Count occurrences of duplicate footer-grid
const footerCount = (css.match(/\.footer-grid \{/g) || []).length;
console.log('footer-grid occurrences:', footerCount);

// Check mobile-menu-btn occurrences
const mobileCount = (css.match(/\.mobile-menu-btn/g) || []).length;
console.log('mobile-menu-btn occurrences:', mobileCount);

// Check about-hero
const aboutCount = (css.match(/\.about-hero \{/g) || []).length;
console.log('about-hero occurrences:', aboutCount);

// Check contact-hero
const contactCount = (css.match(/\.contact-hero \{/g) || []).length;
console.log('contact-hero occurrences:', contactCount);

// Find all @media declarations
const mediaMatches = css.match(/@media[^{]+\{/g) || [];
console.log('Media queries found:', mediaMatches.map(m => m.trim()));
