import LandingPage from '../pageObjects/landingPage'
import LoginPage from '../pageObjects/loginPage'

class LoginFlow{
    public async loginWithCredentials(email, password){
        await LoginPage.setEmail(email);
        await LoginPage.setPassword(password);
        await LoginPage.clickLoginBtn();
    }

    public async verifyLoginSuccessMessage(){
        const alertTitle = await LoginPage.getAlertTitle();
        console.log("Alert title", alertTitle);
        expect(alertTitle).toEqual("Success");
    }
}

export default new LoginFlow();