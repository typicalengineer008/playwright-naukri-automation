class LoginPage {
//here in this constructor
    constructor(page) {
        this.page = page;

        this.loginBtn = '//a[text()="Login"]';
        this.emailInput = '//input[@placeholder="Enter your active Email ID / Username"]';
        this.passwordInput = 'input[type="password"]';
        this.submitBtn = 'button[type="submit"]';
    }

    async goto() {
     await this.page.goto('https://www.naukri.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
    }

    async login(email, password) {

        await this.page.click(this.loginBtn);

        await this.page.fill(this.emailInput, email);

        await this.page.fill(this.passwordInput, password);

        await this.page.click(this.submitBtn);
    }
}

module.exports = { LoginPage };
