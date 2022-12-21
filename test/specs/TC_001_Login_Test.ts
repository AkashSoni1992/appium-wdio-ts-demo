import LandingPage from '../pageObjects/landingPage'
import LoginFlow from '../testFlows/login_flow'
import {VALID_CREDS} from '../testData/TC_001_Login_Test_Data'


describe('Login scenario test', () => {
    it('should login with valid credentials', async () => {
        const {email, password} = VALID_CREDS;
        await LandingPage.openLoginpage();
        await LoginFlow.loginWithCredentials(email, password);
        await LoginFlow.verifyLoginSuccessMessage();
    })
})