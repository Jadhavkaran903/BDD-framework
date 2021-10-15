Feature: Login functionality recast
    User already signup

    Scenario: Login with valid credentails
        Given user navigate to the recast login page
        When user entered the username and password and click on login button
        Then user should navigate to reacast dashboard

    Scenario: Login with invalid credentials
        Given user navigate to the recast login page
        When user entered the invalid  username and invalid password and click on login button
        Then user should not be logged in
