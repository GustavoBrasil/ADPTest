const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reportPageTitle: 'OrangeHRMTests',
    },
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  },
  env: {
    user: "Admin",
    pwd: "admin123",
  },

  chromeWebSecurity: false,
  experimentalSessionAndOrigin: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,


});
