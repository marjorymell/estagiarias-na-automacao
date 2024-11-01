import { ELEMENTS } from "../../pages_elements/plp_page";

Cypress.Commands.add("getAssortment", (assortment) => {
    cy.get(ELEMENTS.assortmentFilter).first().should('have.text', assortment)
})

Cypress.Commands.add("checkFilter", () => {
    cy.get(ELEMENTS.firstFilter).first().check()
    cy.wait(3000)
    cy.get(ELEMENTS.firstFilter).first().should('be.checked')
})