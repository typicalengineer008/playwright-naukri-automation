class ProfilePage{
    constructor (page){
        this.page=page;
        this.updateResumebtn=this.page.getByRole('button', { name: 'Update resume' });
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
    }

}
  export default ProfilePage;