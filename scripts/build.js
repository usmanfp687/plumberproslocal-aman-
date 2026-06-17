import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import statesData from "../data/states.js";

console.log("🚀 Starting Chunked Production Build...");

// Clean previous build directory to ensure a fresh build
const siteDir = path.join(process.cwd(), "_site");
// if (fs.existsSync(siteDir)) {
//     console.log("🗑️  Cleaning old build files...");
//     fs.rmSync(siteDir, { recursive: true, force: true });
// }

// Read states from the data file
console.log("📊 Extracting unique states from data...");

const states = statesData.map(s => s.slug).sort();
console.log(`✨ Found ${states.length} states to build: ${states.join(", ")}`);

console.log(`\n====================================`);
console.log(`🏗️  BUILDING BASE PAGES`);
console.log(`====================================`);
try {
    // We build the base pages (home, about, contact, etc.) once first
    execSync(`node --max-old-space-size=8192 node_modules/@11ty/eleventy/cmd.cjs`, { 
        env: { ...process.env, BUILD_TYPE: "base" },
        stdio: "inherit" 
    });
} catch (error) {
    console.error(`❌ Build failed for Base Pages. Exiting.`);
    process.exit(1);
}

for (const stateCode of states) {
    console.log(`\n====================================`);
    console.log(`🏗️  BUILDING STATE: ${stateCode.toUpperCase()}`);
    console.log(`====================================`);
    
    try {
        // Run Eleventy natively, passing the state code to the environment
        execSync(`node --max-old-space-size=8192 node_modules/@11ty/eleventy/cmd.cjs`, { 
            env: { ...process.env, BUILD_TYPE: "state", BUILD_STATE: stateCode },
            stdio: "inherit" // Prints progress directly to console
        });
    } catch (error) {
        console.error(`❌ Build failed for ${stateCode}. Exiting.`);
        process.exit(1);
    }
}

console.log("\n✅ ALL STATES FINISHED SUCCESSFULLY!");
