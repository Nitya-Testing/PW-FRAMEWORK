import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    private readonly logoutLink:Locator;
    private readonly headings:Locator;

    constructor(page:Page){
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.headings =  page.getByRole("heading", {level:2});
    }


    async getHomePageTitle():Promise<string>{
        return this.page.title();
    }
    async isLogOutLinkExists():Promise<boolean>{
        return this.logoutLink.isVisible();
    }
    async getHeadings():Promise<string[]>{
        return this.headings.allInnerTexts();
    }
}