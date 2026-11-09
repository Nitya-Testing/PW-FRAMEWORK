import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultsPage extends BasePage{
    private readonly searchResults:Locator;

    constructor(page:Page){
        super(page);
        this.searchResults = page.locator('div.product-layout');
    }

    async productsResultCount():Promise<number>{
        return await this.searchResults.count();
    }

    async clickProduct(productName:string):Promise<void>{
        await this.page.getByRole('link', { name: productName, exact: true }).first().click();
    }
}