class LandingPage {
    public loginIcon: string = "~Login";

    public async openLoginpage() {
        await browser.pause(1000);
        $(this.loginIcon).click();
    }
}

export default new LandingPage();