Given("user navigate to the paytm homepage", () => {
  cy.visit("https://paytm.com/bus-tickets");
});
When("user Check on round trip radio button", () => {
  cy.get('label[for="roundTrip"]').click();
});
Then("user should see the round trip radio button Checked", () => {
  cy.get('label[for="roundTrip"]').should("have.text", "Round Trip");
});

Given("user navigate to the paytm homepage", () => {
  cy.visit("https://paytm.com/bus-tickets");
});
When(
  "user click on From and To text box and type boarding and dropping location",
  () => {
    cy.get('[data-reactid="145"] > .fl-input-container > #text-box')
      .click()
      .type("Surat");
    cy.get('p[class="_1TxU"]').eq(0).should("contain", "Surat").click();
    cy.get('[data-reactid="158"] > .fl-input-container > #text-box')
      .click()
      .type("Hyderabad");
    cy.get('p[class="_1TxU"]').eq(0).should("contain", "Hyderabad").click();
  }
);
When(
  "user click on Departure Date and Return Date box then user select the dates and click on search",
  () => {
    cy.get(
      "#app > div > div._1HKZ > div > div._1itb > div > div:nth-child(1) > div > div.row.bottom-xs._1CqX > div:nth-child(5) > div > div > div > div > div > input"
    ).click();
    cy.get(
      "body > div.react-datepicker__tether-element.react-datepicker__tether-enabled.react-datepicker__tether-abutted.react-datepicker__tether-abutted-left.react-datepicker__tether-element-attached-top.react-datepicker__tether-element-attached-left.react-datepicker__tether-target-attached-bottom.react-datepicker__tether-target-attached-left > div > div.react-datepicker__month > div:nth-child(5) > div:nth-child(2)"
    ).click();
    cy.get("#text-box").click();
    cy.get(
      '[data-reactid="181"] > .fl-input-container > ._1hq- > .row > ._2k43 > img'
    ).click();
    cy.get(
      "body > div.react-datepicker__tether-element.react-datepicker__tether-enabled.react-datepicker__tether-abutted.react-datepicker__tether-abutted-left.react-datepicker__tether-element-attached-top.react-datepicker__tether-element-attached-left.react-datepicker__tether-target-attached-bottom.react-datepicker__tether-target-attached-left > div > div.react-datepicker__month > div:nth-child(5) > div:nth-child(3)"
    ).click();

    cy.contains("Search").should("have.text", "Search").click({ force: true });
    cy.reload();
  }
);
Then("user should see the list of buses", () => {
  cy.url().should("contain","Surat")
});
