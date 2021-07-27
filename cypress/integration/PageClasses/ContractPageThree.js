/// <reference types="cypress"/>

const pagethree = require("../Locators/ContractThree.json");

class ContractPageThree {
  CurrencyCheck(rateAmount) {
    const cc = cy.get(pagethree.CurrencyCheck);
    cc.should("have.text", rateAmount);
    return this;
  }
}
export default ContractPageThree;
