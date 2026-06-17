// scripts/generate-sitemap.mjs
// Generates /public/sitemap.xml and /public/robots.txt after build
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Import data ──────────────────────────────────────────────────────
const { default: states } = await import('../data/states.js');
const { default: services } = await import('../data/services.js');

const DOMAIN = 'https://www.plumbinglocalpros.com';

const urls = [];

// Static pages
const staticPages = ['', 'about', 'contact', 'services', 'privacy-policy', 'terms'];
staticPages.forEach(page => {
  urls.push({ loc: page ? `${DOMAIN}/${page}/` : `${DOMAIN}/`, priority: page ? '0.7' : '1.0', changefreq: 'monthly' });
});

// Service pages
services.forEach(svc => {
  urls.push({ loc: `${DOMAIN}/services/${svc.slug}/`, priority: '0.8', changefreq: 'monthly' });
});

// State pages
states.forEach(st => {
  urls.push({ loc: `${DOMAIN}/${st.slug}/`, priority: '0.9', changefreq: 'weekly' });
  // Include ALL cities in the sitemap per user request
  st.cities.forEach(city => {
    urls.push({ loc: `${DOMAIN}/${st.slug}/${city.slug}/`, priority: '0.6', changefreq: 'monthly' });
  });
});

// ── Write sitemap.xml ────────────────────────────────────────────────
const sitemapPath = resolve(ROOT, 'public', 'sitemap.xml');
const sitemapStream = createWriteStream(sitemapPath);

sitemapStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
sitemapStream.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

urls.forEach(({ loc, priority, changefreq }) => {
  sitemapStream.write(`  <url>\n`);
  sitemapStream.write(`    <loc>${loc}</loc>\n`);
  sitemapStream.write(`    <changefreq>${changefreq}</changefreq>\n`);
  sitemapStream.write(`    <priority>${priority}</priority>\n`);
  sitemapStream.write(`  </url>\n`);
});

sitemapStream.write('</urlset>\n');
sitemapStream.end();

console.log(`✓ Sitemap generated: ${urls.length} URLs → ${sitemapPath}`);

// ── Write robots.txt ─────────────────────────────────────────────────
import { writeFileSync } from 'fs';

const robotsPath = resolve(ROOT, 'public', 'robots.txt');
writeFileSync(robotsPath, `User-agent: *\nAllow: /\nSitemap: ${DOMAIN}/sitemap.xml\n`);
console.log('✓ robots.txt generated');
