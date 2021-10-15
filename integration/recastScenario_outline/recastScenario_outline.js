Given("Navigate to the recast page", () => {
  cy.visit("https://app.recast.studio/auth/login/");
});
When("User logged in using {word}", (username) => {
  cy.get("#login-form_email").type(username);
});
And("password as {word}",(password) => {
  cy.get("#login-form_password").type(password);
});
And("User click on login button", () => {
  cy.get("#login-form > div:nth-child(5) > div > div > div > button").click();
});
Then("Homepage should be displayed", () => {
    cy.get('#root > div > section > section > section > main > div > div:nth-child(1) > h4').should('have.text',"Create New Project")
});
