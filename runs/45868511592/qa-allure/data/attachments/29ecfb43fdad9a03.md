# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: productInfoPage.spec.ts >> Verify Product Images count test
- Location: src/tests/productInfoPage.spec.ts:13:1

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'E-Mail Address' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - generic [ref=e22]:
    - link [ref=e23] [cursor=pointer]:
      - /url: /search?sca_esv=511e0a12140dfbd4&sxsrf=AKL5yDh-M-HYi_CK8c3r_aiALoLWsaDhhw:1795714720171&q=Thanksgiving+2026&oi=ddle&noiga=1&ct=585220107&hl=en&si=AE1YtOpq69kQPYJq7TIn_jext5SiMwQcb6Hqfr7QepP6tJJpj48bMmU436aHKfRv9F6UEa5aBm_lxNcKfKYSn2_65ZDE6oNtk0BCo4jIsKk_OjDOeUL7E158Q_IfIl-TVWsQm11nb6qo76m4lTEf841myC-tYLqK7kxOAMNGxe-RHDTOSulFBU8%3D&sa=X&ved=2ahUKEwj3lIzQlqaYAxXCMjQIHQOyO6UQPXoECAAQAw
      - img "Thanksgiving 2026" [ref=e25]
    - button "Share" [ref=e27]
  - search [ref=e35]:
    - generic [ref=e37]:
      - generic [ref=e38]:
        - generic [ref=e39]:
          - status [ref=e40]
          - alert [ref=e41]
        - generic [ref=e42]:
          - button "Add files, tools, and select a model" [ref=e48] [cursor=pointer]
          - combobox "Search" [ref=e53]
          - generic [ref=e54]:
            - generic [ref=e55]:
              - button "Search by voice" [ref=e58] [cursor=pointer]
              - button "Search by image" [ref=e63] [cursor=pointer]
            - link "AI Mode" [ref=e66] [cursor=pointer]
      - generic [ref=e74]:
        - button "Google Search" [ref=e75] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e76] [cursor=pointer]
  - generic [ref=e77]:
    - generic [ref=e78]: 🍂 Happy Thanksgiving 🍽️
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - dialog "Choose Chrome, the browser built by Google":
                      - generic [ref=e96]:
                        - generic [ref=e97]:
                          - heading "Choose Chrome, the browser built by Google" [level=2] [ref=e98]
                          - generic [ref=e99]: Try a fast, secure browser with automatic updates
                        - generic [ref=e100]:
                          - button "Don't use Chrome" [ref=e101] [cursor=pointer]
                          - button "Download Chrome" [ref=e104] [cursor=pointer]
                        - generic [ref=e113]:
                          - generic [ref=e114]:
                            - text: By downloading Chrome, you agree to the
                            - link "Google Terms of Service" [ref=e115] [cursor=pointer]:
                              - /url: https://policies.google.com/terms
                            - text: and
                            - link "Chrome and ChromeOS Additional Terms of Service" [ref=e116] [cursor=pointer]:
                              - /url: https://www.google.com/chrome/terms/
                            - text: .
                          - generic [ref=e118]:
                            - checkbox "Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. Learn more about automatic reports." [checked] [ref=e119]
                            - generic [ref=e120]:
                              - text: Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.
                              - link "Learn more about automatic reports" [ref=e121] [cursor=pointer]:
                                - /url: https://support.google.com/chrome/answer/96817
                              - text: .
  - contentinfo [ref=e123]:
    - generic [ref=e124]:
      - generic [ref=e125]:
        - link "Advertising" [ref=e126] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e127] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e128] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - link "Build, create, and do more with AI tools from Google" [ref=e130] [cursor=pointer]:
        - /url: https://ai.google/helpful-tools/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer
      - generic [ref=e131]:
        - link "Privacy" [ref=e132] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en&fg=1
        - link "Terms" [ref=e133] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en&fg=1
        - button "Settings" [ref=e137] [cursor=pointer]
```

# Test source

```ts
  1  | import { Locator,Page } from "@playwright/test";
  2  | import {BasePage} from "./BasePage";
  3  | 
  4  | export class LoginPage extends BasePage{
  5  | 
  6  |     private readonly emailid:Locator;
  7  |     private readonly password:Locator;
  8  |     private readonly loginButton:Locator;
  9  |     private readonly forgotPasswordLink:Locator;
  10 |     private readonly errorMessage:Locator;
  11 | 
  12 |     constructor(page:Page){
  13 |         super(page);
  14 |         this.emailid = page.getByRole('textbox', { name: 'E-Mail Address' });
  15 |         this.password = page.getByRole('textbox', { name: 'Password' });
  16 |         this.loginButton = page.getByRole('button', { name: 'Login' });
  17 |         this.forgotPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
  18 |         this.errorMessage = page.locator('.alert-danger');
  19 |     }
  20 | 
  21 | 
  22 |     async goToLoginPage():Promise<void>{
  23 |         await this.page.goto('opencart/index.php?route=account/login');
  24 |     }
  25 |     async getLoginPageTitle():Promise<string>{
  26 |         return await this.page.title();
  27 |     }
  28 |     async isForgotPwdLinkExists():Promise<boolean>{
  29 |         return await this.forgotPasswordLink.isVisible();
  30 |     }
  31 |     async isLogoExisits():Promise<boolean>{
  32 |         return await this.logo.isVisible();
  33 |     }
  34 |     async doLogin(userName:string,password:string):Promise<void>{
  35 |         console.log(`Login with username: ${userName} and password: ${password}`);
> 36 |         await this.emailid.fill(userName);
     |                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  37 |         await this.password.fill(password);
  38 |         await this.loginButton.click();
  39 |     }
  40 |     async isErrorMessageDisplayed():Promise<boolean>{
  41 |         return await this.errorMessage.isVisible();
  42 |     }
  43 | 
  44 | }
```