Feature: The Form Feature

  Scenario: Form feature
    Given I visit to form URL
    Then  I fill cypres forms

  Scenario: Page Object Model Form feature
    Given I visit to form URL
    Then I fill forms using page object model
