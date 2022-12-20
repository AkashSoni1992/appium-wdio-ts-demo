import LandingPage from '../pageobjects/landingPage'
import LoginPage from '../pageobjects/loginPage'
import LoginFlow from '../testflows/loginFlow'


describe('Login scenario test', () => {
    it('should login with valid credentials', async () => {
        var email = "akash.soni@accesshq.com";
        var password = "1234567789";
        await LandingPage.openLoginpage();
        await LoginFlow.loginWithCredentials(email, password);
        await LoginFlow.verifyLoginSuccessMessage();
    })
})



