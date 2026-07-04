class JobPage {
    constructor(page) {
        this.page =page;
        // this.title='//a[@class="title "]';
        // this.companyName='//a[@class=" comp-name mw-25"]';
        // this.experience='//span[@class="expwdth"]';
        // this.location='//span[@class="locWdth"]';
        this.title='a.title';
        this.companyName='a.comp-name';
        this.experience='span.expwdth';
        this.location='span.locWdth';

    }

    async getJobTitles() {
  await this.page.waitForSelector(this.title);

    const titles = await this.page
        .locator(this.title)
        .allTextContents();

    //console.log(titles);

    return titles;
}
async getCompanyname() {
await this.page.waitForSelector(this.companyName);
    const companyName = await this.page
        .locator(this.companyName)
        .allTextContents();

    //console.log(companyName);

    return companyName;


}
async getExperience() {
await this.page.waitForSelector(this.experience);
    const experiencee = await this.page
        .locator(this.experience)
        .allTextContents();

    //console.log(experiencee);

    return experiencee;

    
}
async getLocation() {
await this.page.waitForSelector(this.location);
    const location = await this.page
        .locator(this.location)
        .allTextContents();

    //console.log(location);

    return location;

    
}
async fetchJobs() {

    const titles = await this.getJobTitles();
    const companies = await this.getCompanyname();
    const experiences = await this.getExperience();
    const locations = await this.getLocation();

    const count = Math.min(
        titles.length,
        companies.length,
        experiences.length,
        locations.length
    );

    const jobs = [];

    for (let i = 0; i < count; i++) {
        jobs.push({
            title: titles[i],
            company: companies[i],
            experience: experiences[i],
            location: locations[i]
        });
    }

    return jobs;
}
async jobCreation(jobs){
    


}
}
//module.exports={JobPage};
export default JobPage;