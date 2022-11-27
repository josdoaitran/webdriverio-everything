const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    get linkText () {
        return $$("ul li")
    }

    async verifyLinkText(){
        // for < v7 expect(this.linkText.toBeElementsArrayOfSize(44))
        console.log('Length of element list: %s', this.linkText.length)
        expect(await this.linkText.length).toEqual(41)
    }
}

module.exports = new HomePage();