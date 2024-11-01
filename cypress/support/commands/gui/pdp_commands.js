import { ELEMENTS } from "../../pages_elements/pdp_page";

Cypress.Commands.add("visitPdp", (url) => {
    cy.visit(url)
})

Cypress.Commands.add("getBreadcrumb", () => {
    cy.get(ELEMENTS.breadcrumb).should('be.visible')
})

Cypress.Commands.add("getProductTitle", () => {
    return cy.get(ELEMENTS.productTitleLabel).should('be.visible')
})

Cypress.Commands.add("getProductDescription", () => {
    return cy.get(ELEMENTS.producDescriptionLabel).should('be.visible')
})

Cypress.Commands.add("getProductMoreInfo", () => {
    return cy.get(ELEMENTS.moreInfoLabel).should('be.visible')
})

Cypress.Commands.add("getProductImageGallery", () => {
    return cy.get(ELEMENTS.productImageGallery).should('be.visible')
})

Cypress.Commands.add("getProductSoldBy", () => {
    return cy.get(ELEMENTS.soldByLabel).should('be.visible')
})

Cypress.Commands.add("getProductPrice", () => {
    return cy.get(ELEMENTS.productPriceLabel).should('be.visible')
})

Cypress.Commands.add("productIncreaseQty", () => {
    cy.get(ELEMENTS.increaseQtyButton).click()
    cy.get(ELEMENTS.QtyProductLabel).should('have.text', "2 unidades")
})

Cypress.Commands.add("productDecreaseQty", () => {
    cy.get(ELEMENTS.increaseQtyButton).click()
    cy.get(ELEMENTS.increaseQtyButton).click()
    cy.get(ELEMENTS.increaseQtyButton).click()
    cy.get(ELEMENTS.decreaseQtyButton).click()
    cy.get(ELEMENTS.QtyProductLabel).should('have.text', "3 unidades")
})

Cypress.Commands.add("addProductToMinicart", () => {
    cy.get(ELEMENTS.buyButton).should('be.visible').click()
    cy.get(ELEMENTS.confirmationToMinicartButton).should('be.visible').click()
})