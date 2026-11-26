# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpagefix.spec.ts >> Forgot password link exist test
- Location: src/tests/loginpagefix.spec.ts:18:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Test source

```ts
  1  | import { meta,testData as suppliedData } from "reporting-labs";
  2  | import { test,  expect } from "../fixtures/pageFixtures";
  3  | import { CsvHelper } from "../utils/CsvHelper";
  4  | import { ExcelHelper } from "../utils/ExcelHelper";
  5  | import { JsonHelper } from "../utils/JsonHelper";
  6  | 
  7  | test.beforeEach(async ({loginPage})=>{
  8  |     await loginPage.goToLoginPage();
  9  | })
  10 | 
  11 | test("Login Page Title Test", async ({loginPage})=>{
  12 |     meta({priority:"P1",severity:"major",epic:"JIRA-2526",owner:"Nitya"});
  13 |     let title = await loginPage.getPageTitle();
  14 |     console.log(`Login Page Title is : ${title}`);
  15 |     expect(title).toBe("Account Loginnn");
  16 | })
  17 | 
  18 | test("Forgot password link exist test", async ({loginPage})=>{
  19 |     let isLinkExists = await loginPage.isForgotPwdLinkExists();
> 20 |     expect(isLinkExists).toBe(true);
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  21 | })
  22 | test("@sanity User is able to login with valid credentials Test",async ({loginPage,homePage})=>{
  23 |     await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
  24 |     expect.soft(await homePage.isLogOutLinkExists()).toBeTruthy();
  25 |     const homePageTitle = await homePage.getHomePageTitle();
  26 |     expect.soft(homePageTitle).toBe("My Account");   
  27 | })
  28 | 
  29 | 
  30 | //DD-1 with fixtures:  sequence mode - only 1 test is running with test data one by one from fixture.
  31 | test("Login with wrong credentials with data driven approach", async({loginPage,testData})=>{
  32 |     for(let row of testData){
  33 |         await loginPage.doLogin(row.username!,row.password!);
  34 |         expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
  35 |     }
  36 | })
  37 | 
  38 | //DD-2 Recommanded:  without fixtures with csv file: Parallel mode 
  39 | let testData = CsvHelper.readCsv('src/data/loginData.csv');
  40 | for(let row of testData){
  41 |     test(`Invalid Login Test with -  ${row.username} - ${row.password}`, async ({loginPage})=>{
  42 |         await suppliedData(testData, "Login Data");
  43 |         await loginPage.doLogin(row.username!,row.password!);
  44 |         expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
  45 |     })
  46 | }
  47 | 
  48 | //DD-3 without fixtures, with Excel file: Parallel mode 
  49 | let excelTestData = ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx');
  50 | for(let row of excelTestData){
  51 |     test(`Invalid Login Test from Excel data -  ${row.username} - ${row.password}`, async ({loginPage})=>{
  52 |         await loginPage.doLogin(row.username!,row.password!);
  53 |         expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
  54 |     })
  55 | }
  56 | 
  57 | //DD-4 without fixtures, with json file: Parallel mode 
  58 | let jsonTestData = JsonHelper.readJson('src/data/invaliddata.json')
  59 | for(let row of jsonTestData){
  60 |     test(`Invalid Login :  ${row.username} - ${row.password}`, async ({loginPage})=>{
  61 |         await loginPage.doLogin(row.username!,row.password!);
  62 |         expect(await loginPage.isErrorMessageDisplayed()).toBeTruthy();
  63 |     })
  64 | }
  65 | 
```