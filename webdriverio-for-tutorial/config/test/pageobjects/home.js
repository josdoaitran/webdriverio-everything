

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    get linkText () {
        return $('//*[@id="content"]/ul/li')
    }

    async verifyLinkText(){
        expect(this.linkText).toBeElementsArrayOfSize(44)
    }
}

module.exports = new HomePage();