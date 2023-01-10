const Page = require('./page');

class HomePage extends Page{

    get linkText(){
        return $$("ul li");
    }

    async verifyLinkText(){
        console.log('Length of list of Elements: LinkText %s', this.linkText.length)
        expect(await this.linkText.length).toEqual(44)
    }
}

module.exports = new HomePage();