const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Fix cta-strip p (it became empty)
css = css.replace(
  /\.cta-strip p \{\s*\}/,
  `.cta-strip p {
  color: rgba(255,255,255,0.75);
  font-size: 15px;
  margin-bottom: 26px;
}`
);

// 2. Insert site-footer before .footer-grid (it was removed)
if (!css.includes('.site-footer')) {
  css = css.replace(
    '.footer-grid {',
    `.site-footer {
  background: var(--navy);
  color: rgba(255,255,255,0.6);
  padding: 56px 0 0;
}
.footer-grid {`
  );
}

// 3. Insert About + Contact CSS before footer-grid
const aboutContactCSS = `
/* ============================================================
   ABOUT PAGE
   ============================================================ */
.about-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0f2440 100%);
  padding: 88px 0 80px;
  position: relative;
  overflow: hidden;
}
.about-hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 4px;
  background: linear-gradient(90deg, var(--orange) 0%, #fbbf24 50%, var(--orange) 100%);
}
.about-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.about-hero-content h1 {
  font-size: clamp(28px, 3.6vw, 46px);
  line-height: 1.12;
  font-weight: 800;
  color: #fff;
  margin-bottom: 18px;
}
.about-hero-content h1 span { color: var(--orange); }
.about-hero-content > p {
  font-size: 16px;
  color: rgba(255,255,255,0.72);
  line-height: 1.85;
  margin-bottom: 0;
}
.about-hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 36px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.12);
}
.ah-stat strong {
  display: block;
  font-size: 26px;
  font-weight: 900;
  color: var(--orange);
  line-height: 1;
}
.ah-stat span {
  display: block;
  font-size: 11px;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-top: 6px;
}
.about-hero-img { position: relative; }
.about-hero-img img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.45);
  border: 3px solid rgba(249,115,22,0.3);
}
.about-badge {
  position: absolute;
  bottom: -16px;
  left: -16px;
  background: #fff;
  padding: 14px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.14);
}
.about-badge strong { display: block; font-size: 13px; color: var(--text-dark); font-weight: 700; }
.about-badge span { font-size: 11px; color: var(--text-body); }
.readon-outline {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 15px;
  border: 2px solid rgba(255,255,255,0.35);
  color: #fff;
  text-decoration: none;
  transition: var(--transition);
}
.readon-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; color: #fff; }
.about-story { padding: 90px 0; background: var(--white); }
.about-story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: start;
}
.about-values { display: flex; flex-direction: column; gap: 16px; }
.value-card {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  background: var(--gray-bg);
  border-radius: 12px;
  padding: 22px 20px;
  border: 1px solid var(--gray-border);
  transition: var(--transition);
}
.value-card:hover { border-color: var(--primary); transform: translateX(4px); box-shadow: 0 6px 20px rgba(26,86,219,0.08); }
.value-icon {
  width: 52px;
  height: 52px;
  background: var(--primary-lt);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.value-card h4 { font-size: 15px; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
.value-card p { font-size: 13.5px; margin: 0; color: var(--text-body); }
.about-services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.about-svc-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  background: var(--gray-bg);
  border: 1.5px solid var(--gray-border);
  border-radius: 12px;
  padding: 24px 16px;
  transition: var(--transition);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dark);
}
.about-svc-item:hover { border-color: var(--orange); background: rgba(249,115,22,0.04); transform: translateY(-3px); box-shadow: 0 8px 20px rgba(249,115,22,0.1); }

/* ============================================================
   CONTACT PAGE
   ============================================================ */
.contact-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0f2440 100%);
  padding: 72px 0 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.contact-hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 4px;
  background: linear-gradient(90deg, var(--orange), #fbbf24, var(--orange));
}
.contact-hero h1 { font-size: clamp(28px, 3.6vw, 46px); font-weight: 800; color: #fff; margin-bottom: 14px; }
.contact-hero h1 span { color: var(--orange); }
.contact-hero p { font-size: 16px; color: rgba(255,255,255,0.7); max-width: 580px; margin: 0 auto; line-height: 1.8; }
.contact-body { background: var(--gray-bg); padding: 72px 0; }
.contact-main-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 48px;
  align-items: start;
}
.contact-info-col h2 { font-size: 24px; font-weight: 800; color: var(--text-dark); margin-bottom: 6px; }
.contact-card {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  background: var(--white);
  border: 1.5px solid var(--gray-border);
  border-radius: 12px;
  padding: 20px 18px;
  margin-bottom: 14px;
  transition: var(--transition);
}
.contact-card:hover { border-color: var(--primary); box-shadow: 0 4px 18px rgba(26,86,219,0.07); }
.contact-card-icon {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.contact-card h4 { font-size: 14px; font-weight: 700; color: var(--text-dark); margin-bottom: 4px; }
.contact-card p { font-size: 13px; color: var(--text-body); margin: 4px 0 0; }
.contact-phone-link { display: block; font-size: 20px; font-weight: 800; color: var(--orange); margin: 4px 0; text-decoration: none; }
.contact-phone-link:hover { color: var(--orange-dark); }
.contact-email-link { font-size: 14px; font-weight: 600; color: var(--primary); word-break: break-all; }
.contact-hours { display: flex; flex-direction: column; gap: 3px; }
.contact-hours span { font-size: 12.5px; color: var(--text-body); }
.contact-trust { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
.ct-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--primary-lt);
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 50px;
}
.contact-form-box {
  background: var(--white);
  border-radius: 16px;
  border: 1.5px solid var(--gray-border);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
}
.form-header {
  background: linear-gradient(135deg, #1e3a5f, #0f172a);
  padding: 28px 32px;
  border-bottom: 3px solid var(--orange);
}
.form-header h3 { font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 6px; }
.form-header p { font-size: 14px; color: rgba(255,255,255,0.65); margin: 0; }
.contact-form { padding: 32px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.form-group { display: flex; flex-direction: column; margin-bottom: 16px; }
.form-row .form-group { margin-bottom: 0; }
.form-group label { font-size: 13px; font-weight: 600; color: var(--text-dark); margin-bottom: 7px; }
.req { color: var(--orange); }
.input-wrap { position: relative; }
.input-icon { position: absolute; left: 13px; top: 50%; transform: translateY(-50%); font-size: 16px; color: #aaa; pointer-events: none; }
.input-wrap input,
.input-wrap select,
.input-wrap textarea {
  width: 100%;
  padding: 12px 14px 12px 40px;
  border: 1.5px solid var(--gray-border);
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: var(--text-dark);
  background: var(--white);
  transition: var(--transition);
  outline: none;
}
.input-wrap textarea { resize: vertical; min-height: 110px; padding-top: 14px; }
.input-wrap input:focus,
.input-wrap select:focus,
.input-wrap textarea:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(26,86,219,0.08); }
.urgency-pills { display: flex; flex-wrap: wrap; gap: 10px; }
.urgency-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  border: 1.5px solid var(--gray-border);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dark);
  cursor: pointer;
  transition: var(--transition);
  user-select: none;
}
.urgency-pill input[type="radio"] { display: none; }
.urgency-pill:hover, .urgency-pill.active { border-color: var(--primary); background: var(--primary-lt); color: var(--primary); }
.form-submit-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--orange);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 20px rgba(249,115,22,0.4);
  margin-top: 8px;
}
.form-submit-btn:hover { background: var(--orange-dark); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(249,115,22,0.5); }
.form-disclaimer {
  text-align: center;
  font-size: 11.5px;
  color: #aaa;
  margin-top: 14px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
}
.form-success { padding: 48px 32px; text-align: center; }
.success-icon { margin-bottom: 18px; }
.form-success h3 { font-size: 26px; font-weight: 800; color: var(--text-dark); margin-bottom: 12px; }
.form-success p { color: var(--text-body); margin-bottom: 24px; }
.contact-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.cfaq-item {
  background: var(--white);
  border: 1.5px solid var(--gray-border);
  border-radius: 12px;
  padding: 24px 22px;
  transition: var(--transition);
}
.cfaq-item:hover { border-color: var(--primary); box-shadow: 0 6px 20px rgba(26,86,219,0.07); }
.cfaq-item h4 { font-size: 15px; font-weight: 700; color: var(--text-dark); margin-bottom: 10px; display: flex; align-items: center; }
.cfaq-item p { font-size: 13.5px; color: var(--text-body); margin: 0; line-height: 1.7; }

`;

// Insert before site-footer
if (!css.includes('.about-hero {')) {
  css = css.replace('.site-footer {', aboutContactCSS + '.site-footer {');
}

// 4. Fix mobile-menu-btn — only show on mobile, hide on desktop
// The current CSS shows it inside @media(max-width:991px) which is correct
// But we need to make sure mobile-menu-btn is HIDDEN by default
if (!css.includes('.mobile-menu-btn {\n  display: none;')) {
  css = css.replace(
    '.mobile-menu-btn {',
    `.mobile-menu-btn {
  display: none;`
  );
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('CSS fixed: About/Contact CSS added, mobile button fixed, site-footer restored.');
