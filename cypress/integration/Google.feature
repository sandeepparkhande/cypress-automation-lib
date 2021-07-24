Feature: The Google

  I want to open Google page

  @Smoke
  Scenario: Opening a Google network page
    Given I open Google page
    Then I see "Google" in the title
    And I type Cognizant page
