class LoginPage {
//here in this constructor
    constructor(page) {
        this.page = page;
//this.loginBtn = page.getByRole('link', { name: 'Login' });
        this.loginBtn = '//a[text()="Login"]';
        this.emailInput = '//input[@placeholder="Enter your active Email ID / Username"]';
        this.passwordInput = 'input[type="password"]';
        this.submitBtn = 'button[type="submit"]';
    }
async goto(url) {
    await this.page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    await this.page.waitForLoadState('networkidle');
}


    async login(email, password) {
await this.page.locator(this.loginBtn).waitFor({
    state: 'visible',
    timeout: 30000
});


        await this.page.click(this.loginBtn);

        await this.page.fill(this.emailInput, email);

        await this.page.fill(this.passwordInput, password);

        await this.page.click(this.submitBtn);
    }
}


export default LoginPage;
