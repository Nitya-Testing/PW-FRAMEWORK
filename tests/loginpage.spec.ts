import { test,  expect } from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";

let loginPage:LoginPage;

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
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