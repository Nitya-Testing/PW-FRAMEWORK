# PW Common Framework

Reusable Playwright and TypeScript helpers for browser and API automation. The package includes page objects for the sample OpenCart workflows, a Playwright fixture, an API helper, and utilities for reading CSV, Excel, and JSON data.

## Features

- Extended Playwright `test` fixture with page objects for common OpenCart pages
- API helper for GET, POST, PUT, and DELETE requests
- CSV, Excel, and JSON data-reading helpers
- TypeScript declarations included in the package

## Requirements

- Node.js
- Playwright Test (`@playwright/test`) version 1.64.1 or later

## Install

Install the framework and Playwright Test in your project:

```bash
npm install --save-dev @nityaranjan190592/pw-common-framework @playwright/test
npx playwright install
```

## Configure Playwright

Set a `baseURL` in your Playwright configuration. Page-object navigation uses relative URLs, so the base URL should point to the site under test.

```ts
// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://your-opencart-site.example",
  },
});
```

## Browser test example

The package exports an extended `test` object with fixtures including `loginPage`, `homePage`, `basePage`, and `searchResultsPage`. It also exports Playwright's `expect`.

```ts
// tests/login.spec.ts
import { expect, test } from "@nityaranjan190592/pw-common-framework";

test("login page displays the forgotten-password link", async ({ loginPage }) => {
  await loginPage.goToLoginPage();
  expect(await loginPage.isForgotPwdLinkExists()).toBe(true);
});
```

The extended `test` retains Playwright's standard fixtures, including `page` and `request`.

## API test example

`ApiHelper` accepts a Playwright `APIRequestContext` and a base URL. Each request method returns the HTTP status and, for GET/POST/PUT, the parsed JSON body.

```ts
import { expect, test, ApiHelper } from "@nityaranjan190592/pw-common-framework";

test("gets a resource", async ({ request }) => {
  const api = new ApiHelper(request, "https://api.example.com");
  const result = await api.get("/health");

  expect(result.status).toBe(200);
});
```

Available methods:

- `get(endpoint, headers?)`
- `post(endpoint, data, headers?)`
- `put(endpoint, data, headers?)`
- `delete(endpoint, headers?)`

## Data helpers

The package exports `CsvHelper`, `ExcelHelper`, and `JsonHelper`:

```ts
import {
  CsvHelper,
  ExcelHelper,
  JsonHelper,
} from "@nityaranjan190592/pw-common-framework";

const csvRows = CsvHelper.readCsv("./test-data/users.csv");
const excelRows = ExcelHelper.readExcel("./test-data/users.xlsx", "Users");
const jsonRows = JsonHelper.readJson("./test-data/users.json");
```

Pass file paths relative to the process working directory. CSV files are read using their first row as the column headers. Excel reads the requested sheet, or the workbook's first sheet if no sheet name is supplied.

## Exported page objects

- `BasePage` — common page actions and locators
- `LoginPage` — login-page actions and checks
- `HomePage` — home-page actions, including product search
- `SearchResultsPage` — search result count and product selection

The package also exports `ApiHelper`, `CsvHelper`, `ExcelHelper`, `JsonHelper`, and the extended Playwright `test` and `expect`.

## Development

```bash
npm install
npm run build
```

## License

MIT
