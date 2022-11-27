const HomePage = require('../pageobjects/home');

describe('Example test with list elements', function () {

    it('Verify all element as list', async function () {
        // We write test script as linear script.
        // await browser.url('https://the-internet.herokuapp.com/')   // browser.url('/')
        // const listLinkText = await $$("ul li");
        // console.log(listLinkText.length)
        // with Version <v7: expect(listLinkText).toBeElementsArrayOfSize(44)
        // expect(listLinkText.length).toEqual(44)

        // Structure in POM model.
        await HomePage.open('/')
        await HomePage.verifyLinkText()
    });
});
