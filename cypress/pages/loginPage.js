import PageObject from '../support/PageObject';

class LoginPageObject extends PageObject {
  url = '/';

  get usernameField() {
    return cy.get('#user-name');
  }

  get passwordField() {
    return cy.get('#password');
  }

  get loginBtn() {
    return cy.get('#login-button');
  }

  fillUsername(username){
    this.usernameField.type(username);
  }

  fillPassword(password){
    this.passwordField.type(password);
  }

  submit() {
    this.loginBtn.click();
  }
}

export default LoginPageObject;