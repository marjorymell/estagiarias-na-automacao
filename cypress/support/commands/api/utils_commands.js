/*EXEMPLOS
Cypress.Commands.add('getVercelCookieValue', (cookieName) => {
  cy.request({
    method: 'POST',
    url: Cypress.config('baseUrl'),
    headers: {},
    body: '_vercel_password=American@s',
  }).then((response) => {
    expect(response.status).to.eq(200)

    cy.getCookie(cookieName).then((cookie) => {
      return cookie.value
    })
  })
})

Cypress.Commands.add('setVercelCookie', (cookieName, value) => {
  cy.setCookie(cookieName, value)
})*/
