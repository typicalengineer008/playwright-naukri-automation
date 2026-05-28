const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const{HomePage}=require('../pages/homepage')

require('dotenv').config();

test('Naukri Jobsearch Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homepage=new HomePage(page);

    await loginPage.goto();

    await loginPage.login(
        process.env.EMAIL,
        process.env.PASSWORD
    );

    //await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/naukri/);
    

    await homepage.searchJob("SDET","Begaluru")
    //await page.pause();
});