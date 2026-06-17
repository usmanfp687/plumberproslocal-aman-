import statesData from './states.js';

const allCities = [];
const seen = new Set();

for (const state of statesData) {
  for (const city of state.cities) {
    const key = `${state.slug}/${city.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    
    // We only need basic state info to avoid duplicating massive arrays
    const stateMeta = {
      name: state.name,
      slug: state.slug,
      abbr: state.abbr
    };
    
    allCities.push({
      city: city,
      state: stateMeta
    });
  }
}

export default allCities;
