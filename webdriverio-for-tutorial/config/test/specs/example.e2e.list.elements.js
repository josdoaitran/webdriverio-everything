const HomePage = require('../pageobjects/home');

describe('Example test with list elements', function () {

    // it('should demonstrate the getSize command', async () => {
    //     await browser.url('http://github.com')
    //     const logo = await $('.octicon-mark-github')
    //
    //     const size = await logo.getSize()
    //     console.log(size) // outputs: { width: 32, height: 32 }
    //
    //     const width = await logo.getSize('width')
    //     console.log(width) // outputs: 32
    //
    //     const height = await logo.getSize('height')
    //     console.log(height) // outputs: 32
    // })

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
