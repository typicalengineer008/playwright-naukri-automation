import { expect } from '@playwright/test';
class ProfilePage{
    constructor (page){
        this.page=page;
        this.updateResumebtn=this.page.getByRole('button', { name: 'Update resume' });
    }


async verifyResumeUploaded(fileName) {
    await expect(
        this.page.getByText(fileName)
    ).toBeVisible();
}

    async clickonResumeUpload(){
    await this.updateResumebtn.click();
    
    }

  async uploadDocument(filePath){
        // Use specific ID for the resume file input (attachCV)
        const fileInput = this.page.locator('#attachCV');
        
        // Set the file using setInputFiles
        await fileInput.setInputFiles(filePath);
        
        // Wait for upload to complete
        await this.page.waitForTimeout(2000);
        await expect(this.page.getByText("Bishnu_Rayaguru_SDET_QA_Automation.pdf")).toBeVisible();
    }


}
  export default ProfilePage;