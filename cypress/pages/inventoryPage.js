import PageObject from "../support/PageObject";

class InventoryPageObject extends PageObject {
  url= '/inventory.html';
  
  get cartIcon() {
    return cy.get('a.shopping_cart_link');
  }

  get cartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  addToCart(itemName) {
    cy.get(`button[id*=${itemName}]`).click();
  }

  getShoppingCartBadgeCount() {
    this.cartBadge;
  }

  goToShoppingCart() {
    this.cartIcon.click();
  }
}

export default InventoryPageObject;