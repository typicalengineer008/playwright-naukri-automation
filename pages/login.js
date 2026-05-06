class LoginPage {
//here in this constructor
    constructor(page) {
        this.page = page;

        this.loginBtn = 'text=Login';
        this.emailInput = 'input[type="text"]';
        this.passwordInput = 'input[type="password"]';
        this.submitBtn = 'button[type="submit"]';
    }

    async goto() {
        await this.page.goto('https://www.naukri.com/');
    }

    async login(email, password) {

        await this.page.click(this.loginBtn);

        await this.page.fill(this.emailInput, email);

        await this.page.fill(this.passwordInput, password);

        await this.page.click(this.submitBtn);
    }
}

module.exports = { LoginPage };