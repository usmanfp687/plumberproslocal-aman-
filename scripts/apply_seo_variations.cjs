const fs = require('fs');

const cityDataPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/cities/city-page.11tydata.js';
let cityData = fs.readFileSync(cityDataPath, 'utf8');

// We'll replace the existing metaTitle if it exists, or insert it.
// The easiest way is to use a regex to replace everything inside eleventyComputed down to the next property, 
// but it's safer to just inject at the top of eleventyComputed: {

const newPropsCode = `
    metaTitle: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(\`\${data.item.city.slug}-\${data.item.state.slug}\`);
      const variation = Math.floor(rand() * 3);
      
      const titles = [
        \`Expert Electrician in \${city}, \${state} | 24/7 Fast & Local Repair\`,
        \`Top Rated Electrician in \${city}, \${state} | Reliable Same Day\`,
        \`Best Local Electrician \${city}, \${state} | Emergency Repair Service\`
      ];
      return titles[variation];
    },
    metaDesc: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(\`\${data.item.city.slug}-\${data.item.state.slug}\`);
      const variation = Math.floor(rand() * 3);
      
      const descs = [
        \`Searching for a trusted electrician in \${city}, \${state}? We offer 24/7 emergency electrical repairs, panel upgrades, and home wiring. Call our team today!\`,
        \`Need an affordable electrician in \${city}, \${state}? Our highly skilled experts deliver guaranteed same-day electrical services, circuit troubleshooting & repairs.\`,
        \`Hire the best local electrician in \${city}, \${state}. We specialize in reliable home wiring, rapid emergency power restoration, and circuit breaker installations.\`
      ];
      return descs[variation];
    },
    h1Title: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(\`\${data.item.city.slug}-\${data.item.state.slug}\`);
      const variation = Math.floor(rand() * 3);
      
      const h1s = [
        \`Expert Electrician in \${city}, \${state}\`,
        \`Top Rated Electricians in \${city}, \${state}\`,
        \`Local Emergency Electrician in \${city}, \${state}\`
      ];
      return h1s[variation];
    },`;

// Clean up old metaTitle if I injected it before
cityData = cityData.replace(/metaTitle: \(data\) => \{[\s\S]*?\},/, '');
// Inject the new props
cityData = cityData.replace('eleventyComputed: {', 'eleventyComputed: {' + newPropsCode);

fs.writeFileSync(cityDataPath, cityData, 'utf8');
console.log('Updated city-page.11tydata.js');

const stateDataPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/states/state-page.11tydata.js';
let stateData = fs.readFileSync(stateDataPath, 'utf8');

const stateNewPropsCode = `
    metaTitle: (data) => {
      const stateName = data.state.name;
      const rand = getSeededRandom(data.state.slug);
      const variation = Math.floor(rand() * 3);
      
      const titles = [
        \`Expert Electrician in \${stateName} | 24/7 Fast & Local Repair\`,
        \`Top Rated Electrician in \${stateName} | Reliable Same Day\`,
        \`Best Local Electrician in \${stateName} | Emergency Repair Service\`
      ];
      return titles[variation];
    },
    metaDesc: (data) => {
      const stateName = data.state.name;
      const rand = getSeededRandom(data.state.slug);
      const variation = Math.floor(rand() * 3);
      
      const descs = [
        \`Searching for a trusted electrician in \${stateName}? We offer 24/7 emergency electrical repairs, panel upgrades, and home wiring. Call our team today!\`,
        \`Need an affordable electrician in \${stateName}? Our highly skilled experts deliver guaranteed same-day electrical services, circuit troubleshooting & repairs.\`,
        \`Hire the best local electrician in \${stateName}. We specialize in reliable home wiring, rapid emergency power restoration, and circuit breaker installations.\`
      ];
      return descs[variation];
    },
    h1Title: (data) => {
      const stateName = data.state.name;
      const rand = getSeededRandom(data.state.slug);
      const variation = Math.floor(rand() * 3);
      
      const h1s = [
        \`Expert Electrician in \${stateName}\`,
        \`Top Rated Electricians in \${stateName}\`,
        \`Local Emergency Electrician in \${stateName}\`
      ];
      return h1s[variation];
    },`;

stateData = stateData.replace(/metaTitle: \(data\) => \{[\s\S]*?\},/, '');
stateData = stateData.replace('eleventyComputed: {', 'eleventyComputed: {' + stateNewPropsCode);

fs.writeFileSync(stateDataPath, stateData, 'utf8');
console.log('Updated state-page.11tydata.js');
