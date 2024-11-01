import { ELEMENTS } from "../../pages_elements/minicart_page";

Cypress.Commands.add('increaseQtyMinicart', () => {
    cy.get(ELEMENTS.increaseQtyButton).should('be.visible').click()
    cy.get(ELEMENTS.qtyLabel).should('have.value', '2')
})

Cypress.Commands.add('decreaseQtyMinicart', () => {
    cy.get(ELEMENTS.increaseQtyButton).should('be.visible').click()
    cy.get(ELEMENTS.increaseQtyButton).should('be.visible').click()
    cy.get(ELEMENTS.increaseQtyButton).should('be.visible').click()
    cy.get(ELEMENTS.decreaseQtyButton).should('be.visible').click()
    cy.get(ELEMENTS.qtyLabel).should('have.value', '3')
})

Cypress.Commands.add('getProductPriceMinicart', () => {
    cy.get(ELEMENTS.productPrice).should('be.visible')
})

Cypress.Commands.add('getSubtotalMinicart', () => {
    cy.get(ELEMENTS.subtotalLabel).should('be.visible')
})

Cypress.Commands.add('getTotalMinicart', () => {
    cy.get(ELEMENTS.totalLabel).should('be.visible')
})

Cypress.Commands.add('getToCart', () => {
    cy.get(ELEMENTS.toCartButton).should('be.visible')
})

Cypress.Commands.add('removeItemFromMinicart', () => {
    cy.get(ELEMENTS.removeItemButton).should('be.visible').click()
    cy.wait(2000)
    cy.get(ELEMENTS.emptyStateHeader).should('be.visible')
})

Cypress.Commands.add('validateItemAddedMinicart', () => {
    cy.get(ELEMENTS.productItem).should('exist')
})