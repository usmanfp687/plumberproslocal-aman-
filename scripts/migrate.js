import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Global replacements (case sensitive variations)
  content = content.replace(/Plumbing Local Pros/g, 'Local Electrician Emergency');
  content = content.replace(/plumbinglocalpros/g, 'localelectricianemergency');
  content = content.replace(/plumbing local pros/ig, 'local electrician emergency');
  content = content.replace(/Plumber/g, 'Electrician');
  content = content.replace(/plumber/g, 'electrician');
  content = content.replace(/Plumbers/g, 'Electricians');
  content = content.replace(/plumbers/g, 'electricians');
  content = content.replace(/Plumbing/g, 'Electrical');
  content = content.replace(/plumbing/g, 'electrical');

  // Some specific replacements for the old template text
  content = content.replace(/water heater/ig, 'panel');
  content = content.replace(/drain cleaning/ig, 'wiring upgrade');
  content = content.replace(/pipe repair/ig, 'outlet repair');
  content = content.replace(/toilet/ig, 'switch');
  content = content.replace(/faucet/ig, 'fixture');
  content = content.replace(/sewer line/ig, 'circuit breaker');
  content = content.replace(/leak detection/ig, 'fault detection');
  content = content.replace(/burst pipe/ig, 'power outage');
  
  // Icon replacements
  content = content.replace(/ph-wrench/g, 'ph-lightning');
  content = content.replace(/ph-pipe-wrench/g, 'ph-plug');
  content = content.replace(/ph-pipe/g, 'ph-circuit-board');
  content = content.replace(/ph-funnel/g, 'ph-lightbulb');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else {
      if (['.js', '.njk', '.css', '.html'].includes(path.extname(fullPath))) {
        replaceInFile(fullPath);
      }
    }
  }
}

processDirectory(path.join(process.cwd(), 'src'));
processDirectory(path.join(process.cwd(), 'data'));
console.log('Migration complete.');
