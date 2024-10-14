class exam {
  get loginData() {
    return cy.get("#flash");
  }
  //Action
  verifyLoginError() {
    this.loginData.should("contain.text", "Your username is invalid!");
  }
  verifyLoginCorrect() {
    this.loginData.should("contain.text", "You logged into a secure area!");
  }

  WhereText(where) {
    return cy.get(where);
  }
  PageLogin(where) {
    this.WhereText(where).should("have.text", "Login Page");
  }
  Page(where, text) {
    this.WhereText(where).should("have.text", text);
  }
}
export default new exam();
