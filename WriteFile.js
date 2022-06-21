const fs = require("fs");

const readFilePath = "C:/Users/akdee/Desktop/TestingLearn/Cypress Basic-MyOwn/CypressBasic/Newt-scripts-test-results.txt"
const writeFilePath = "C:/Users/akdee/Desktop/TestingLearn/Cypress Basic-MyOwn/CypressBasic/test-results.txt"
const customreadFilePath = "C:/Users/akdee/Desktop/TestingLearn/Cypress Basic-MyOwn/CypressBasic/Mail footer.txt"

var fileString = fs.readFileSync(
    readFilePath,
    { encoding: "utf8" }
);

var tableContent = fileString.split(" (Run Finished)")[1];

var customfileString = fs.readFileSync(
    customreadFilePath,
    { encoding: "utf8" }
);

tableContent = "Please find the Overview Report" + tableContent + customfileString;

fs.writeFile(writeFilePath, tableContent,{encoding: "ASCII"},
    (err) => {
        if (err) {
            console.error(err);
            return;
        }
    })
