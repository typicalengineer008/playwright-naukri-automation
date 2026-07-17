//import { testData } from '../data/testData';

class HomePage {
    constructor(page) {

        this.page = page;

        this.searchbox = this.page.getByRole('button', { name: 'Search jobs here' });

        this.searchinputDesignation =this.page.getByPlaceholder("Enter keyword / designation / companies");

      

        this.experience =this.page.getByPlaceholder("Select experience");
       this.yearOfExperience =this.page.locator('div').filter({ hasText: /^3 years$/ });
      

        this.location = this.page.getByPlaceholder("Enter location");
          

        this.searchicon =
            'button[tabindex="0"]';
        this.viewProfilelink =this.page.getByRole('link', { name: 'View profile' });
    }

    async searchJob(jobname, locationname) {

        await this.searchbox.click();

        await this.searchinputDesignation.fill(jobname);

        //await this.page.click(this.experience);
        await this.experience.click();

        await this.yearOfExperience.click();

        await this.location.fill(locationname);

        await this.page.click(this.searchicon);
    }
    async viewProfile() {
        await this.viewProfilelink.click();
    }
}
export default HomePage;
//module.exports = { HomePage };


