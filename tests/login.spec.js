const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');

require('dotenv').config();

test('Naukri Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        process.env.EMAIL,
        process.env.PASSWORD
    );

    await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/naukri/);
});