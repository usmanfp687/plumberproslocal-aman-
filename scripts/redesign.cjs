const fs = require('fs');

const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// 1. CSS Variables — fresher palette
css = css.replace(
  /--primary:\s+#01539f;/,
  '--primary:      #1a56db;'
);
css = css.replace(
  /--primary-lt:\s+#e8f2ff;/,
  '--primary-lt:   #eff6ff;'
);
css = css.replace(
  /--orange:\s+#ff7033;/,
  '--orange:       #f97316;'
);
css = css.replace(
  /--orange-dark:\s+#e05a20;/,
  '--orange-dark:  #ea6c0a;'
);
css = css.replace(
  /--green-dark:\s+#02493b;/,
  '--green-dark:   #1e3a5f;'
);
css = css.replace(
  /--green-testi:\s+#00483A;/,
  '--green-testi:  #0f2440;'
);
css = css.replace(
  /--yellow:\s+#ffd600;/,
  '--yellow:       #fbbf24;'
);
css = css.replace(
  /--link:\s+#007cfb;/,
  '--link:         #1a56db;'
);
css = css.replace(
  /--gray-bg:\s+#f5f7fa;/,
  '--gray-bg:      #f8fafc;'
);
css = css.replace(
  /--gray-border:\s+#e8e8e8;/,
  '--gray-border:  #e2e8f0;'
);
css = css.replace(
  /--text-body:\s+#555;/,
  '--text-body:    #475569;'
);
css = css.replace(
  /--text-dark:\s+#0a0a0a;/,
  '--text-dark:    #0f172a;'
);
css = css.replace(
  /--navy:\s+#0a1e3f;/,
  '--navy:         #0f172a;'
);
css = css.replace(
  /--radius:\s+8px;/,
  '--radius:       10px;'
);

// 2. Header — dark navy with orange CTA
css = css.replace(
  /background: rgba\(255, 255, 255, 0\.85\);\s*\n\s*backdrop-filter: blur\(12px\);/,
  `background: #0f172a;`
);
// Update logo brand color in header (currently uses var(--primary) which is blue)
css = css.replace(
  /\.logo-text \.brand \{[\s\S]*?color: var\(--primary\);/,
  `.logo-text .brand {\n  font-size: 15px;\n  font-weight: 800;\n  color: #ffffff;`
);
// Logo icon: amber instead of blue gradient
css = css.replace(
  /background: linear-gradient\(135deg, var\(--primary\), #0277c8\);/,
  `background: var(--orange);`
);
// Nav links: white text on dark header
css = css.replace(
  /\.nav-links li a \{[\s\S]*?color: var\(--text-dark\);/,
  `.nav-links li a {\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255,255,255,0.75);`
);
css = css.replace(
  /\.nav-links li a:hover \{ color: var\(--primary\); background: var\(--primary-lt\); \}/,
  `.nav-links li a:hover { color: #fff; background: rgba(255,255,255,0.08); }`
);
// Remove box-shadow from logo-icon (was for old blue)
css = css.replace(
  /box-shadow: 0 4px 12px rgba\(1,83,159,0\.25\);/,
  ``
);

// 3. Banner — richer, darker, amber accent
css = css.replace(
  /background: linear-gradient\(125deg, #071731 0%, #0e3475 45%, #103680 75%, #071731 100%\);[\s\S]*?padding: 72px 0 64px;/,
  `background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0f2440 100%);\n  padding: 88px 0 80px;`
);
// amber conic accent replacing old radial
css = css.replace(
  /background: radial-gradient\(circle, rgba\(255,112,51,0\.1\) 0%, transparent 65%\);[\s\S]*?pointer-events: none;\s*\n}/,
  `background: conic-gradient(from 200deg at 100% 0%, rgba(249,115,22,0.2) 0deg, transparent 90deg);\n  pointer-events: none;\n}`
);
// bottom accent line
css = css.replace(
  /background: radial-gradient\(circle, rgba\(1,83,159,0\.15\) 0%, transparent 65%\);[\s\S]*?pointer-events: none;\s*\n}/,
  `background: linear-gradient(90deg, var(--orange) 0%, #fbbf24 50%, var(--orange) 100%);\n  width: 100%;\n  height: 4px;\n  bottom: 0;\n  left: 0;\n  right: auto;\n  border-radius: 0;\n}`
);
// Sub-label pill: orange instead of light-blue
css = css.replace(
  /color: #90cdf4;[\s\S]*?border: 1px solid rgba\(144,205,244,0\.35\);[\s\S]*?background: rgba\(144,205,244,0\.08\);/,
  `color: var(--orange);\n  margin-bottom: 18px;\n  border: 1px solid rgba(249,115,22,0.35);\n  padding: 5px 14px;\n  border-radius: 100px;\n  background: rgba(249,115,22,0.1);`
);
// Banner h1 color: was var(--white) which is fine, span color: amber
css = css.replace(/\.banner-content h1\.title span \{ color: #63b3ed; \}/, `.banner-content h1.title span { color: var(--orange); }`);
// Bigger bolder h1
css = css.replace(
  /font-size: clamp\(26px, 3\.2vw, 40px\);[\s\S]*?font-weight: 700;[\s\S]*?color: var\(--white\);/,
  `font-size: clamp(30px, 3.6vw, 48px);\n  line-height: 1.12;\n  font-weight: 800;\n  color: #ffffff;`
);
// Banner image: amber border
css = css.replace(
  /border-radius: 12px;\s*\n\s*box-shadow: 0 20px 56px rgba\(0,0,0,0\.35\);/,
  `border-radius: 16px;\n  box-shadow: 0 24px 60px rgba(0,0,0,0.45);\n  border: 3px solid rgba(249,115,22,0.3);`
);

// 4. Buttons — pill style
css = css.replace(
  /border-radius: 6px;\s*\n\s*font-weight: 700;\s*\n\s*font-size: 15px;\s*\n\s*cursor: pointer;/,
  `border-radius: 50px;\n  font-weight: 700;\n  font-size: 15px;\n  cursor: pointer;`
);
css = css.replace(
  /padding: 13px 28px;\s*\n\s*border-radius: 50px;/,
  `padding: 14px 34px;\n  border-radius: 50px;`
);
css = css.replace(
  /box-shadow: 0 4px 18px rgba\(255,112,51,0\.32\);/,
  `box-shadow: 0 4px 22px rgba(249,115,22,0.45);`
);
css = css.replace(
  /box-shadow: 0 6px 24px rgba\(255,112,51,0\.42\);/,
  `box-shadow: 0 8px 28px rgba(249,115,22,0.55);`
);

// 5. Service cards — cleaner, shadow-lifted
css = css.replace(
  /border-radius: var\(--radius\);\s*\n\s*border: 1px solid var\(--gray-border\);/g,
  `border-radius: 14px;\n  border: 1.5px solid var(--gray-border);`
);
css = css.replace(
  /box-shadow: 0 8px 28px rgba\(1,83,159,0\.1\);/,
  `box-shadow: 0 12px 32px rgba(26,86,219,0.13);`
);
// Service icon bar: white bg, blue bottom border on hover
css = css.replace(
  /\.services-icon-bar \{[\s\S]*?background: var\(--primary-lt\);/,
  `.services-icon-bar {\n  background: var(--white);`
);
css = css.replace(
  /\.services-slider \.services-item:hover \.services-icon-bar \{\s*\n\s*background: #d9eaff;\s*\n\}/,
  `.services-slider .services-item:hover .services-icon-bar {\n  background: var(--primary-lt);\n  border-bottom-color: var(--primary);\n}`
);
// Svc icon: larger, lighter
css = css.replace(
  /width: 38px;\s*\n\s*height: 38px;\s*\n\s*background: var\(--white\);\s*\n\s*border-radius: 8px;/,
  `width: 44px;\n  height: 44px;\n  background: var(--primary-lt);\n  border-radius: 10px;`
);
css = css.replace(
  /box-shadow: 0 2px 8px rgba\(1,83,159,0\.12\);/,
  ``
);
// Arrow icon: use primary blue instead of yellow
css = css.replace(
  /background: var\(--yellow\);[\s\S]*?color: var\(--primary\);[\s\S]*?transition: all 0\.35s/,
  `background: var(--primary-lt);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n  color: var(--primary);\n  transition: all 0.3s`
);
css = css.replace(
  /\.services-btn a:hover \.arrow-icon \{\s*\n\s*transform: translateX\(5px\);\s*\n\s*background: var\(--primary\);\s*\n\s*color: var\(--white\);\s*\n\}/,
  `.services-btn a:hover .arrow-icon {\n  transform: translateX(6px);\n  background: var(--orange);\n  color: #fff;\n}`
);
css = css.replace(
  /\.services-btn a \{\s*\n\s*font-size: 13\.5px;\s*\n\s*font-weight: 700;\s*\n\s*color: var\(--text-dark\);/,
  `.services-btn a {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);`
);
css = css.replace(
  /\.services-btn a:hover \{ color: var\(--primary\); \}/,
  `.services-btn a:hover { color: var(--orange); }`
);

// 6. CTA Strip — vivid blue gradient with amber top-border
css = css.replace(
  /background: var\(--green-dark\);\s*\n\s*padding: 56px 0;\s*\n\s*text-align: center;/,
  `background: linear-gradient(135deg, #1a56db 0%, #0f2440 100%);\n  padding: 68px 0;\n  text-align: center;\n  border-top: 4px solid var(--orange);`
);

// 7. Testimonial — dark gradient
css = css.replace(
  /background: var\(--green-testi\);\s*\n\s*padding: 72px 0;\s*\n\}/,
  `background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);\n  padding: 72px 0;\n}`
);

// 8. Counter strip — blue gradient with amber top border
css = css.replace(
  /background: var\(--green-dark\);\s*\n\s*padding: 0;\s*\n\s*border-top: 4px solid rgba\(255,255,255,0\.07\);/,
  `background: linear-gradient(90deg, #1a56db 0%, #1e3a5f 100%);\n  padding: 0;\n  border-top: 4px solid var(--orange);`
);

// Header phone in header: pill + shadow
css = css.replace(
  /border-radius: 6px !important;[\s\S]*?font-weight: 700 !important;[\s\S]*?font-size: 13\.5px !important;/,
  `border-radius: 50px !important;\n  font-weight: 700 !important;\n  font-size: 13px !important;`
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Design overhaul complete.');
