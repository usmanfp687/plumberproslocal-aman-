const fs = require('fs');

// 1. Update city-page.11tydata.js
const cityDataPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/cities/city-page.11tydata.js';
let cityData = fs.readFileSync(cityDataPath, 'utf8');

if (!cityData.includes('metaTitle:')) {
  const metaTitleCode = `
    metaTitle: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(\`\${data.item.city.slug}-\${data.item.state.slug}\`);
      const variation = Math.floor(rand() * 3);
      
      const titles = [
        \`Electrician in \${city}, \${state} | Fast & Local\`,
        \`Best Electricians \${city}, \${state} | 24/7 Service\`,
        \`Top Rated Electrician in \${city}, \${state} | Book Now\`
      ];
      
      return titles[variation];
    },`;
  
  cityData = cityData.replace('eleventyComputed: {', 'eleventyComputed: {' + metaTitleCode);
  fs.writeFileSync(cityDataPath, cityData, 'utf8');
  console.log('Updated city-page.11tydata.js');
}

// 2. Update state-page.11tydata.js
const stateDataPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/states/state-page.11tydata.js';
let stateData = fs.readFileSync(stateDataPath, 'utf8');

// I need to check if getSeededRandom exists in state-page.11tydata.js. Let's assume we might need to add it if it doesn't.
if (!stateData.includes('function getSeededRandom')) {
    const seedFunc = `
function getSeededRandom(seedString) {
  let seed = 0;
  for (let i = 0; i < seedString.length; i++) {
    seed = (seed * 31 + seedString.charCodeAt(i)) % 2147483647;
  }
  if (seed <= 0) seed += 2147483646;
  return function() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}
`;
    stateData = stateData.replace('export default {', seedFunc + '\\nexport default {');
}

if (!stateData.includes('metaTitle:')) {
  const stateMetaTitleCode = `
    metaTitle: (data) => {
      const stateName = data.state.name;
      const rand = getSeededRandom(data.state.slug);
      const variation = Math.floor(rand() * 3);
      
      const titles = [
        \`Electrician in \${stateName} | Fast & Local\`,
        \`Best Electricians in \${stateName} | 24/7 Service\`,
        \`Top Rated Electrician in \${stateName} | Book Now\`
      ];
      
      return titles[variation];
    },`;
  
  stateData = stateData.replace('eleventyComputed: {', 'eleventyComputed: {' + stateMetaTitleCode);
  fs.writeFileSync(stateDataPath, stateData, 'utf8');
  console.log('Updated state-page.11tydata.js');
}

// 3. Update city-page.njk frontmatter
const cityNjkPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/cities/city-page.njk';
let cityNjk = fs.readFileSync(cityNjkPath, 'utf8');
cityNjk = cityNjk.replace(
  /title: "Electrician in \{\{ item\.city\.name \}\}.*?"/,
  'title: "{{ metaTitle }}"'
);
fs.writeFileSync(cityNjkPath, cityNjk, 'utf8');
console.log('Updated city-page.njk');

// 4. Update state-page.njk frontmatter
const stateNjkPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/states/state-page.njk';
let stateNjk = fs.readFileSync(stateNjkPath, 'utf8');
stateNjk = stateNjk.replace(
  /title: "Electrician in \{\{ state\.name \}\}.*?"/,
  'title: "{{ metaTitle }}"'
);
fs.writeFileSync(stateNjkPath, stateNjk, 'utf8');
console.log('Updated state-page.njk');
