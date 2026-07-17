
const { writeJobsToCSV } = require('../utils/csvWriter');
//require('dotenv').config();
import { test, expect } from '../fixtures/baseFixture';
import { config } from '../config/env';
import { testData } from '../test-data/JobSearchData';
test.describe('Profile Module',()=>{
test.beforeEach(async ({ loginPage, page }) => {

    await loginPage.goto(config.baseURL);

    await loginPage.login(
        config.email,
        config.password
    );

    await expect(page).toHaveURL(/naukri/);

});
test('Search Job', async ({  homePage, jobPage }) => {


    await homePage.searchJob(testData.jobRole,testData.location);
   
   // Fetch data
    const jobs =await jobPage.fetchJobs();
expect(jobs.length).toBeGreaterThan(0);

await writeJobsToCSV(jobs);

console.table(jobs.slice(0, 5));

console.log(`Successfully wrote ${jobs.length} jobs to CSV`);
 
});

test('Document upload', async ({  homePage, jobPage,profilePage }) => {

    await homePage.viewProfile();
    await profilePage.clickonResumeUpload();
    
    await profilePage.uploadDocument('test-data/Bishnu_Rayaguru_SDET_QA_Automation.pdf');
    await profilePage.verifyResumeUploaded("Bishnu_Rayaguru_SDET_QA_Automation.pdf");
    
})

test.afterEach(async ({ page }, testInfo) => {

    console.log(`Test Name : ${testInfo.title}`);
    console.log(`Status    : ${testInfo.status}`);

});
});

