const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Fix Map Colors
css = css.replace(/fill: #cbd5e1; \/\* Default slate-300 \*\//, 'fill: #1e293b; /* Dark map default */');
css = css.replace(/stroke: #ffffff;/, 'stroke: var(--navy);');

// Fix Mobile Menu Background
css = css.replace(/background: #fff;\s*box-shadow: 0 4px 6px -1px rgba\(0, 0, 0, 0\.1\);/g, `background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(12px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);`);

// Fix sub-labels / icons that might use #fff instead of var(--pure-white)
css = css.replace(/color:#fff/g, 'color:var(--pure-white)');
css = css.replace(/color: #fff/g, 'color: var(--pure-white)');
css = css.replace(/color:var\(--white\)/g, 'color:var(--pure-white)');

// Fix accordion answer text color
css = css.replace(/\.acc-answer p\s*{[^}]*}/, `.acc-answer p {
  color: var(--text-body);
  margin: 0;
}`);

// Change body text to a bit brighter gray for contrast against dark background
css = css.replace(/--text-body:\s*#94a3b8;/, '--text-body: #cbd5e1;');

// Set map hover to amber
css = css.replace(/\.interactive-usa-map path:hover\s*{[^}]*}/, `.interactive-usa-map path:hover {
  fill: var(--orange) !important;
  stroke: var(--pure-white);
  transform: translateY(-2px);
}`);


fs.writeFileSync(cssPath, css, 'utf8');
console.log("globals.css fixes applied.");
