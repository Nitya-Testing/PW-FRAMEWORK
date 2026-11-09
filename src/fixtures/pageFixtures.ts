import {test as baseTest} from "@playwright/test";
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import { CsvHelper } from "../utils/CsvHelper";
import { SearchResultsPage } from "../pages/SearchResultsPage";


type pageFixtures = {
    loginPage:LoginPage,
    homePage:HomePage,
    searchResultsPage:SearchResultsPage,
    testData: Record<string, string>[]
}

export let test = baseTest.extend<pageFixtures>({
    loginPage: async ({page},use)=>{
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async({page},use)=>{
        let homePage = new HomePage(page);
        await use(homePage);
    },

     searchResultsPage: async({page},use)=>{
        let searchResultsPage = new SearchResultsPage(page);
        await use(searchResultsPage);
    },

    testData: async({},use)=>{
        let testData = CsvHelper.readCsv('./src/data/loginData.csv');
        await use(testData);
    }
})

export {expect} from "@playwright/test";