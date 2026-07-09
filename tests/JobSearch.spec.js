
const { writeJobsToCSV } = require('../utils/csvWriter');
require('dotenv').config();
import { test, expect } from '../fixtures/baseFixture';
import { config } from '../config/env';
import { testData } from '../test-data/JobSearchData';
test('Search Job', async ({ loginPage, homePage, jobPage, page }) => {
await loginPage.goto(config.baseURL);

await loginPage.login(
    config.email,
    config.password
);
    
    await expect(page).toHaveURL(/naukri/);
    //search for job criteria
    await homePage.searchJob(testData.jobRole,testData.location);
   
   // Fetch data
    const jobs =await jobPage.fetchJobs();
expect(jobs.length).toBeGreaterThan(0);

await writeJobsToCSV(jobs);

console.table(jobs.slice(0, 5));

console.log(`Successfully wrote ${jobs.length} jobs to CSV`);
 
});

