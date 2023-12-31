import PageObject from "../support/PageObject";

class CheckOutStepOnePageObject extends PageObject {
  url= '/checkout-step-one.html';

  get firstNameField() {
    return cy.get('#first-name');
  }

  get lastNameField() {
    return cy.get('#last-name');
  }

  get postalCodeField() {
    return cy.get('#postal-code');
  }

  get continueBtn() {
    return cy.get('#continue');
  }

  fillFirstName(firstName){
    this.firstNameField.type(firstName);
  }

  fillLastName(lastName){
    this.lastNameField.type(lastName);
  }

  fillPostalCode(postalCode){
    this.postalCodeField.type(postalCode);
  }

  continueBtnClick() {
    this.continueBtn.click();
  }
}

export default CheckOutStepOnePageObject;