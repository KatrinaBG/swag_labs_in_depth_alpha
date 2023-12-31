import '../support/commands.js';

import LoginPageObject from "../pages/loginPage";

const loginPage = new LoginPageObject();

describe('Saucedemo login - in-depth session ', () => {
  it('should provide an ability to login', () => {
    cy.login();
    cy.url().should('contain', '/inventory.html');
  })
})