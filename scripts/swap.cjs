const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('C:/New 25% Sites/LocalElectricianEmergency/src/cities/city-page.njk');
let content = fs.readFileSync(targetFile, 'utf8');

const whoWeAreStart = content.indexOf('{# ── Who We Are ────────────────────────────────────────────────────────── #}');
const whyChooseStart = content.indexOf('{# ── Why Choose Us ─────────────────────────────────────────────────────── #}');
const googleMapStart = content.indexOf('{# ── Google Map ────────────────────────────────────────────────────────── #}');

if (whoWeAreStart === -1 || whyChooseStart === -1 || googleMapStart === -1) {
  console.error('Could not find markers');
  process.exit(1);
}

const whoWeAreBlock = content.substring(whoWeAreStart, whyChooseStart);
const whyChooseBlock = content.substring(whyChooseStart, googleMapStart);

// Process whoWeAreBlock
// Replace contentVariation logic with {{ whoWeAreContent | safe }}
const whoWeAreRegex = /\{% if contentVariation == 0 %\}.*?\{% endif %\}/s;
let newWhoWeAreBlock = whoWeAreBlock.replace(whoWeAreRegex, '{{ whoWeAreContent | safe }}');
// Add margin to the next paragraph
newWhoWeAreBlock = newWhoWeAreBlock.replace('<p>\n            We serve', '<p style="margin-top:20px;">\n            We serve');

// Process whyChooseBlock
// Replace {{ whyChooseContent.p1 }} and {{ whyChooseContent.p2 }} with {{ whyChooseContent | safe }}
let newWhyChooseBlock = whyChooseBlock.replace('<p>{{ whyChooseContent.p1 }}</p>\n          <p>{{ whyChooseContent.p2 }}</p>', '{{ whyChooseContent | safe }}');
// Replace gas leak text
newWhyChooseBlock = newWhyChooseBlock.replace('For gas leak emergencies', 'For downed power line or severe electrical fire emergencies');
newWhyChooseBlock = newWhyChooseBlock.replace('before calling a electrician', 'before calling an electrician');

const preBlocks = content.substring(0, whoWeAreStart);
const postBlocks = content.substring(googleMapStart);

const newContent = preBlocks + newWhyChooseBlock + '\n' + newWhoWeAreBlock + '\n' + postBlocks;

fs.writeFileSync(targetFile, newContent, 'utf8');
console.log('Swapped successfully');
