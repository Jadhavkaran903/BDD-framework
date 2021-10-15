Feature: Google Main Page

    I want to open a search engine


    Scenario: Opening a search engine page
        Given I open Google page
        Then I see "Google" in the title

    Scenario: Opening a search engine page
        Given I open Facebook page
        Then I see "Facebook" in the title