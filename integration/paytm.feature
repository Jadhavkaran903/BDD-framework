Feature:Check the functionality of radio buttons
    User want to open a search engine

    Scenario: Check the functionality of round trip radio button
        Given user navigate to the paytm homepage
        When user Check on round trip radio button
        Then user should see the round trip radio button Checked

    Scenario: Check the functionality of Book Bus Tickets
        Given user navigate to the paytm homepage
        When user click on From and To text box and type boarding and dropping location
        When user click on Departure Date and Return Date box then user select the dates and click on search
        Then user should see the list of buses
