Feature: Medical History
As a user
I want to update the Medical History
  Scenario: update Medical History form
    Given I navigate to the formedix website
    When I login
    Then I validate tech study menu
    When I update the medical History
    Then I sign out
  
