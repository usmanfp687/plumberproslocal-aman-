const fs = require('fs');

// 1. Fix src/_includes/layout.njk
let layoutPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/_includes/layout.njk';
let layoutContent = fs.readFileSync(layoutPath, 'utf8');
layoutContent = layoutContent.replace('/services/drain-cleaning/', '/services/wiring-rewiring/');
layoutContent = layoutContent.replace('/services/water-heater-repair/', '/services/electrical-panel-upgrade/');
layoutContent = layoutContent.replace('/services/pipe-repair-replacement/', '/services/outlet-switch-installation/');
layoutContent = layoutContent.replace('/services/leak-detection-repair/', '/services/circuit-breaker-repair/');
fs.writeFileSync(layoutPath, layoutContent, 'utf8');

// Helper to replace mapping
function fixMappings(content) {
  content = content.replace(/'drain-cleaning': 'ph-lightbulb',/g, "'wiring-rewiring': 'ph-lightbulb',");
  content = content.replace(/'pipe-repair-replacement': 'ph-circuit-board',/g, "'electrical-panel-upgrade': 'ph-circuit-board',");
  content = content.replace(/'sewer-line-repair': 'ph-plug',/g, "'outlet-switch-installation': 'ph-plug',");
  content = content.replace(/'hydro-jetting': 'ph-wind',/g, "'circuit-breaker-repair': 'ph-wind',");
  
  // also fix the inline html link in city/state templates
  content = content.replace(/"\/services\/drain-cleaning\/"/g, '"/services/wiring-rewiring/"');
  content = content.replace(/"\/services\/water-heater-repair\/"/g, '"/services/electrical-panel-upgrade/"');
  content = content.replace(/"\/services\/pipe-repair-replacement\/"/g, '"/services/outlet-switch-installation/"');
  return content;
}

// 2. Fix city-page.njk
let cityPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/cities/city-page.njk';
let cityContent = fs.readFileSync(cityPath, 'utf8');
cityContent = fixMappings(cityContent);
// Fix FAQ image and alt text
cityContent = cityContent.replace(
  /\/assets\/images\/pipe-leak-repair-electrical\.png/g,
  '/assets/images/emergency-commercial-electrician.png'
);
cityContent = cityContent.replace(
  /pipe, leak, and repair/g,
  'electrical panel and wiring'
);
fs.writeFileSync(cityPath, cityContent, 'utf8');

// 3. Fix state-page.njk
let statePath = 'C:/New 25% Sites/LocalElectricianEmergency/src/states/state-page.njk';
let stateContent = fs.readFileSync(statePath, 'utf8');
stateContent = fixMappings(stateContent);
stateContent = stateContent.replace(
  /\/assets\/images\/pipe-leak-repair-electrical\.png/g,
  '/assets/images/emergency-commercial-electrician.png'
);
stateContent = stateContent.replace(
  /pipe, leak, and repair/g,
  'electrical panel and wiring'
);
fs.writeFileSync(statePath, stateContent, 'utf8');

// 4. Fix index.njk
let indexPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/index.njk';
let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent = fixMappings(indexContent);
fs.writeFileSync(indexPath, indexContent, 'utf8');

// 5. Fix services/index.njk
let servicesPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/services/index.njk';
let servicesContent = fs.readFileSync(servicesPath, 'utf8');
servicesContent = fixMappings(servicesContent);
fs.writeFileSync(servicesPath, servicesContent, 'utf8');

// 6. Fix faqsPool.js
let faqPath = 'C:/New 25% Sites/LocalElectricianEmergency/data/faqsPool.js';
let faqContent = fs.readFileSync(faqPath, 'utf8');
faqContent = faqContent.replace(
  /metal sink/g,
  'metal appliance'
);
faqContent = faqContent.replace(
  /your plumbing/g,
  'the appliance frame'
);
faqContent = faqContent.replace(
  /the sink/g,
  'the appliance'
);
fs.writeFileSync(faqPath, faqContent, 'utf8');

console.log('Cleanup complete.');
