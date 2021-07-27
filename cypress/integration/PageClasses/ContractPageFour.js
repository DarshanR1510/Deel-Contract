/// <reference types="cypress"/>

const pagefour = require("../Locators/ContractFour.json");

class ContractPageFour {
  SpecialClause(text) {
    const sc = cy.get(pagefour.SpecialClauseBtn);
    sc.contains(pagefour.SpecialClauseText);
    sc.click();
    sc.get(pagefour.TextArea);
    sc.type(text);
    return this;
  }

  NextBtn() {
    const nb = cy.get(pagefour.NextBtn);
    nb.click();
    return this;
  }
}
export default ContractPageFour;
