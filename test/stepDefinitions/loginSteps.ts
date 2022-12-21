import {Given, When, Then} from '@wdio/cucumber-framework'
import LandingPage from '../pageObjects/landingPage'
import LoginFlow from '../testFlows/login_flow'
import {VALID_CREDS} from '../testData/TC_001_Login_Test_Data'

Given(/^I am on wdio mobile app login page$/, async () => {
    await LandingPage.openLoginpage();
});

When(/^I enter valid credentials$/, async () => {
    await LoginFlow.loginWithCredentials(VALID_CREDS.email, VALID_CREDS.password);
});

Then(/^I should be displayed success message box$/, async () => {
    await LoginFlow.verifyLoginSuccessMessage();
});