import { test,  expect } from "../fixtures/pageFixtures";
import { CsvHelper } from "../utils/CsvHelper";
import { ExcelHelper } from "../utils/ExcelHelper";
import { JsonHelper } from "../utils/JsonHelper";

test.beforeEach(async ({loginPage})=>{
    await loginPage.goToLoginPage();
})

test("Login Page Title Test", async ({loginPage})=>{
    let title = await loginPage.getPageTitle();
    console.log(`Login Page Title is : ${title}`);
    expect(title).toBe("Account Login");
})

test("Forgot password link exist test", async ({loginPage})=>{
    let isLinkExists = await loginPage.isForgotPwdLinkExists();
    expect(isLinkExists).toBe(true);
})
test("User is able to login with valid credentials Test",async ({loginPage,homePage})=>{
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
    expect.soft(await homePage.isLogOutLinkExists()).toBeTruthy();
    const homePageTitle = await homePage.getHomePageTitle();
    expect.soft(homePageTitle).toBe("My Account");   
})


//DD-1 with fixtures:  sequence mode - only 1 test is running with test data one by one from fixture.
test("Login with wrong credentials with data driven approach", async({loginPage,testData})=>{
    for(let row of testData){
        await loginPage.doLogin(row.username!,row.password!);
        expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
    }
})

//DD-2 Recommanded:  without fixtures with csv file: Parallel mode 
let testData = CsvHelper.readCsv('src/data/loginData.csv');
for(let row of testData){
    test(`Invalid Login Test with -  ${row.username} - ${row.password}`, async ({loginPage})=>{
        await loginPage.doLogin(row.username!,row.password!);
        expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
    })
}

//DD-3 without fixtures, with Excel file: Parallel mode 
let excelTestData = ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx');
for(let row of excelTestData){
    test(`Invalid Login Test from Excel data -  ${row.username} - ${row.password}`, async ({loginPage})=>{
        await loginPage.doLogin(row.username!,row.password!);
        expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
    })
}

//DD-4 without fixtures, with json file: Parallel mode 
let jsonTestData = JsonHelper.readJson('src/data/invaliddata.json')
for(let row of jsonTestData){
    test(`Invalid Login :  ${row.username} - ${row.password}`, async ({loginPage})=>{
        await loginPage.doLogin(row.username!,row.password!);
        expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
    })
}
