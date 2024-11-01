import plpAssortments from '../fixtures/plpAssortment.json'

describe('Validação dos cenários da PLP', () => {
    beforeEach(() => {
        cy.setVercelCookie(cookies.vercelCookieName, vercelCookieValue)
        cy.visit('/')
        cy.removeModal()
    })
    
    it('Validação ordenação - mais relevantes', () => {
        cy.visit(plpAssortments.sort_desc.url)
        cy.getAssortment(plpAssortments.sort_desc.description)
    })

    it('Validação ordenação - mais vendidos', () => {
        cy.visit(plpAssortments.orders_desc.url)
        cy.getAssortment(plpAssortments.orders_desc.description)
    })

    it('Validação ordenação - desconto', () => {
        cy.visit(plpAssortments.discount_desc.url)
        cy.getAssortment(plpAssortments.discount_desc.description)
    })

    it('Validação ordenação - menores preços', () => {
        cy.visit(plpAssortments.price_asc.url)
        cy.getAssortment(plpAssortments.price_asc.description)
    })

    it('Validação ordenação - maiores preços', () => {
        cy.visit(plpAssortments.price_desc.url)
        cy.getAssortment(plpAssortments.price_desc.description)
    })

    it('Validação ordenação - data de lançamento', () => {
        cy.visit(plpAssortments.release_desc.url)
        cy.getAssortment(plpAssortments.release_desc.description)
    })

    it('Validação ordenação - ordem alfabética crescente', () => {
        cy.visit(plpAssortments.name_asc.url)
        cy.getAssortment(plpAssortments.name_asc.description)
    })

    it('Validação ordenação - ordem alfabética decrescente', () => {
        cy.visit(plpAssortments.name_desc.url)
        cy.getAssortment(plpAssortments.name_desc.description)
    })
    
    it('Validação de filtro da PLP', () => {
        cy.visit(plpAssortments.name_desc.url)
        cy.checkFilter()
    })
})