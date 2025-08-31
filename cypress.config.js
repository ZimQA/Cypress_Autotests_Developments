const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     specPattern: 'cypress/e2e/login_site/**/*.cy.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    blockHosts: ["*mc.yandex.ru"],
    baseUrl:"https://login.qa.studio"
  },
});

// Все параметры конфига: https://docs.cypress.io/guides/references/configuration
