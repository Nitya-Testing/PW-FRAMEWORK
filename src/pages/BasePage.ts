import { Page } from "@playwright/test";

export class BasePage{
    protected readonly page:Page
    protected readonly searchTextBox;
    protected readonly searchBtn;
    protected readonly currency;
    protected readonly logo;
    protected readonly footerLinks;

    constructor(page:Page){
        this.page = page;
        //common locators
        this.searchTextBox = page.getByRole('textbox', { name: 'Search' });
        this.searchBtn = page.locator('span.input-group-btn button');
        this.currency = page.locator(`span:has-text("Currency")`);
        this.logo = page.getByRole('img', { name: 'naveenopencart' });
        this.footerLinks = page.locator('footer a');
    }

    //common locators/Functionalities/actions

    async isLogoVisible():Promise<boolean>{
        return this.logo.isVisible();
    }

    async getFooterLinksCount():Promise<number>{
        return this.footerLinks.count();
    }

    async getPageTitle():Promise<string>{
        return this.page.title();
    }
     getCurrentURL():string{
        return this.page.url();
    }
    async takeScreenshot(name:string):Promise<Buffer>{
        return await this.page.screenshot({
            fullPage:true,
            path:`reports/screenshot/${name}.png`
        });
    }
}