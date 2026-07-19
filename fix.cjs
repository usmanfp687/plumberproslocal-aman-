const fs = require('fs');
const path = require('path');

// 1. Copy mobile hero
const brainDir = 'C:/Users/dell/.gemini/antigravity-ide/brain/dc69eb8b-8a4d-412f-bf52-5cd48be1b958';
const imgDir = path.join(process.cwd(), 'public/assets/images');
const files = fs.readdirSync(brainDir).filter(f => f.startsWith('mobile_hero') && f.endsWith('.png'));
files.sort((a,b) => fs.statSync(path.join(brainDir, b)).mtimeMs - fs.statSync(path.join(brainDir, a)).mtimeMs);
fs.copyFileSync(path.join(brainDir, files[0]), path.join(imgDir, 'mobile_hero.png'));

// 2. Replace image tag in templates
const pictureTag = '<picture>\\n  <source media="(max-width: 767px)" srcset="/assets/images/mobile_hero.png">\\n  <img src="/assets/images/global_hero.png" alt="Professional plumber at work">\\n</picture>';
const htmlFiles = ['src/index.njk', 'src/cities/city-page.njk', 'src/states/state-page.njk'];
htmlFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/<img src="\/assets\/images\/global[-_]hero\.(webp|png)"[^>]*>/g, pictureTag);
  fs.writeFileSync(f, content);
});

// 3. Update CSS for Header and Mobile Menu
let css = fs.readFileSync('styles/globals.css', 'utf8');

// Header Design Update
css = css.replace('.site-header {\\n  background: #1e293b;', '.site-header {\\n  background: linear-gradient(90deg, var(--primary) 0%, #0f172a 100%);\\n  border-bottom: 3px solid var(--orange);\\n  box-shadow: 0 4px 20px rgba(0,0,0,0.2);');

// Mobile Menu Update
// The current CSS might have .mobile-menu { background: #0f172a; ...
// I will just use regex to replace it if it's there
css = css.replace('.mobile-menu {\\n    background: #0f172a;', '.mobile-menu {\\n    background: rgba(15, 23, 42, 0.95);\\n    backdrop-filter: blur(10px);\\n    border-bottom: 3px solid var(--orange);');
css = css.replace('.mobile-nav-links a {\\n    color: #fff;', '.mobile-nav-links a {\\n    color: #fff;\\n    font-size: 18px;\\n    padding: 14px 24px;\\n    border-bottom: 1px solid rgba(255,255,255,0.05);');

fs.writeFileSync('styles/globals.css', css);
console.log("Fixes applied successfully.");
