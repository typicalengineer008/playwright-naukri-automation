
const { writeJobsToCSV } = require('../utils/csvWriter');
require('dotenv').config();
import { test, expect } from '../fixtures/baseFixture';

test('Search Job', async ({ loginPage, homePage, jobPage, page }) => {

    await loginPage.goto();
    //login into naukri
    await loginPage.login(process.env.EMAIL,
        process.env.PASSWORD);
        
    await expect(page).toHaveURL(/naukri/);
    //search for job criteria
    await homePage.searchJob("SDET","Bengaluru");
   
   // Fetch data
    const jobs =await jobPage.fetchJobs();
expect(jobs.length).toBeGreaterThan(0);

await writeJobsToCSV(jobs);

console.table(jobs.slice(0, 5));

console.log(`Successfully wrote ${jobs.length} jobs to CSV`);

});

