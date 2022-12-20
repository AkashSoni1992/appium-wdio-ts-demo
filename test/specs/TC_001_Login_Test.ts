import LandingPage from '../pageobjects/landingPage'
import LoginFlow from '../testflows/loginFlow'
import {VALID_CREDS} from '../testdata/TC_001_Login_Test_Data'


describe('Login scenario test', () => {
    it('should login with valid credentials', async () => {
        const {email, password} = VALID_CREDS;
        await LandingPage.openLoginpage();
        await LoginFlow.loginWithCredentials(email, password);
        await LoginFlow.verifyLoginSuccessMessage();
    })
})



