Feature: API reqres

    Create user

    Scenario: GET user via API
        When User send the request to get user
        Then User should be get users successfuly

    Scenario Outline: Create user via API

        When User send post request for creating user with <name> and <job>
        Then User with <name> and <job> should be created

        Examples:
            | name   | job    |
            | Govind | QA     |
            | Karan  | tester |
            | Abhi   | Dancer |

    Scenario Outline: Update user via API
        When User send the put request to update user with <name> and <job>
        Then User with <name> and <job> should be updated

        Examples:
            | name   | job            |
            | Yogesh | ProductionHead |
            | Arjun  | BusinessMan    |

    Scenario Outline: Delete User Via API

        When User send the delete request to delete user with <name> and <job>
        Then User with <name> and <job> should be deleted

        Examples:

            | name   | job            |
            | Yogesh | ProductionHead |
            | Arjun  | BusinessMan    |