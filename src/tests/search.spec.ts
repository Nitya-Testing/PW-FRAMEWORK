import { test,  expect  } from "../fixtures/pageFixtures";
import { CsvHelper } from "../utils/CsvHelper";


test.beforeEach(async ({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
})


//Data Provider
const productData = CsvHelper.readCsv("src/data/productData.csv");

for(let product of productData){
    test(`Verify Search results count of - ${product.searchKey}  ${product.productName}`,async ({homePage,searchResultsPage})=>{
    await homePage.doSearch(product.searchKey!);
    let count = await searchResultsPage.productsResultCount();
    console.log(`Products count is ${count}`)
    expect(count).toBe(Number(product.resultCount!));
})
}


for(let product of productData){
test(`Verify User Is Able To Land On Product Page of  - ${product.productName}`, async ({homePage,searchResultsPage,page})=>{
    await homePage.doSearch(product.searchKey!);
    await searchResultsPage.clickProduct(product.productName!);
    expect(await page.title()).toBe(product.productName!);
})
}
