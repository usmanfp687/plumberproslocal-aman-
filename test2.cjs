const { fileURLToPath } = require('url');
try {
  console.log(fileURLToPath('file:///C:/New%2025%25%20Sites/LocalElectricianEmergency/eleventy.config.cjs'));
} catch(e) {
  console.log("Error 1:", e.message);
}

try {
  console.log(fileURLToPath('file:///C:/New%252025%25%25%2520Sites/LocalElectricianEmergency/eleventy.config.cjs'));
} catch(e) {
  console.log("Error 2:", e.message);
}
