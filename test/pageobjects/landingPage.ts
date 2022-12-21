class LandingPage {
    public loginIcon: string = "~Login";
    public homeIcon: string = "~Home";

    public async openLoginpage() {
        await browser.pause(1000);
        await $(this.loginIcon).click();
    }

    public async openHomepage() {
        await browser.pause(1000);
        await $(this.homeIcon).click();
    }
}

export default new LandingPage();