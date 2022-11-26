const HomePage = require('../pageobjects/home');

describe('Example test with list elements', function () {
    it('Verify all element as list', async function () {
        // We write test script as linear script.
        // browser.url('https://the-internet.herokuapp.com/')   // browser.url('/')
        // const listLinkText = $$("ul li")
        // expect(listLinkText).toBeElementsArrayOfSize(44)

        // Structure in POM model.
        await HomePage.open('/')
        await HomePage.verifyLinkText()
    });
});
