// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get(".radius").click();
});

Cypress.Commands.add("clickByText", (text) => {
  cy.contains(text).click();
});

Cypress.Commands.add("login2", (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('[name="password"]').type(password);
  cy.get('[name="signon"]').click();
});

Cypress.Commands.add("clearField", (selector) => {
  cy.get(selector).clear();
});