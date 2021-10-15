import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I open Google page", () => {
  cy.visit("https://www.google.com");
});
Given("I open Facebook page", () => {
  cy.visit("https://www.facebook.com");
});
Then(`I see {string} in the title`, (title) => {
  cy.title().should("contain", title);
});
