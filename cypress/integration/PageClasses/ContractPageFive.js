/// <reference types="cypress"/>

const pagefive = require("../Locators/ContractFive.json");

class ContractPageFive {
  CountryName(countryname) {
    const cn = cy.get(pagefive.CountryName);
    cn.click();
    cn.contains(countryname);
    cn.click();
    return this;
  }

  ProvinceName(provincename) {
    const pn = cy.get(pagefive.ProvinceName);
    pn.click();
    pn.contains(provincename);
    pn.click();
    return this;
  }
}
export default ContractPageFive;
