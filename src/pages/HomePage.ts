import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    private readonly logoutLink:Locator;
    private readonly headings:Locator;
    private readonly searchTextBox:Locator;
    private readonly searchBtn:Locator;

    constructor(page:Page){
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.headings =  page.getByRole("heading", {level:2});
        this.searchTextBox = page.getByRole('textbox', { name: 'Search' });
        this.searchBtn = page.locator('span.input-group-btn button');
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

    async doSearch(searchKey:string){
        await this.searchTextBox.fill(searchKey);
        await this.searchBtn.click();
    }
}