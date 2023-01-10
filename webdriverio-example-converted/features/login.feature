Feature: As an EndUser, I can test login page

Scenario: I can access login page and login successful with valid credential
    Given I can access login page
    When I login with credential information username tomsmith and passsword SuperSecretPassword!
    Then I can see the flash message content You logged into a secure area!
