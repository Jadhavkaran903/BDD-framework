When("User send the request to get user", () => {
  cy.request({
    method: "GET",
    url: "https://reqres.in/api/users?page=2",
  }).as("getUser");
});
Then("User should be get users successfuly", () => {
  cy.get("@getUser").then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body.page).to.eq(2);
    expect(res.body).property("data");
    expect(res.body).property("total_pages");
    expect(res.body).property("page");
    expect(res.body).property("per_page");
    expect(res.body).to.have.property("data").with.lengthOf(6);
    expect(res.body).to.include.keys("total_pages", "per_page");
  });

  When(
    "User send post request for creating user with {word} and {word}",
    (name, job) => {
      cy.fixture("reqres_api").then((admin) => {
        admin.user.name = name;
        admin.user.job = job;

        cy.request({
          method: "POST",
          url: "https://reqres.in/api/users",
          body: admin.user,
        }).as("createUser");
      });
    }
  );
  Then("User with {word} and {word} should be created", (name, job) => {
    cy.get("@createUser").then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.name).to.eq(name);
      expect(res.body.job).to.eq(job);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("createdAt");
    });
  });
  When(
    "User send the put request to update user with {word} and {word}",
    (name, job) => {
      cy.fixture("reqres_api").then((putting) => {
        putting.user.name = name;
        putting.user.job = job;
        cy.request({
          method: "PUT",
          url: "https://reqres.in/api/users/2",
          body: putting.user,
        }).as("UpdatedUser");
      });
    }
  );
  Then("User with {word} and {word} should be updated", (name, job) => {
    cy.get("@UpdatedUser").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.name).to.eq(name);
      expect(res.body.job).to.eq(job);
      expect(res.body).to.have.property("updatedAt");
    });
  });
  When(
    "User send the delete request to delete user with {word} and {word}",
    (name, job) => {
      cy.fixture("reqres_api").then((fixture) => {
        fixture.user.name = name;
        fixture.user.job = job;
        cy.request({
          method: "DELETE",
          url: "https://reqres.in/api/users/2",
          body: fixture.user,
        }).as("deleteUser");
      });
    }
  );

  Then("User with {word} and {word} should be deleted", (name, job) => {
    cy.get("@deleteUser").then((res) => {
      expect(res.status).to.eq(204);
    });
  });
});
