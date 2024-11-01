const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: { hideXhr: true },
    baseUrl: 'https://americanasqa.vtexdemostores.com/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    screenshotOnRunFailure: false,
    modifyObstructiveCode: false,
    notifications: 'allow',
    geolocation: 'allow',
    watchForFileChanges: false,
  },
})
