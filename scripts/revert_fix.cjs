const fs = require('fs');
const path = require('path');

// 1. Fix globals.css sticky and layout
const cssPath = path.resolve('C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(/align-items: center;\s*\n}\s*\n\.choose-img img/g, `align-items: flex-start;\n}\n.choose-img {\n  position: sticky;\n  top: 120px;\n}\n.choose-img img`);
css = css.replace(/align-items: start;\s*\n}\s*\n\.faq-img img/g, `align-items: flex-start;\n}\n.faq-img {\n  position: sticky;\n  top: 120px;\n}\n.faq-img img`);
css = css.replace(/\.choose-grid { grid-template-columns: 1fr; }/g, `.choose-grid { grid-template-columns: 1fr; }\n  .choose-img { position: relative; top: auto; }`);
fs.writeFileSync(cssPath, css, 'utf8');

// 2. Add banner-img-box to index, city, and state
const filesToUpdate = [
  'C:/New 25% Sites/LocalElectricianEmergency/src/index.njk',
  'C:/New 25% Sites/LocalElectricianEmergency/src/cities/city-page.njk',
  'C:/New 25% Sites/LocalElectricianEmergency/src/states/state-page.njk'
];

const targetPattern = '      </div>\n    </div>\n  </div>\n</div>';
const replacement = `      </div>
      <div class="banner-img-box">
        <img src="/assets/images/global-hero.png" alt="Professional electrician at work">
      </div>
    </div>
  </div>
</div>`;

for (const file of filesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  // Normalize line endings for replacement
  content = content.replace(/\r\n/g, '\n');
  if (content.includes(targetPattern)) {
    // Replace only the FIRST occurrence (which is the rs-banner)
    content = content.replace(targetPattern, replacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

// 3. Update services-single.njk to use global-hero.png
const svcPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/services/services-single.njk';
let svcContent = fs.readFileSync(svcPath, 'utf8');
svcContent = svcContent.replace(/<img src="\/assets\/images\/\{\{ service\.image \}\}"/g, '<img src="/assets/images/global-hero.png"');
fs.writeFileSync(svcPath, svcContent, 'utf8');
console.log(`Updated ${svcPath}`);

console.log("All reverts and fixes applied successfully.");
