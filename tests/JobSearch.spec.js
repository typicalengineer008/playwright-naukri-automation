const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const{HomePage}=require('../pages/homepage');
const{JobPage}=require('../pages/jobpage');
const { writeJobsToCSV } = require('../utils/csvWriter');

require('dotenv').config();

test('Naukri Jobsearch Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homepage=new HomePage(page);
    const jobpage=new JobPage(page);
    //const csv=new writeJobsToCSV()

    await loginPage.goto();

    await loginPage.login(
        process.env.EMAIL,
        process.env.PASSWORD
    );

    //await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/naukri/);
    

    await homepage.searchJob("SDET","Begaluru")
    //await page.pause();
    await expect(page).toHaveURL(/job/);
const jobsTitle= await jobpage.getJobTitles();
    const companyName=await jobpage.getCompanyname();
    const experience=await jobpage.getExperience();
    const location=await jobpage.getLocation();
    const count = Math.min(
    jobsTitle.length,
    companyName.length,
    experience.length,
    location.length
);

  const jobs = [];
   for (let i = 0; i < count; i++) {

    jobs.push({
        title: jobsTitle[i],
        company: companyName[i],
        experience: experience[i],
        location: location[i]
    });
}

//console.log(jobs);
await writeJobsToCSV(jobs);

}

);