import { exec, execSync } from "child_process";
import fs from "fs";
import path from "path";
import statesData from "../data/states.js";
import { promisify } from "util";

const execAsync = promisify(exec);
// Set concurrency to 4 to maximize Netlify's 4-core runners without hitting memory limits
const CONCURRENCY = 4;

console.log("🚀 Starting Chunked Production Build (PARALLEL MODE)...");

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

console.log(`\n====================================`);
console.log(`🚀 STARTING PARALLEL BUILDS (Concurrency: ${CONCURRENCY})`);
console.log(`====================================\n`);

// Function to build a single state asynchronously
async function buildState(stateCode) {
    console.log(`⏳ Starting: ${stateCode.toUpperCase()}...`);
    try {
        // We use slightly lower memory (4096MB) per child process to avoid OOM crashes 
        // since we are running 4 processes simultaneously.
        const { stdout, stderr } = await execAsync(`node --max-old-space-size=4096 node_modules/@11ty/eleventy/cmd.cjs`, { 
            env: { ...process.env, BUILD_TYPE: "state", BUILD_STATE: stateCode }
        });
        
        // Match the 11ty output summary to print a clean line instead of dumping all logs
        const summaryMatch = stdout.match(/\[11ty\] Wrote \d+ files.*/);
        const summary = summaryMatch ? summaryMatch[0] : `[11ty] Completed ${stateCode.toUpperCase()}`;
        console.log(`✅ Finished: ${stateCode.toUpperCase()} - ${summary}`);
    } catch (error) {
        console.error(`❌ Build failed for ${stateCode.toUpperCase()}.`);
        console.error(error.stderr || error.message);
        throw error;
    }
}

async function runParallelBuilds(tasks, concurrency) {
    let index = 0;
    
    // Create a worker that processes tasks until the queue is empty
    async function worker() {
        while (index < tasks.length) {
            const taskIndex = index++;
            const state = tasks[taskIndex];
            await buildState(state);
        }
    }
    
    // Spawn exactly 'concurrency' number of workers
    const workers = [];
    for (let i = 0; i < concurrency; i++) {
        workers.push(worker());
    }
    
    await Promise.all(workers);
}

// Run the parallel builds and time it
const startTime = Date.now();
runParallelBuilds(states, CONCURRENCY)
    .then(() => {
        const timeTaken = ((Date.now() - startTime) / 1000 / 60).toFixed(2);
        console.log(`\n🎉 ALL STATES FINISHED SUCCESSFULLY IN ${timeTaken} MINUTES!`);
    })
    .catch((err) => {
        console.error("\n💥 ERROR DURING PARALLEL BUILD. Exiting.");
        process.exit(1);
    });
