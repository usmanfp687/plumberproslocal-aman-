const fs = require('fs');

const cityNjkPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/cities/city-page.njk';
let cityNjk = fs.readFileSync(cityNjkPath, 'utf8');

// Replace description in frontmatter
cityNjk = cityNjk.replace(
  /description: ".*?"/,
  'description: "{{ metaDesc }}"'
);

// Replace H1
cityNjk = cityNjk.replace(
  /<h1 class="title">[\s\S]*?<\/h1>/,
  '<h1 class="title">{{ h1Title }}</h1>'
);

fs.writeFileSync(cityNjkPath, cityNjk, 'utf8');
console.log('Updated city-page.njk');

const stateNjkPath = 'C:/New 25% Sites/LocalElectricianEmergency/src/states/state-page.njk';
let stateNjk = fs.readFileSync(stateNjkPath, 'utf8');

// Replace description in frontmatter
stateNjk = stateNjk.replace(
  /description: ".*?"/,
  'description: "{{ metaDesc }}"'
);

// Replace H1
stateNjk = stateNjk.replace(
  /<h1 class="title">[\s\S]*?<\/h1>/,
  '<h1 class="title">{{ h1Title }}</h1>'
);

fs.writeFileSync(stateNjkPath, stateNjk, 'utf8');
console.log('Updated state-page.njk');
