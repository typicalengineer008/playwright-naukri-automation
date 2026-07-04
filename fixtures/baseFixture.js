import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import JobPage from '../pages/JobPage';

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    jobPage: async ({ page }, use) => {
        await use(new JobPage(page));
    }

});

export { expect } from '@playwright/test';
