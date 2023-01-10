const Page = require('../page');

class ElementHiddenPage extends Page {

    get startBtn () {
        return $('#start button');
    }

    get finishTxt() {
        return $("#finish h4")
    }

    get loadingIcon(){
        return $("#loading")
    }

    async clickStartBtn(){
        await this.startBtn.waitForDisplayed();
        await this.startBtn.waitForClickable();
        await expect(this.startBtn.isClickable());
        await this.startBtn.click();
    }

    async waitLoadingIcon(){
        await this.loadingIcon.waitForDisplayed()
        await this.loadingIcon.waitForDisplayed({reverse: true})
    }

    async verifyFinishText(){
        await this.finishTxt.waitForEnabled()
        await this.finishTxt.waitForDisplayed();
        await expect(await this.finishTxt.getText()).toEqual("Hello World!");
    }
}

module.exports = new ElementHiddenPage();