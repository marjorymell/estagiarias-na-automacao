import { ELEMENTS } from "../../pages_elements/checkout_page";

Cypress.Commands.add('createCart', (baseUrlCheckout, orderFormId) =>{
    cy.visit(baseUrlCheckout + "orderFormId=" + orderFormId + "#/cart")
})

Cypress.Commands.add('clickCartToOrderform', () => {
    cy.get(ELEMENTS.CART.cartToOrderformButton).should('be.visible').click()
})

Cypress.Commands.add('selectBanckInvoicePayment', () => {
    cy.get(ELEMENTS.PAYMENT.bankInvoiceOption).should('exist').click()
})

Cypress.Commands.add('selectPromissoryPayment', () => {
    cy.get(ELEMENTS.PAYMENT.promissoryOption).should('exist').click()
})

Cypress.Commands.add('selectCreditCardPayment', () => {
    cy.get(ELEMENTS.PAYMENT.creditCardOption).should('exist').click()
})

Cypress.Commands.add('clickFinishPurchase', () => {
    cy.get(ELEMENTS.SUMMARY.finishPuchaseButton).last().click({force:true})
})

Cypress.Commands.add('getIframeDocumentCreditCard', () => {
    return cy
    .get('iframe.span12')
    .first()
    .its('0.contentDocument').should('exist')

})

Cypress.Commands.add('getIframeCreditCard', () => {
  return cy.getIframeDocumentCreditCard()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
})

Cypress.Commands.add('setValuesCreditCard', (number, name, month, year, code, document) => {
    cy.wait(5000)
    cy.getIframeCreditCard().find(ELEMENTS.PAYMENT.creditCardValues.cardNumberInput).type(number)
    cy.getIframeCreditCard().find(ELEMENTS.PAYMENT.creditCardValues.cardNameInput).type(name)
    cy.getIframeCreditCard().find(ELEMENTS.PAYMENT.creditCardValues.cardMonthInput).select(month)
    cy.getIframeCreditCard().find(ELEMENTS.PAYMENT.creditCardValues.cardYearInput).select(year)
    cy.getIframeCreditCard().find(ELEMENTS.PAYMENT.creditCardValues.cardCodeInput).type(code)
    cy.getIframeCreditCard().find(ELEMENTS.PAYMENT.creditCardValues.cardDocumentInput).type(document)
})