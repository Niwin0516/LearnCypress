const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");


module.exports = defineConfig({
  //reporter:'cypress-mochawesome-reporter',
  viewportHeight	:660 ,
  viewportWidth:1000 ,
  video: false,
  pageLoadTimeout: 90000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    resultsDir: "allure-results",
  },
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    
    setupNodeEvents(on, config) {
      allureCypress(on);
      // implement node event listeners here
    },
  },
});
