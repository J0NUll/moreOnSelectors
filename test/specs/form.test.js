import FormPage from '../pageobjects/form.page.js'
describe('My Form application', () => {
    it('should find an h1 with the text "Form validation" ', async () => {
        await FormPage.open();
        await browser.pause (1000);
        await expect(FormPage.header).toHaveTextContaining(
            'Form validation');
            
    })
    
    it('should display appropriate message when submitted without meeting the minimum criteria', async () => {
        await FormPage.submit.waitForClickable({ timeout: 3000 });
        await FormPage.submit.click()
        await browser.pause (4000);
        await expect(FormPage.errortext).toHaveTextContaining(
            'The form could not be submitted because 9 errors were found'
        );
    })


});