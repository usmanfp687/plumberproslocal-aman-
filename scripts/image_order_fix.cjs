const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

const orderFix = `

/* ============================================================
   MOBILE IMAGE ORDERING FIX
   ============================================================ */

@media (max-width: 991px) {
  /* On mobile/tablet, stack the choose-grid vertically, and force the image to be on top */
  .choose-grid {
    display: flex !important;
    flex-direction: column !important;
  }
  .choose-grid .choose-img {
    order: -1; /* This forces the image to always appear FIRST (above the text) */
    margin-bottom: 24px;
  }
}
`;

css += orderFix;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Mobile image ordering applied.');
