import { test,  expect } from "../src/fixtures/pageFixtures";
import { CsvHelper } from "../utils/CsvHelper";

test.beforeEach(async ({loginPage})=>{
    await loginPage.goToLoginPage();
})

test("Login Page Title Test", async ({loginPage})=>{
    let title = await loginPage.getLoginPageTitle();
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

//DD-2 Recommanded:  without fixtures: Parallel mode 
let testData = CsvHelper.readCsv('./src/data/loginData.csv');
for(let row of testData){
    test(`Invalid Login Test with -  ${row.username} - ${row.password}`, async ({loginPage})=>{
        await loginPage.doLogin(row.username!,row.password!);
        expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
    })
}
