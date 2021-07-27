/// <reference types="cypress"/>

const pageone = require("../Locators/ContractOne.json");

var yesterdayDate = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  return yesterday.getDate();
};

class ContractPageOne {
  ContractName(contractname) {
    const name = cy.get(pageone.ContractName);
    name.clear();
    name.type(contractname);
    name.click();
    return this;
  }

  JobTitle(jobtitle) {
    const jt = cy.get(pageone.JobTitle);
    jt.click();
    jt.get(pageone.SuggestionBox);
    jt.contains(jobtitle);
    jt.click();
    jt.get(pageone.JobTitle);
    jt.should("have.value", jobtitle);
    return this;
  }

  SeniorityLevel() {
    const sl = cy.get(pageone.SeniorityLevel);
    sl.click();
    sl.get(pageone.SelectSeniority);
    sl.click();
    return this;
  }

  WorkScope(worktitle) {
    const ws = cy.get(pageone.WorkScope);
    ws.click();
    ws.get(pageone.ScopeBox).contains(worktitle);
    ws.click();
    return this;
  }

  SelectDate() {
    const sd = cy.get(pageone.ContractDateBox);
    sd.click();
    sd.get(pageone.DateSelection);
    sd.contains(yesterdayDate());
    sd.click();
    return this;
  }

  NextBtn() {
    const nb = cy.get(pageone.SubmitBtn);
    nb.click();
    return this;
  }
}

export default ContractPageOne;
