const fs = require('fs');
const cssPath = 'C:/New 25% Sites/LocalElectricianEmergency/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

let lines = css.split('\n');

// The extra brace is between:
//   .location-meta { font-size: 14px !important; }
// }
//   .banner-row { grid-template-columns: 1fr; }
// We can just find this sequence and remove the }

for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '}' && lines[i-1].includes('.location-meta') && lines[i+1].includes('.banner-row')) {
    lines.splice(i, 1);
    break;
  }
}

css = lines.join('\n');
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Removed extra brace.');
