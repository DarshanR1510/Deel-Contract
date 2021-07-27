/// <reference types="cypress"/>

const pagetwo = require("../Locators/ContractTwo.json");

class ContractPageTwo {
  Rate(rateAmount) {
    const name = cy.get(pagetwo.Rate);
    name.clear();
    name.type(rateAmount);
    return this;
  }

  CurrencyBox(currency, currencyicon) {
    const cb = cy.get(pagetwo.CurrencyDropDown);
    cb.click();
    cb.contains(currency);
    cb.click();

    cb.get(pagetwo.CurrencyIcon);
    cb.should("have.text", currencyicon);
    return this;
  }

  CycleBox(cycletype) {
    const cb = cy.get(pagetwo.CycleDropDown);
    cb.click();
    cb.contains(cycletype, { matchCase: true });
    cb.click();
    return this;
  }
}

export default ContractPageTwo;
