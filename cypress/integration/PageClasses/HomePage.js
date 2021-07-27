/// <reference types="cypress"/>

const home = require("../Locators/Home.json");

class HomePage {
  closePopUp() {
    const btn = cy.get(home.popupClose);
    btn.wait(2000);
    btn.click();
    return this;
  }

  sideBarOptionClick() {
    const sidebar = cy.get(home.sidebarOption);
    sidebar.contains("Create A Contract");
    sidebar.click();
    return this;
  }

  fixedRateOptionClick() {
    const fixedrate = cy.get(home.fixedRateOption);
    fixedrate.click();
  }
}

export default HomePage;
