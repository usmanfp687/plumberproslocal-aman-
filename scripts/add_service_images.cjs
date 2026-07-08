const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'C:/New 25% Sites/LocalElectricianEmergency/src/index.njk',
  'C:/New 25% Sites/LocalElectricianEmergency/src/cities/city-page.njk',
  'C:/New 25% Sites/LocalElectricianEmergency/src/states/state-page.njk',
  'C:/New 25% Sites/LocalElectricianEmergency/src/services/index.njk'
];

const imgHtml = `
          {% if svc.image %}
          <div class="services-card-img">
            <img src="/assets/images/{{ svc.image }}" alt="{{ svc.title }}" loading="lazy">
          </div>
          {% endif %}
          <div class="services-icon-bar">`;

for (const file of filesToUpdate) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Only replace if we haven't already
    if (!content.includes('services-card-img')) {
      content = content.replace(/<div class="services-icon-bar">/g, imgHtml);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated: ' + file);
    } else {
      console.log('Already updated: ' + file);
    }
  } else {
    console.log('File not found: ' + file);
  }
}

const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

if (!css.includes('.services-card-img')) {
  const newCss = `

/* ============================================================
   SERVICE CARD IMAGES
   ============================================================ */
.services-card-img {
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: var(--gray-bg);
}
.services-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.services-slider .services-item:hover .services-card-img img {
  transform: scale(1.08);
}

/* Float the icon up over the image for a premium look */
.services-icon-bar {
  margin-top: -22px !important;
  z-index: 2;
  position: relative;
  padding: 0 22px !important;
}
.services-icon-bar .svc-icon {
  border: 4px solid var(--white);
  box-sizing: content-box;
}
.services-content {
  padding-top: 12px !important;
}
`;
  css += newCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Updated CSS');
} else {
  console.log('CSS already updated');
}
