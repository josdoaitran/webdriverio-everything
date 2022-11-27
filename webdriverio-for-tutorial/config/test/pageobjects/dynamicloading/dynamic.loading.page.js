const Page = require('../page');

class DynamicLoadingPage extends Page {

    async open () {
        return super.open('/dynamic_loading');
    }

    get LinkTextPageHidden () {
        return $("//a[@href=\"/dynamic_loading/1\"]");
    }

    get LinkTextPageFact(){
        return $("//a[@href=\"/dynamic_loading/2\"]");
    }

    async clickLinkTextPageHidden(){
        await expect(this.LinkTextPageHidden).toBeClickable()
        await this.LinkTextPageHidden.click()
    }

    async clickLinkTextPageFact(){
        await expect(this.LinkTextPageFact).toBeClickable()
        await this.LinkTextPageFact.click()
    }
}

module.exports = new DynamicLoadingPage();