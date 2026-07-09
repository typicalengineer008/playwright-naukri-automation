import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import JobPage from '../pages/JobPage';
import ProfilePage from '../pages/ProfilePage';
export const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    jobPage: async ({ page }, use) => {
        await use(new JobPage(page));
    },
  profilePage: async ({ page }, use) => {
        await use(new ProfilePage(page));
    }
});

export { expect } from '@playwright/test';
