Feature: End to end recast validation

    Scenario Outline: Login test for the recast
        Given Navigate to the recast page
        When User logged in using <username>
        And password as <password>
        And User click on login button
        Then Homepage should be displayed

        Examples:
            | username                 | password   |
            | jadhavkaran903@gmail.com | Jadhav123 |
            | kirandudhane49@gmail.com | Kiran123   |