import { test,  expect } from "../src/fixtures/pageFixtures";

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
    await loginPage.doLogin("nityaranjan190592@gmail.com","Selenium@1234");
    expect.soft(await homePage.isLogOutLinkExists()).toBeTruthy();
    const homePageTitle = await homePage.getHomePageTitle();
    expect.soft(homePageTitle).toBe("My Account");   
})