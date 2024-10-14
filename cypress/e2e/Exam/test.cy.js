const testDataLogin = require("../../fixtures/exam.json");
import exam from "../../support/page_object/exam.js";

describe("Exam", () => {
  beforeEach(() => {
    cy.visit(
      "https://the-internet.herokuapp.com/login?fbclid=IwY2xjawF5nK5leHRuA2FlbQIxMAABHfRF0QJwl-zARr2o0B1I0sqecTtJJ0d72Lo0xRKXu5ZSr12V5YHllDaydQ_aem_gNoBKmyiHNSboMuddY9AbA"
    );
  });

  it("tc-01-Login with incorrect username and password", () => {
    cy.login(
      testDataLogin.IncorrectData.Username,
      testDataLogin.IncorrectData.Password
    );
    exam.verifyLoginError();
  });
  it("tc-02-Login with correct username and password", () => {
    cy.login(testDataLogin.Data.Username, testDataLogin.Data.Password);
    exam.verifyLoginCorrect();
    cy.get(".button").click();
    cy.url().should("eq", "https://the-internet.herokuapp.com/login");
    exam.PageLogin("h2");
  });
});
