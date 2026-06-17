import fs from 'fs';
import https from 'https';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

https.get('https://unpkg.com/react-usa-map@1.5.0/src/data/usa-map-dimensions.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let js = data.replace('export default data;', 'module.exports = data;');
    fs.writeFileSync('./scripts/temp.cjs', js);
    const mapData = require('./temp.cjs');
    let paths = '';
    for (let state in mapData) {
      paths += `<path class="${state} state" data-name="${state}" fill="#E2E8F0" stroke="#FFFFFF" stroke-width="1.5" d="${mapData[state].dimensions}" />\n`;
    }
    const svg = `<svg class="interactive-usa-map-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 959 593">
<style>
.state { cursor: pointer; transition: fill 0.2s ease, transform 0.2s ease; }
.state:hover { fill: var(--primary); }
</style>
<g class="outlines">
${paths}
<g class="DC state" data-name="DC">
  <path class="DC1" fill="#E2E8F0" d="M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z" />
  <circle class="DC2" data-name="DC" fill="#E2E8F0" stroke="#FFFFFF" stroke-width="1.5" cx="801.3" cy="251.8" r="5" opacity="1" />
</g>
</g>
</svg>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const states = document.querySelectorAll('.interactive-usa-map-svg .state');
  
  // We can inject the state slugs mapped from data
  // Instead of injecting a giant mapping, we just convert the abbreviation to the slug
  // The abbreviations are like "AL", "TX", "CA"
  
  // Mapping provided by Eleventy data or we can fetch it. Let's just do a generic fetch for the state array.
  // Actually, we can fetch statesData locally since this script will execute it.
  
  states.forEach(stateNode => {
    stateNode.addEventListener('click', function(e) {
      const abbr = this.getAttribute('data-name');
      if (abbr) {
        // Find the slug from our global states.js
        window.location.href = '/' + stateToSlug(abbr) + '/';
      }
    });
  });
  
  // Helper to convert abbr to slug
  const stateMappings = {
    "AL": "alabama", "AK": "alaska", "AZ": "arizona", "AR": "arkansas", "CA": "california", "CO": "colorado", 
    "CT": "connecticut", "DE": "delaware", "DC": "district-of-columbia", "FL": "florida", "GA": "georgia", 
    "HI": "hawaii", "ID": "idaho", "IL": "illinois", "IN": "indiana", "IA": "iowa", "KS": "kansas", "KY": "kentucky", 
    "LA": "louisiana", "ME": "maine", "MD": "maryland", "MA": "massachusetts", "MI": "michigan", "MN": "minnesota", 
    "MS": "mississippi", "MO": "missouri", "MT": "montana", "NE": "nebraska", "NV": "nevada", "NH": "new-hampshire", 
    "NJ": "new-jersey", "NM": "new-mexico", "NY": "new-york", "NC": "north-carolina", "ND": "north-dakota", 
    "OH": "ohio", "OK": "oklahoma", "OR": "oregon", "PA": "pennsylvania", "RI": "rhode-island", "SC": "south-carolina", 
    "SD": "south-dakota", "TN": "tennessee", "TX": "texas", "UT": "utah", "VT": "vermont", "VA": "virginia", 
    "WA": "washington", "WV": "west-virginia", "WI": "wisconsin", "WY": "wyoming"
  };

  function stateToSlug(abbr) {
    return stateMappings[abbr.toUpperCase()];
  }
});
</script>
`;
    fs.writeFileSync('src/_includes/usa-map.njk', svg);
    fs.unlinkSync('temp.cjs');
    console.log('SVG Map Created!');
  });
});
