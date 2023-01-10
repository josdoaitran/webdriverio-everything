const DynamicLoadingPage = require('../pageobjects/dynamicloading/dynamic.loading.page');
const ElementHiddenPage = require('../pageobjects/dynamicloading/element.hidden.page')

describe('Test Example - Wait', async() => {
    it('naviate to dynamic loading page 1', async () => {
        await DynamicLoadingPage.open()
        await DynamicLoadingPage.clickLinkTextPageHidden()

        await ElementHiddenPage.clickStartBtn()
        await ElementHiddenPage.waitLoadingIcon()
        await ElementHiddenPage.verifyFinishText()

    });

});