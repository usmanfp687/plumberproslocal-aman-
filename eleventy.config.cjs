module.exports = function (eleventyConfig) {
  // --- CLOUDFLARE OPTIMIZATION: Quiet Mode & Progress Tracker ---
  eleventyConfig.setQuietMode(true);

  let pageCounter = 0;
  eleventyConfig.on("eleventy.before", () => {
      pageCounter = 0;
  });

  eleventyConfig.addTransform("progressTracker", function(content) {
      pageCounter++;
      // Print a heartbeat to the terminal every 1,000 pages to prevent Cloudflare timeout
      if (pageCounter % 1000 === 0) {
          console.log(`[Heartbeat] Rendered ${pageCounter.toLocaleString()} pages...`);
      }
      return content;
  });

  const fs = require("fs");
  eleventyConfig.addShortcode("inlinecss", function() {
    return fs.readFileSync("styles/globals.css", "utf8");
  });
  // --------------------------------------------------------------
  // ── Passthrough copies ──────────────────────────────────────────────────
  if (process.env.BUILD_TYPE !== 'state') {
    // Copy contents of public/ folder to root of _site/
    eleventyConfig.addPassthroughCopy({ "public": "/" });
    // Copy existing CSS from styles/ into _site/css/
    eleventyConfig.addPassthroughCopy({ "styles/globals.css": "css/globals.css" });
  }

  // ── Nunjucks options ────────────────────────────────────────────────────
  eleventyConfig.setNunjucksEnvironmentOptions({
    trimBlocks: true,
    lstripBlocks: true,
  });

  // ── Watch targets (for --serve / dev mode) ──────────────────────────────
  eleventyConfig.addWatchTarget("styles/");
  eleventyConfig.addWatchTarget("data/");
  eleventyConfig.addWatchTarget("public/");

  // ── Conditional Ignores for Segmented Build ─────────────────────────────
  if (process.env.BUILD_TYPE === 'base') {
    eleventyConfig.ignores.add("src/states/**/*");
    eleventyConfig.ignores.add("src/cities/**/*");
  } else if (process.env.BUILD_TYPE === 'state') {
    eleventyConfig.ignores.add("src/*.njk");
    eleventyConfig.ignores.add("src/services/**/*");
  }

  // ── HTML Minification ───────────────────────────────────────────────────
  eleventyConfig.addTransform("htmlmin", async function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const { minify } = await import("html-minifier-terser");
      let minified = await minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
      return minified;
    }
    return content;
  });

  // ── Directory config ────────────────────────────────────────────────────
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "11ty.js"],
    htmlTemplateEngine: "njk",
  };
}
