class LoginPage {

    public loginPageTitle: string = '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView';
    public emailTxtbox: string = "~input-email";
    public passwordTxtbox: string = "~input-password";
    public loginBtn: string = '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup/android.widget.TextView';
    public alertTitle: string = "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView";
    public invalidEmailErrorMessage: string = '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]';
    public successPopUpOKBtn: string = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button';


    public async getLoginPageTitle() {
        (await $(this.loginPageTitle)).waitForDisplayed({ timeout: 5000 });
        return (await $(this.loginPageTitle)).getText();
    }

    public async setEmail(email: string) {
        await $(this.emailTxtbox).waitForDisplayed();
        await $(this.emailTxtbox).setValue(email);
    }

    public async setPassword(password: string) {
        await $(this.passwordTxtbox).setValue(password);
    }

    public async clickLoginBtn() {
        await browser.pause(2000);
        (await $(this.loginBtn)).click();
        await browser.pause(2000);
    }

    public async getAlertTitle() {
        await $(this.alertTitle).waitForDisplayed({ timeout: 5000 });
        return (await $(this.alertTitle)).getText();
    }

    public async getEmailErrorMessage() {
        await $(this.invalidEmailErrorMessage).waitForDisplayed({ timeout: 5000 });
        return await $(this.invalidEmailErrorMessage).getText();
    }

    public async clickSuccessPopUpBtn() {
        await browser.pause(2000);
        await $(this.successPopUpOKBtn).click();
        await browser.pause(2000);
    }

    public async clearEmailValue(){
        await $(this.emailTxtbox).waitForDisplayed();
        await $(this.emailTxtbox).clearValue();
    }

    public async clearPasswordValue(){
        await $(this.passwordTxtbox).waitForDisplayed();
        await $(this.passwordTxtbox).clearValue();
    }
}

export default new LoginPage();
