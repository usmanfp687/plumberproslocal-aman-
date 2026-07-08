const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update CSS Variables
css = css.replace(/:root\s*{[\s\S]*?}/, `:root {
  --primary:      #f59e0b;
  --primary-lt:   #d97706;
  --orange:       #f59e0b;
  --orange-dark:  #d97706;
  --green-dark:   #020617;
  --green-testi:  #0f172a;
  --yellow:       #facc15;
  --link:         #38bdf8;
  --gray-bg:      #0f172a;
  --gray-border:  #1e293b;
  --text-body:    #94a3b8;
  --text-dark:    #f8fafc;
  --navy:         #020617;
  --white:        #020617;
  --pure-white:   #ffffff;
  --transition:   all 0.3s ease;
  --radius:       12px;
}`);

// Fix places where pure white text is needed (banner title, counter numbers)
css = css.replace(/color: var\(--white\);/g, 'color: var(--pure-white);');

// 2. Header Glassmorphism
css = css.replace(/\.site-header\s*{[^}]*}/, `.site-header {
  background: rgba(2, 6, 23, 0.7);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}`);

// Fix header links text color
css = css.replace(/\.nav-links a\s*{[^}]*}/, `.nav-links a {
  color: var(--pure-white);
  font-weight: 500;
  display: block;
  padding: 10px 0;
}`);

css = css.replace(/\.brand-name\s*{[^}]*}/, `.brand-name {
  font-size: 24px;
  font-weight: 800;
  color: var(--pure-white);
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
}`);


// 3. Banner redesign
css = css.replace(/\.rs-banner\s*{[\s\S]*?}/, `.rs-banner {
  background: url('/assets/images/global-hero.png') no-repeat center center;
  background-size: cover;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}
.rs-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 23, 0.65); /* Dark overlay */
  z-index: 1;
}`);

// Update banner::after to be hidden
css = css.replace(/\.rs-banner::after\s*{[\s\S]*?}/, `.rs-banner::after { display: none; }`);

// Banner content box
css = css.replace(/\.banner-content\s*{[^}]*}/, `.banner-content {
  position: relative;
  z-index: 2;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}`);

// Change banner row to single column for the box
css = css.replace(/\.banner-row\s*{[^}]*}/, `.banner-row {
  display: flex;
  justify-content: center;
  align-items: center;
}`);

css = css.replace(/\.banner-content-col\s*{[^}]*}/, `.banner-content-col {
  max-width: 700px;
  width: 100%;
  text-align: center;
}`);

// Center btn-part in banner
css = css.replace(/\.banner-content \.btn-part\s*{[^}]*}/, `.banner-content .btn-part {
  margin-top: 36px;
  display: flex;
  justify-content: center;
}`);


// Hide the banner-img-box since the image is now the background!
css = css.replace(/\.banner-img-box\s*{[^}]*}/, `.banner-img-box { display: none; }`);


// Ensure cards on dark background look good
css = css.replace(/\.services-item\s*{[^}]*}/, `.services-item {
  background: var(--green-testi);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 32px 24px;
  height: 100%;
  position: relative;
  transition: var(--transition);
}`);

css = css.replace(/\.testi-item\s*{[^}]*}/, `.testi-item {
  background: var(--green-testi);
  padding: 32px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
}`);

css = css.replace(/\.mini-card\s*{[^}]*}/, `.mini-card {
  background: var(--green-testi);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.05);
}`);


fs.writeFileSync(cssPath, css, 'utf8');
console.log("globals.css rewritten for dark mode and global hero.");
