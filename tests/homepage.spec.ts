import { test,  expect } from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";
import {HomePage} from "../src/pages/HomePage";

let loginPage:LoginPage;
let homePage:HomePage;

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin("nityaranjan190592@gmail.com","Selenium@123");
})

test("Home Page Title Test", async()=>{
    const homePageTitle = await homePage.getHomePageTitle();
    expect(homePageTitle).toBe("My Account");
})
test("Logout Link Exist Test", async()=>{
    const isLogoutLinkVisible = await homePage.isLogOutLinkExists();
    expect(isLogoutLinkVisible).toBe(true);
})
test("Homepage headings Test" , async()=>{
    let headings = await homePage.getHeadings();
    expect(headings).toHaveLength(4);
    expect(headings).toEqual(["My Account","My Orders","My Affiliate Account","Newsletter"]);
})
