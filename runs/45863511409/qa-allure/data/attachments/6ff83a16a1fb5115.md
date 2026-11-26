# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpage.spec.ts >> Forgot password link exist test
- Location: src/tests/loginpage.spec.ts:20:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Test source

```ts
  1  | import { test,  expect } from "@playwright/test";
  2  | import {LoginPage} from "../pages/LoginPage";
  3  | import {HomePage} from "../pages/HomePage";
  4  | 
  5  | let loginPage:LoginPage;
  6  | let homePage:HomePage;
  7  | 
  8  | test.beforeEach(async ({page})=>{
  9  |     loginPage = new LoginPage(page);
  10 |     homePage = new HomePage(page);
  11 |     await loginPage.goToLoginPage();
  12 | })
  13 | 
  14 | test("Login Page Title Test", async ()=>{
  15 |     let title = await loginPage.getPageTitle();
  16 |     console.log(`Login Page Title is : ${title}`);
  17 |     expect(title).toBe("Account Login");
  18 | })
  19 | 
  20 | test("Forgot password link exist test", async ()=>{
  21 |     let isLinkExists = await loginPage.isForgotPwdLinkExists();
> 22 |     expect(isLinkExists).toBe(true);
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  23 | })
  24 | test("User is able to login with valid credentials Test",async ()=>{
  25 |     await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
  26 |     expect.soft(await homePage.isLogOutLinkExists()).toBeTruthy();
  27 |     const homePageTitle = await homePage.getHomePageTitle();
  28 |     expect.soft(homePageTitle).toBe("My Account");   
  29 | })
```