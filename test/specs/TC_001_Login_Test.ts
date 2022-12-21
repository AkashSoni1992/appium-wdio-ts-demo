import LandingPage from '../pageObjects/landingPage'
import LoginFlow from '../testFlows/login_flow'
import { VALID_CREDS } from '../testData/TC_001_Login_Test_Data'


describe('Login page open in WDIO app test', () => {
    it('should be redirected to login page', async () => {
        await LandingPage.openLoginpage();
        await LoginFlow.verifyLoginPage();
    })
})

describe('Valid login scenario test', () => {
    it('should login with valid credentials', async () => {
        const { email, password } = VALID_CREDS;
        await LandingPage.openLoginpage();
        await LoginFlow.loginWithCredentials(email, password);
        await LoginFlow.verifyLoginSuccessMessage();
    })
})

describe('Invalid login scenario test', () => {
    it('should login with Invalid credentials', async () => {
        const { email, password } = VALID_CREDS;
        await LandingPage.openLoginpage();
        await LoginFlow.LoginWithInvalidEmail(email, password);
        await LoginFlow.verifyInvalidEmailMessage();
    })
})

