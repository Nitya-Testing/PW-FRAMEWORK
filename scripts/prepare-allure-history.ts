import fs from "fs";
import path from "path";

const source = path.join('allure-report', 'history');
const destination = path.join('allure-results', 'history');

if (fs.existsSync(source)) {
    fs.cpSync(source, destination, {
        recursive: true
    });

    console.log('Allure history copied successfully');
} else {
    console.log('No previous Allure history found');
}