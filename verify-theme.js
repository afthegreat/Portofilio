const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    // 1. Check initial theme
    const initialTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    console.log('Initial Theme:', initialTheme);

    const initialBg = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
    });
    console.log('Initial Body BG:', initialBg);

    // 2. Click theme toggle
    console.log('Clicking theme toggle...');
    await page.click('.theme-toggle');

    // Wait for transition
    await new Promise(r => setTimeout(r, 500));

    // 3. Verify changes
    const newTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    console.log('New Theme:', newTheme);

    const newBg = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
    });
    console.log('New Body BG:', newBg);

    await browser.close();
})();
