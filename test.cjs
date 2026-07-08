const { pathToFileURL } = require('url');

async function test() {
  const p = "C:\\New 25% Sites\\LocalElectricianEmergency\\eleventy.config.cjs";
  const url = pathToFileURL(p).toString();
  console.log("URL:", url);
  try {
    await import(url);
    console.log("Success");
  } catch (e) {
    console.error("Import failed:", e);
  }
}
test();
