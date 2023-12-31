import '../support/commands.js';

import CartPageObject from "../pages/cartPage";
import InventoryPageObject from '../pages/inventoryPage';

const inventoryPage = new InventoryPageObject();
const cartPage = new CartPageObject();

beforeEach(() => {
  cy.login();
  cy.addProduct('backpack');
});

describe('Saucedemo cart - in-depth session ', () => {
  it('should provide an ability to checkout', () => {
    inventoryPage.goToShoppingCart();
    cartPage.proceedToCheckout();
    cy.url().should('contain', '/checkout-step-one.html');
  })
})