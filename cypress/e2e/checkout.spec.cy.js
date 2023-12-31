import '../support/commands.js';

import CheckOutStepOnePageObject from '../pages/checkoutStepOnePage.js';
import CheckOutStepTwoPageObject from '../pages/checkoutStepTwoPage.js';

const checkoutStepOnePage = new CheckOutStepOnePageObject();
const checkoutStepTwoPage = new CheckOutStepTwoPageObject();

describe('Saucedemo checkout - in-depth session ', () => {
  beforeEach(() => {
    cy.login();
    cy.addProduct('backpack');
    cy.proceedToCheckout();
  });
  it.only('should provide an ability to finish checkout', () => {
    checkoutStepOnePage.fillFirstName(Cypress.env('firstName'));
    checkoutStepOnePage.fillLastName(Cypress.env('lastName'));
    checkoutStepOnePage.fillPostalCode(Cypress.env('postalCode'));
    checkoutStepOnePage.continueBtnClick();
    cy.url().should('contain', checkoutStepTwoPage.url);
    checkoutStepTwoPage.finishBtnClick();
    cy.url().should('contain', '/checkout-complete.html');
    cy.get('.title').contains('Checkout: Complete!').should('exist');
  });
});
