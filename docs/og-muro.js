// Genera assets/img/og/willnet-og.jpg (1200×630) fotografiando el muro del hero quieto.
// Requiere el servidor local (npm run serve) y puppeteer-core con Google Chrome instalado:
//   npm i --no-save puppeteer-core && node docs/og-muro.js assets/img/og/willnet-og.jpg
// Imagen OG (1200×630): foto del muro quieto, sin el header ni los botones flotantes
const puppeteer = require("puppeteer-core");
(async () => {
  const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
  const p = await b.newPage();
  await p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await p.setViewport({ width: 1600, height: 1000 });
  await p.goto("http://localhost:5500/", { waitUntil: "networkidle0" });
  await p.evaluate(async () => {
    document.querySelectorAll("header, .back-to-top, a[href*='wa.me']").forEach((e) => (e.style.display = "none"));
    const w = document.getElementById("dashboard");
    w.style.borderRadius = "0"; w.style.width = "1200px"; w.style.maxWidth = "none"; w.style.boxShadow = "none";
    window.scrollTo({ top: w.getBoundingClientRect().top + scrollY - 100, behavior: "instant" });
    await Promise.all([...w.querySelectorAll("img")].map((i) => i.complete ? 0 : new Promise((r) => (i.onload = i.onerror = r))));
  });
  await new Promise((r) => setTimeout(r, 800));
  const r = await p.evaluate(() => { const x = document.getElementById("dashboard").getBoundingClientRect(); return { x: x.left, y: x.top + scrollY, w: x.width, h: x.height }; });
  console.log(r);
  await p.screenshot({ path: process.argv[2], type: "jpeg", quality: 85, clip: { x: r.x, y: r.y + (r.h - 630) / 2, width: 1200, height: 630 } });
  await b.close();
})();
