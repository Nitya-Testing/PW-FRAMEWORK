import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductInfoPage extends BasePage{
    private readonly header:Locator;
    private readonly productImages:Locator;
    private readonly productMetaData:Locator;
    private readonly productPrice:Locator;
    map:Map<string,string | number>;

    constructor(page:Page){
        super(page);
        this.header = page.getByRole('heading', { level: 1 });
        this.productImages = page.locator('div#content ul.thumbnails li');
        this.productMetaData = page.locator('div#content ul.list-unstyled:nth-of-type(1) li');
        this.productPrice = page.locator('div#content ul.list-unstyled:nth-of-type(2) li');
        this.map = new Map<string,string | number>;
    }

    async getProductHeading():Promise<string>{
        return await this.header.innerText();
    }
    async getProductImagesCount():Promise<number>{
        await this.productImages.first().waitFor({state:"visible"});
        return await this.productImages.count();
    }

// Brand: Apple
// Product Code: Product 18
// Reward Points: 800
// Availability: Out Of Stock
    private async getProductMetaData():Promise<void>{
        let productMetaData = await this.productMetaData.allInnerTexts();
        for(let product of productMetaData){
            let productKey = product.split(':')[0]?.trim();
            let productValue = product.split(':')[1]?.trim();
            console.log(`${productKey} :: ${productValue}` );

            this.map.set(productKey!,productValue!);
        }

    }

// $2,000.00
// Ex Tax: $2,000.00
    private async getPricesData():Promise<void>{
        let pricesData = await this.productPrice.allInnerTexts();
        let productPrice = pricesData[0]?.trim();
        let taxPrice = pricesData[1]?.split(':')[1]?.trim();
        console.log(`${productPrice} :: ${taxPrice}` );


        this.map.set('productPrice', productPrice!);
        this.map.set('taxPrice', taxPrice!);

    }

    async getProductInfo():Promise<Map<string,string | number>>{
        this.map.set('productHeading', await this.getProductHeading());
        this.map.set('productImagesCount', await this.getProductImagesCount());
        await this.getProductMetaData();
        await this.getPricesData();

        return this.map;
    }


    
}