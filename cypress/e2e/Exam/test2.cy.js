const testDataLogin = require("../../fixtures/exam.json");
import exam from "../../support/page_object/exam.js";

describe("Exam", () => {
  beforeEach(() => {
    cy.visit(
      "https://petstore.octoperf.com/actions/Account.action?fbclid=IwY2xjawF5pp5leHRuA2FlbQIxMAABHffbOhV3EjobXw1a6TB0Tt_FD2TGujjlcjuDxv55m0vYR37zm8FJLDZlTg_aem_Kx7IFH_xFeX66mXLgD_aqw"
    );
  });

  it.only("tc-01-CheckPage", () => {
    cy.clearField('input[name="username"]');
    cy.clearField('input[name="password"]');
    cy.login2(testDataLogin.Data2.Username, testDataLogin.Data2.Password);
    cy.contains("Welcome").should("be.visible");
    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img'
    ).click();
    exam.Page("h2", "Fish");
    cy.clickByText("FI-SW-01");
    cy.get("tbody > :nth-child(2) > :nth-child(1) > a").click();
    cy.get(".Button").click();
    cy.get(
      '[href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] > img'
    ).click();
    exam.Page("h2", "Dogs");
    cy.get(
      '[href="/actions/Catalog.action?viewCategory=&categoryId=REPTILES"] > img'
    ).click();
    exam.Page("h2", "Reptiles");
    cy.get(
      '[href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img'
    ).click();
    exam.Page("h2", "Cats");
    cy.get(
      '[href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img'
    ).click();
    exam.Page("h2", "Birds");
    cy.get('[href="/actions/Cart.action?viewCart="] > img').click();
    cy.get("tbody > :nth-child(2) > :nth-child(2)").should(
      "have.text",
      "FI-SW-01"
    );
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();
    cy.get(":nth-child(14) > td > input").check();
    cy.get('[name="newOrder"]').click();
    cy.get('[name="newOrder"]').click();
    cy.get(".Button").click();

    //Sign out
    cy.get('[href="/actions/Account.action?signoff="]').click();
    cy.url().should(
      "eq",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );
  });
});
