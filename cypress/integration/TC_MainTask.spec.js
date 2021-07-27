/// <reference types="cypress"/>

import LoginPage from "./PageClasses/LoginPage";
import HomePage from "./PageClasses/HomePage";
import ContractPageOne from "./PageClasses/ContractPageOne";
import ContractPageTwo from "./PageClasses/ContractPageTwo";
import ContractPageThree from "./PageClasses/ContractPageThree";
import ContractPageFour from "./PageClasses/ContractPageFour";
import ContractPageFive from "./PageClasses/ContractPageFive";
import ContractPageFinal from "./PageClasses/ContractPageFinal";

import { ProgressBarIcon } from "./Locators/ContractOne.json";

const pagefinal = require("./Locators/ContractFinal.json");
const lp = new LoginPage();
const hp = new HomePage();
const p1 = new ContractPageOne();
const p2 = new ContractPageTwo();
const p3 = new ContractPageThree();
const p4 = new ContractPageFour();
const p5 = new ContractPageFive();
const pf = new ContractPageFinal();

const timedelay = { delay: 2000 };

var pageNumber = 1;
var PageAssertion = () => {
  pageNumber++;
  cy.log(pageNumber);
  cy.get(ProgressBarIcon).should("have.length", pageNumber);
};

describe("Test Suite - Create Fixed Contract", () => {
  it("Fixed Contract Creation and Validation", () => {
    cy.fixture("LoginData").then((userData) => {
      //Login Page
      lp.visit(userData.url);
      lp.fillEmail(userData.email);
      lp.fillPassword(userData.password);
      lp.submit(timedelay);
      cy.wait(3000);
    });

    // Home Page
    hp.closePopUp(timedelay);
    hp.sideBarOptionClick(timedelay);
    hp.fixedRateOptionClick(timedelay);

    //Contract First Page
    cy.fixture("ContractData").then((contractdata) => {
      p1.ContractName(contractdata.ContractName);
      p1.JobTitle(contractdata.JobTitle);
      p1.SeniorityLevel();
      p1.WorkScope(contractdata.JobTitle);
      p1.SelectDate();
      p1.NextBtn();

      //Contract Second Page
      PageAssertion();
      p2.Rate(contractdata.RateAmount);
      p2.CurrencyBox(contractdata.Currency, contractdata.CurrencyIcon);
      p2.CycleBox(contractdata.CycleType);
      p1.NextBtn();

      //Contract Third Page
      PageAssertion();
      p3.CurrencyCheck(
        `${contractdata.CurrencyIcon}${contractdata.RateAmount}`
      );
      p1.NextBtn();

      //Contract Four Page
      PageAssertion();
      p4.SpecialClause(contractdata.SpecialClause);
      p4.NextBtn();

      //Contract Five Page
      PageAssertion();
      p5.CountryName(contractdata.CountryName);
      p5.ProvinceName(contractdata.ProvinceName);
      p4.NextBtn();

      //Contract Final Page
      pf.NewUrl();
      pf.ContractAssertions(pagefinal.ContractName, contractdata.ContractName);
      pf.ContractAssertions(pagefinal.ContractType, contractdata.ContractType);
      pf.ContractAssertions(pagefinal.JobTitle, contractdata.JobTitle);
      pf.ContractAssertions(
        pagefinal.SeniorityLevel,
        contractdata.SeniorityLevel
      );

      const rateString = `${contractdata.CurrencyIcon}${contractdata.RateAmount}`;
      pf.ContractAssertions(pagefinal.Rate, rateString);
    });
  });
});
