// Visual verification script — captures every primary route at mobile + desktop
// widths against the running dev server. Saves PNGs to /screenshots/.
//
// Run with: node scripts/screenshot.mjs
// Requires:  dev server at http://localhost:3000

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const OUT = path.resolve('screenshots');

const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844 }, // iPhone 14 Pro
  { name: 'tablet', width: 768, height: 1024 }, // iPad
  { name: 'desktop', width: 1440, height: 900 }, // 14" laptop
  { name: 'wide', width: 1920, height: 1080 }, // common external monitor
];

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/about/', name: 'about' },
  { path: '/services/', name: 'services' },
  { path: '/sectors/', name: 'sectors' },
  { path: '/contact/', name: 'contact' },
];

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();

  console.log(`Capturing ${ROUTES.length} routes × ${VIEWPORTS.length} viewports = ${ROUTES.length * VIEWPORTS.length} shots`);

  for (const viewport of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      // Reduced motion off so we see the post-animation state quickly
      reducedMotion: 'reduce',
    });
    const page = await ctx.newPage();

    for (const route of ROUTES) {
      const url = `${BASE}${route.path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 });
        await page.evaluate(() => document.fonts.ready);

        // Trigger every scroll-based IntersectionObserver / Reveal by
        // smooth-scrolling through the document, then snap back to top.
        await page.evaluate(async () => {
          const step = 200;
          for (let y = 0; y < document.body.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 30));
          }
          window.scrollTo(0, 0);
          await new Promise((r) => setTimeout(r, 300));
        });
        await page.waitForTimeout(400);

        const file = path.join(OUT, `${route.name}-${viewport.name}.png`);
        await page.screenshot({ path: file, fullPage: true });
        console.log(`  ✓ ${file}`);
      } catch (err) {
        console.error(`  ✗ ${route.path} @ ${viewport.name}:`, err.message);
      }
    }

    await ctx.close();
  }

  // Bonus: mobile menu open state
  {
    const ctx = await browser.newContext({
      viewport: { width: 390, height: 844 },
      reducedMotion: 'reduce',
    });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.click('[aria-label="Open menu"]');
    await page.waitForTimeout(400);
    const file = path.join(OUT, 'menu-open-mobile.png');
    await page.screenshot({ path: file, fullPage: false });
    console.log(`  ✓ ${file}`);
    await ctx.close();
  }

  await browser.close();
  console.log(`\nDone — screenshots in ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
