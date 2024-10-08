describe('Get All Products', () =>{
    it('Get All Products', () => {
        cy.request('GET','api/productsList')
        .then((response) => {
           expect(response.status).to.eq(200)
           
        })
    })
})