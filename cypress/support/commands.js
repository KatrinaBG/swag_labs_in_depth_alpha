// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPageObject from '../pages/loginPage';
import InventoryPageObject from '../pages/inventoryPage';
import CheckOutStepOnePageObject from '../pages/checkoutStepOnePage';
import CartPageObject from '../pages/cartPage';  

const loginPage = new LoginPageObject();
const inventoryPage = new InventoryPageObject();
const cartPage = new CartPageObject();


Cypress.Commands.add('login', () => {
  loginPage.visit();
  loginPage.fillUsername(Cypress.env('username'));
  loginPage.fillPassword(Cypress.env('password'));
  loginPage.submit();
});

Cypress.Commands.add('addProduct', (productName) => {
  inventoryPage.addToCart(productName);
});

Cypress.Commands.add('proceedToCheckout', () => {
  inventoryPage.goToShoppingCart();
  cartPage.proceedToCheckout();
});
