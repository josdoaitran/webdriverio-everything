const HomePage = require('../pageobjects/home');

describe('Example get list of elements', function(){
    it('Verfiy all elements as list', async function(){
        await HomePage.open('/')
        await HomePage.verifyLinkText()
    })
})