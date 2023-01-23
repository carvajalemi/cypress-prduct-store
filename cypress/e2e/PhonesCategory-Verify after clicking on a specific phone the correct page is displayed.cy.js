describe('Test after clicking on a specific phone the correct page is displayed', () => {
  it('Should validate after clicking on a specific phone the correct page is displayed', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify the Phones category is displayed click over it
    cy.contains('Phones').should('be.visible')
    cy.contains('a','Phones').click()

    //Verify 'Nokia lumia 1520' is displaye and click over it
    cy.contains('a','Nokia lumia 1520').click() 

    //Verify 'Nokia lumia 1520' page is displayed'(Url, Title, Button)
    cy.url().should('include', '/prod.html?idp_=2')
    cy.contains('h2', 'Nokia lumia 1520').should('be.visible')
    cy.get('[onclick="addToCart(2)"]').should('be.visible')

  })
})