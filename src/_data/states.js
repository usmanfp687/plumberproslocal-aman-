import statesData from '../../data/states.js';

let exportedStates = statesData;

if (process.env.BUILD_STATE && process.env.BUILD_STATE !== 'none') {
  exportedStates = statesData.filter(s => s.slug === process.env.BUILD_STATE);
}

export default exportedStates;
