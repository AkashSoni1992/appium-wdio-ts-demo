Feature: To login in WebdriverIO application

Scenario: Login with valid credentials
Given I am on wdio mobile app login page
When I enter valid credentials
Then I should be displayed success message box
