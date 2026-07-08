const fs = require('fs');

// 1. Fix city-page.njk
const cityPagePath = 'C:/New 25% Sites/LocalElectricianEmergency/src/cities/city-page.njk';
let cityHtml = fs.readFileSync(cityPagePath, 'utf8');

// Replace the [object Object] bug
cityHtml = cityHtml.replace(
  '{{ whyChooseContent | safe }}',
  '<p>{{ whyChooseContent.p1 }}</p>\n          <p>{{ whyChooseContent.p2 }}</p>'
);

fs.writeFileSync(cityPagePath, cityHtml, 'utf8');
console.log('Fixed city-page.njk [object Object] bug.');

// 2. Fix globals.css overlap bug
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// The image is sticky on desktop, which breaks flex-direction: column on mobile.
// I will append position: static to the mobile image ordering fix.
css = css.replace(
  /order: -1; \/\* This forces the image to always appear FIRST \(above the text\) \*\//,
  'order: -1; /* This forces the image to always appear FIRST (above the text) */\n    position: static !important;'
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Fixed sticky image overlap bug.');
