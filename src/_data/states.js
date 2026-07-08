import statesData from '../../data/states.js';

let exportedStates = statesData;

if (process.env.BUILD_STATE && process.env.BUILD_STATE !== 'none') {
  exportedStates = statesData.filter(s => s.slug === process.env.BUILD_STATE);
} else if (process.env.BUILD_TYPE === 'base') {
  exportedStates = statesData;
} else {
  exportedStates = statesData.slice(0, 1); // Local dev limit
}

export default exportedStates;
