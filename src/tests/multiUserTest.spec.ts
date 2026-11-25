
import {Browser, BrowserContext, chromium,Page,test} from "@playwright/test";

test("Test Multi User Test",async()=>{
    let browser:Browser = await chromium.launch({channel:"chrome",headless:false});
    let ctx1:BrowserContext = await browser.newContext();
    let ctx2:BrowserContext = await browser.newContext();

    let page1:Page = await ctx1.newPage();
    let page2:Page = await ctx2.newPage();


    await page1.goto("http://google.com");
    await page2.goto("http://amazon.com");


})