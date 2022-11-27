describe('Test Example - Wait', () => {
    it('naviate to dynamic loading page 1', () => {
        // Access to linear script: https://the-internet.herokuapp.com/dynamic_loading/1
        const startBtn =  $("#start button");
        const finishText = $("//div[@id='finish']/h4");
        const loading = $("#loading")

        browser.url("/dynamic_loading/1");
        startBtn.waitForDisplayed();
        startBtn.waitForClickable();
        expect(startBtn.isClickable());
        startBtn.click();

        loading.waitForDisplayed()
        loading.waitForDisplayed({reverse: true})

        // browser.pause(9000)

        finishText.waitForEnabled()
        finishText.waitForDisplayed();

        expect(finishText.getText()).toEqual("Hello World!");

    });

});