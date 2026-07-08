const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

const mobileMenuCSS = `
  .mobile-menu {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--navy);
    z-index: 999;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
`;

// Insert it right after .mobile-menu-btn { display: flex; } inside the 991px media query
css = css.replace(
  /\.mobile-menu-btn \{ display: flex; \}/,
  `.mobile-menu-btn { display: flex; }\n${mobileMenuCSS}`
);

// Verify that it replaced successfully
if (css.includes(mobileMenuCSS.trim())) {
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Mobile menu CSS successfully restored.');
} else {
  console.log('Failed to replace mobile menu CSS.');
}
