import LoginPage from '../pageobjects/login.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        const title = await LoginPage.getLoginPageTitle()

        console.log("Page title", title);
        await LoginPage.setEmail("akash.soni@accesshq.com");
        await LoginPage.setPassword("123456789");
        await LoginPage.clickLoginBtn();
        const alertTitle = await LoginPage.getAlertTitle();
        console.log("Alert title", alertTitle);
        expect(title).toEqual("Login / Sign up Form");
        expect(alertTitle).toEqual("Success");
    })
})



