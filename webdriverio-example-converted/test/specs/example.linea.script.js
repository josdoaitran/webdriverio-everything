const { default: pause } = require("webdriverio/build/commands/browser/pause")

describe('Example Linear test scrip', async () =>{
    it('example browse to url and do some actions', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        pause(3000)
        await browser.maximizeWindow()
        const userName = $("#username");
        const password = $("#password")
        const logiBtn = $('button[type="submit"]');
        await userName.setValue("tomsmith")
        await password.setValue("SuperSecretPassword")
        await logiBtn.click();

        const flashMessage = $('#flash');
        expect(flashMessage).toBeExisting();
        expect(flashMessage).toHaveTextContaining('You logged into a secure area!')
    })
})