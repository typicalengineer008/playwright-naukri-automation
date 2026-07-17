const { writeJobsToCSV } = require('../utils/csvWriter');
require('dotenv').config();
import { test, expect } from '../fixtures/baseFixture';
import { config } from '../config/env';
import { testData } from '../test-data/JobSearchData';
//import HomePage from '../pages/HomePage';
test('resume document upload', async ({ loginPage, homePage,page,profilePage }) => {
await loginPage.goto(config.baseURL);

await loginPage.login(
    config.email,
    config.password
);
    
   
    await expect(page).toHaveURL(/naukri/);
    await homePage.viewProfile();
    await profilePage.clickonResumeUpload();
    
    await profilePage.uploadDocument('test-data/Bishnu_Rayaguru_SDET_QA_Automation.pdf')
    await expect(page.getByText("Bishnu_Rayaguru_SDET_QA_Automation.pdf")).toBeVisible();
    
})
