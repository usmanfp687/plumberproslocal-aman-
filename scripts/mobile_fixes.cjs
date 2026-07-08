const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Hide nav-links inside 991px media query
css = css.replace(
  /@media \(max-width: 991px\) \{/,
  `@media (max-width: 991px) {\n  .nav-links { display: none; }\n`
);

// 2. Add responsive rules to 1024px media query
css = css.replace(
  /@media \(max-width: 1024px\) \{/,
  `@media (max-width: 1024px) {\n  .trust-grid { grid-template-columns: repeat(2, 1fr); }\n`
);

// 3. Add responsive rules to the FINAL 768px media query
css = css.replace(
  /@media \(max-width: 768px\) \{([^@]+)\}\s*$/g,
  (match, content) => {
    return `@media (max-width: 768px) {${content}  .trust-grid { grid-template-columns: 1fr; gap: 16px; }\n  .process-grid { grid-template-columns: 1fr; gap: 24px; }\n  .process-grid::before { display: none; }\n  .about-hero-stats { grid-template-columns: 1fr 1fr; }\n  .about-services-grid { grid-template-columns: 1fr 1fr; }\n  .addon-row { grid-template-columns: 1fr; }\n}\n`;
  }
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Mobile fixes applied!');
