import './commands/gui/checkout_commands.js'
import './commands/gui/minicart_commands.js'
import './commands/gui/pdp_commands.js'
import './commands/gui/plp_commands.js'
import './commands/api/utils_commands.js'
import 'cypress-plugin-xhr-toggle'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
