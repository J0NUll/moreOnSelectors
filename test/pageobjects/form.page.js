import Page from './page.js';

class FormPage extends Page {
     //define multiple selectors using getter methods
    
    get header() {
        return $('#wb-cont'); //uses Element with certain text selector
    }

    
     // Email Selector
    get inputEmail() {
          return $("#mail"); //uses CSS query selector
    }
    get submit()
    {
        return $('#validation-example > input.btn.btn-primary')
    }
    get errortext()
    {
        return $('//*[@id="errors-validation-example"]/h2/text()')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to enter in a valid email
     */
    async emailInput() {
        await this.emailInput.setValue(input);
        await this.submit.click();
    }
    /**
      * overwrite specific options to adapt it to page object
      */
    open() {
        return super.open('');
    }
}
export default new FormPage();