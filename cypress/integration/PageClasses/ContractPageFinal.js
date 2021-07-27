/// <reference types="cypress"/>

class ContractPageFinal {
  NewUrl() {
    const nu = cy.location("pathname", { timeout: 10000 });
    nu.should("include", "/contract/");
    return this;
  }

  ContractAssertions(Elementlocate, data) {
    const locate = cy.get(Elementlocate);
    locate.should("include.text", data);
    return this;
  }
}

export default ContractPageFinal;
