import { test,  expect } from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";
import {HomePage} from "../src/pages/HomePage";

let loginPage:LoginPage;
let homePage:HomePage;

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.goToLoginPage();
})

test("Login Page Title Test", async ()=>{
    let title = await loginPage.getLoginPageTitle();
    console.log(`Login Page Title is : ${title}`);
    expect(title).toBe("Account Login");
})

test("Forgot password link exist test", async ()=>{
    let isLinkExists = await loginPage.isForgotPwdLinkExists();
    expect(isLinkExists).toBe(true);
})
test("User is able to login with valid credentials Test",async ()=>{
    await loginPage.doLogin("nityaranjan190592@gmail.com","Selenium@123");
    expect.soft(await homePage.isLogOutLinkExists()).toBeTruthy();
    const homePageTitle = await homePage.getHomePageTitle();
    expect.soft(homePageTitle).toBe("My Account");   
})