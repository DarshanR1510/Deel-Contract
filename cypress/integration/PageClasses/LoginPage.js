/// <reference types="cypress"/>

const login = require("../Locators/Login.json");

class LoginPage {
  visit(url) {
    cy.visit(url);
  }

  fillEmail(value) {
    const field = cy.get(login.emailInput);
    field.clear();
    field.type(value);
    return this;
  }

  fillPassword(value) {
    const field = cy.get(login.passwordInput);
    field.clear();
    field.type(value);
    return this;
  }

  submit() {
    const button = cy.get(login.submitBtn);
    button.click();
  }
}

export default LoginPage;
