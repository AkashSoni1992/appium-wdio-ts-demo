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
        await LoginPage.clickSuccessPopUpBtn();
        await this.clearLoginValues();
        await LandingPage.openHomepage();
    }

    public async verifyLoginPage(){
        const loginPageTitle = await LoginPage.getLoginPageTitle();
        console.log("Login Page Title", loginPageTitle);
        expect(loginPageTitle).toEqual("Login / Sign up Form");
    }

    public async LoginWithInvalidEmail(email, password){
        await LoginPage.setPassword(password);
        await LoginPage.clickLoginBtn();
    }

    public async verifyInvalidEmailMessage(){
        const errMsgDisp = await LoginPage.getEmailErrorMessage();
        console.log("Error message displayed value : ", errMsgDisp);
        expect(errMsgDisp).toEqual("Please enter a valid email address");
    }

    public async clearLoginValues(){
        await LoginPage.clearEmailValue();
        await LoginPage.clearPasswordValue();
    }
}

export default new LoginFlow();