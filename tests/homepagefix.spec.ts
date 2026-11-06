import { test,  expect } from "../src/fixtures/pageFixtures";

test.beforeEach(async ({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
})

test("Home Page Title Test", async({homePage})=>{
    const homePageTitle = await homePage.getHomePageTitle();
    expect(homePageTitle).toBe("My Account");
})
test("Logout Link Exist Test", async({homePage})=>{
    const isLogoutLinkVisible = await homePage.isLogOutLinkExists();
    expect(isLogoutLinkVisible).toBe(true);
})
test("Homepage headings Test" , async({homePage})=>{
    let headings = await homePage.getHeadings();
    expect(headings).toHaveLength(4);
    expect(headings).toEqual(["My Account","My Orders","My Affiliate Account","Newsletter"]);
})
