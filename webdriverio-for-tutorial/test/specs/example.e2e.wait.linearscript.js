describe('Test Example - Wait', async() => {
    it('naviate to dynamic loading page 1', async () => {
        // Access to linear script: https://the-internet.herokuapp.com/dynamic_loading/1
        const startBtn =  $("#start button");
        const finishText = $("#finish h4");
        const loading = $("#loading")

        await browser.url("/dynamic_loading/1");
        await startBtn.waitForDisplayed();
        await startBtn.waitForClickable();
        await expect(startBtn.isClickable());
        await startBtn.click();

        await loading.waitForDisplayed()
        await loading.waitForDisplayed({reverse: true})

        // browser.pause(9000)

        await finishText.waitForEnabled()
        await finishText.waitForDisplayed();

        await expect(await finishText.getText()).toEqual("Hello World!");

    });

});