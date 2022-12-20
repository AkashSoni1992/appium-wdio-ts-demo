
class LoginPage {

    public loginIcon: string = "~Login";
    public loginPageTitle: string = '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView';
    public emailTxtbox: string = "~input-email";
    public passwordTxtbox: string = "~input-password";
    public loginBtn: string = '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup/android.widget.TextView';
    // public alertTitle: string = "~Success";
    public alertTitle: string = "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView";
    public async open() {
        await browser.pause(1000);
        $(this.loginIcon).click();
        console.log("Inside application login page");
    }

    public async getLoginPageTitle() {
        // await browser.pause(5000);
        (await $(this.loginPageTitle)).waitForDisplayed({ timeout: 5000 });
        return (await $(this.loginPageTitle)).getText();
    }

    public async setEmail(email: string) {
        console.log("Email: ", email);
        (await $(this.emailTxtbox)).setValue(email);
    }

    public async setPassword(password: string) {
        console.log("Password: ", password);
        (await $(this.passwordTxtbox)).setValue(password);
    }

    public async clickLoginBtn(){
        await browser.pause(2000);
        (await $(this.loginBtn)).click();
        await browser.pause(2000);
    }

    public async getAlertTitle(){
        (await $(this.alertTitle)).waitForDisplayed({timeout: 5000});
        return (await $(this.alertTitle)).getText();
    }
}

export default new LoginPage();
