import PageObject from "../support/PageObject";

class CheckOutStepTwoPageObject extends PageObject {
  url = '/checkout-step-two.html';
  
  get finishBtn() {
    return cy.get('#finish');
  }

  finishBtnClick() {
    this.finishBtn.click();
  }
}

export default CheckOutStepTwoPageObject;