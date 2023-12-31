import PageObject from "../support/PageObject";

class CartPageObject extends PageObject {
  url = '/cart.html';

  get checkoutBtn() {
    return cy.get('#checkout');
  }

  proceedToCheckout() {
    this.checkoutBtn.click();
  }

}

export default CartPageObject;