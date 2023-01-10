import {Given, When, Then} from '@wdio/cucumber-framework';

import loginPage from '../pageobjects/login.page';
import securePage from '../pageobjects/secure.page';

Given(/^I can access (\w+) page$/, async(page) =>{
    await loginPage.open(page)
});

Then(/^I can see the flash message content (.*)$/, async (messsgeContent) => {
    await expect(securePage.flashAlert).toBeExisting();
    await expect(securePage.flashAlert).toHaveTextContaining(messsgeContent);
})

When(/^I login with credential information username (\w+) and passsword (.+)$/, async (username, password) => {
    await loginPage.login(username, password)
})


