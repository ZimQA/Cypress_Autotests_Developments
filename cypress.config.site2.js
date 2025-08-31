const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/pokemons/**/*.cy.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    blockHosts: ["*mc.yandex.ru"],
    baseUrl:"https://pokemonbattle.ru/"
  },
});