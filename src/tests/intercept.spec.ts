import {test,expect} from '@playwright/test';

test('intercept and log requests', async({page})=>{
    await page.route('**/*', async(route)=>{
        console.log(route.request().method() , route.request().url());
        await route.continue();
    })

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/account");
})

//intercept with mocking
test('Intercept Mock data' , async({page})=>{
    let fakeProducts = [
        {name: "iphone16", price:"$599"},
        {name: "iphone13", price:"$699"},
        {name: "iphone14", price:"$799"}
    ]
    await page.route("**/opencart/index.php?route=account/account",async(route)=>{
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify(fakeProducts)
        })
    })

    page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/account");
    // let response = await page.evaluate(async()=>{
    //    let res =  await fetch("https://naveenautomationlabs.com/opencart/index.php?route=account/account");
    //    return await res.json();
    // })
    // console.log('fake json response ' , response);
})