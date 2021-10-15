Given("user navigate to the recast login page", () => {
  cy.visit("https://app.recast.studio/auth/login/");
});
When("user entered the username and password and click on login button", () => {
  cy.get("#login-form_email").type("jadhavkaran903@gmail.com");
  cy.get("#login-form_password").type("Jadhav123");
  cy.get("#login-form > div:nth-child(5) > div > div > div > button").click();
});
Then("user should navigate to reacast dashboard", () => {
  cy.get(
    "#root > div > section > section > section > main > div > div:nth-child(1) > h4"
  ).should("have.text", "Create New Project");
});

Given("user navigate to the recast login page", () => {
  cy.visit("https://app.recast.studio/auth/login/");
});
When(
  "user entered the invalid  username and invalid password and click on login button",
  () => {
    cy.get("#login-form_email").type("jadhavkaran904@gmail.com");
    cy.get("#login-form_password").type("Jadhav124");
    cy.get("#login-form > div:nth-child(5) > div > div > div > button").click();
  }
);
Then("user should not be logged in", () => {
  cy.get("#login-form > h2").should("contain", "SIGN IN");
});
