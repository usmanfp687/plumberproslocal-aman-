export default function (eleventyConfig) {
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
        collapseWhitespace: true
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
