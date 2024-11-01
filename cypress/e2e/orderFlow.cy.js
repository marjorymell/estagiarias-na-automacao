import checkoutUrl from '../fixtures/checkoutUrl.json'
import orderFormIdList from '../fixtures/orderFormIdList.json'
import paymentData from '../fixtures/paymentData.json'

describe("Validação do fluxo de compras", ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it("Fluxo de compra | entrega normal | pagamento com boleto", ()=> {
        cy.createCart(checkoutUrl.urlBaseCheckoutQA.url, orderFormIdList.oneProduct.orderFormId)
        cy.clickCartToOrderform()
        cy.selectBanckInvoicePayment()
        cy.clickFinishPurchase()
    })

    it("Fluxo de compra | entrega normal | pagamento com promissória", ()=> {
        cy.createCart(checkoutUrl.urlBaseCheckoutQA.url, orderFormIdList.oneProduct.orderFormId)
        cy.clickCartToOrderform()
        cy.selectPromissoryPayment()
        cy.clickFinishPurchase()
    })

    it("Fluxo de compra | entrega normal | pagamento com cartão de crédito", ()=> {
        cy.createCart(checkoutUrl.urlBaseCheckoutQA.url, orderFormIdList.oneProduct.orderFormId)
        cy.clickCartToOrderform()
        cy.selectCreditCardPayment()
        cy.setValuesCreditCard(
            paymentData.visa.number, 
            paymentData.visa.name,
            paymentData.visa.month,
            paymentData.visa.year,
            paymentData.visa.code,
            paymentData.visa.document
        )
        cy.clickFinishPurchase()
    })
})