import products from '../fixtures/products.json'

describe('Validação dos cenários de minicart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar o incremento de quantidade no minicart', () => {
        cy.visitPdp(products[0].url)
        cy.addProductToMinicart()
        cy.increaseQtyMinicart()
    })

    it('Validar a subtração de quantidade no minicart', () => {
        cy.visitPdp(products[0].url)
        cy.addProductToMinicart()
        cy.decreaseQtyMinicart()
    })

    it('Validar preço do produto no minicart', () => {
        cy.visitPdp(products[0].url)
        cy.addProductToMinicart()
        cy.getProductPriceMinicart()
    })

    it('Validar subtotal no minicart', () => {
        cy.visitPdp(products[0].url)
        cy.addProductToMinicart()
        cy.getSubtotalMinicart()
    })

    it('Validar total no minicart', () => {
        cy.visitPdp(products[0].url)
        cy.addProductToMinicart()
        cy.getTotalMinicart()
    })

    it('Validar opção "Continuar" no minicart para o cart', () => {
        cy.visitPdp(products[0].url)
        cy.addProductToMinicart()
        cy.getToCart()
    })

    it('Validar remoção do produto no minicart', () => {
        cy.visitPdp(products[0].url)
        cy.addProductToMinicart()
        cy.removeItemFromMinicart()
    })

})