class LoginPage {
//here in this constructor
    constructor(page) {
        this.page = page;
this.loginBtn = this.page.getByRole('link', { name: 'Login' });
        
        this.emailInput =this.page.getByPlaceholder("Enter your active Email ID / Username");
        this.passwordInput = this.page.locator('input[type="password"]');

        this.submitBtn = this.page.locator('button[type="submit"]');
      
    
     }
     
async goto(url) {
await this.page.goto(url);
//     await this.page.goto(url, {
//         waitUntil: 'domcontentloaded',
//         timeout: 60000
    //});

   // await this.page.waitForLoadState('networkidle');
}


    async login(email, password) {
// await this.loginBtn.waitFor({
//     state: 'visible',
//     timeout: 30000
// });
await this.loginBtn.waitFor({ state: 'visible' });


        
        await this.loginBtn.click();

        await this.emailInput.fill(email)
       

        await this.passwordInput.fill(password);

        await this.submitBtn.click();
    }
}


export default LoginPage;
