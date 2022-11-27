describe('Test get size of element', function () {
    it('should get size of element and verify value', async function () {
        await browser.url('http://github.com')
        const logo = await $('.octicon-mark-github')
        const size = await logo.getSize()
        const width = await logo.getSize('width')
        const height = await logo.getSize('height')
        console.log(height) // outputs: 32
        expect(width).toEqual(32);
        expect(height).toEqual(32);
    });
});