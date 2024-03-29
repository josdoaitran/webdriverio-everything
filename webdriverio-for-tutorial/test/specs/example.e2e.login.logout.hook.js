const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Test Example - Login and Logout', () => {
    before(() => {
        browser.maximizeWindow();
    });

    beforeEach(() => {
        browser.refresh()
    })

    after(() => {
        console.log('We run all test case in our test script.')
    })

    afterEach(() => {
        console.log('We run each test function')
    })

    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should logout and see the alert message', async() =>{
        await SecurePage.logout();
        await expect(LoginPage.flashAlert).toBeExisting();
        await expect(LoginPage.flashAlert).toHaveTextContaining(
            'You logged out of the secure area!');
    });
});


