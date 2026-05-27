class HomePage{
    constructor(page){
        this.page=page;
        this.searchbox = '//span[text()="Search jobs here"]';

        this.searchinputDesingnation = 'input[placeholder="Enter keyword / designation / companies"]';
        this.experience='input[placeholder="Select experience"]';
        this.yearOfexperience='//span[text()="3 years"]'
        this.location='input[placeholder="Enter location"]'

        this.searchicon = 'button[tabindex="0"]';
    }

    async searchJob(){
     await this.page.click(this.searchbox);
     await this.page.fill(this.searchinputDesingnation,"Quality Analist");
     await this.page.click(this.experience);
     await this.page.click(this.yearOfexperience);
     await this.page.fill(this.location,"Begaluru");
     await this.page.click(this.searchicon);
     
    }
}
module.exports={HomePage}