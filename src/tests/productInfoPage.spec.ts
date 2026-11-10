import { test,  expect } from "../fixtures/pageFixtures";


test.beforeEach(async ({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
})

test('Verify Logo Should be Visible' , async({basePage})=>{
    expect(await basePage.isLogoVisible()).toBeTruthy();
})

test('Verify Product Images count test' , async ({homePage,searchResultsPage,productInfoPage})=>{
    await homePage.doSearch("macbook");
    await searchResultsPage.clickProduct("MacBook Pro");
    let imagesCount = await productInfoPage.getProductImagesCount();
    expect(imagesCount).toBe(4);
})

test('Verify product info', async({homePage,searchResultsPage,productInfoPage})=>{
    await homePage.doSearch("macbook");
    await searchResultsPage.clickProduct("MacBook Pro");
    let actualProductInfoMap = await productInfoPage.getProductInfo();
    console.log('Actual Product Info Map' , actualProductInfoMap);

expect.soft(actualProductInfoMap.get('productHeading')).toBe("MacBook Pro");
expect.soft(actualProductInfoMap.get('Brand')).toBe("Apple");
expect.soft(actualProductInfoMap.get('Product Code')).toBe("Product 18");
expect.soft(actualProductInfoMap.get('Reward Points')).toBe("800");
expect.soft(actualProductInfoMap.get('Availability')).toBe("Out Of Stock");
expect.soft(actualProductInfoMap.get('productPrice')).toBe("$2,000.00");
expect.soft(actualProductInfoMap.get('taxPrice')).toBe("$2,000.00");
})