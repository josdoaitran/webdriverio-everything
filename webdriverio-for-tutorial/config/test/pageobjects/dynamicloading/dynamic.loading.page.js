const Page = require('../page');

class DynamicLoadingPage extends Page {

    get LinkTextPageHidden () {
        return $("//a[@href=\"/dynamic_loading/1\"]");
    }

    get LinkTextPageFact(){
        return $("//a[@href=\"/dynamic_loading/2\"]");
    }

    async clickLinkTextPageHidden(){
        expect(this.LinkTextPageHidden).toBeClickable()
        this.LinkTextPageHidden.click()
    }
}