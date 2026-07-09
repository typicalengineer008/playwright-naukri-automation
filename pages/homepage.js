//import { testData } from '../data/testData';

class HomePage {
    constructor(page) {

        this.page = page;

        this.searchbox = '//span[text()="Search jobs here"]';

        this.searchinputDesignation =
            'input[placeholder="Enter keyword / designation / companies"]';

        this.experience =
            'input[placeholder="Select experience"]';

        this.yearOfExperience =
           '//span[text()="3 years"]';

        this.location =
            'input[placeholder="Enter location"]';

        this.searchicon =
            'button[tabindex="0"]';
        this.viewProfilelink =this.page.getByRole('link', { name: 'View profile' });
    }

    async searchJob(jobname, locationname) {

        await this.page.click(this.searchbox);

        await this.page.fill(
            this.searchinputDesignation,
            jobname
        );

        await this.page.click(this.experience);

        await this.page.click(this.yearOfExperience);

        await this.page.fill(
            this.location,
            locationname
        );

        await this.page.click(this.searchicon);
    }
    async viewProfile() {
        await this.viewProfilelink.click();
    }
}
export default HomePage;
//module.exports = { HomePage };


