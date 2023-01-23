describe('Test after clicking on a specific Monitor the correct page is displayed', () => {
  it('Should validate after clicking on a specific Monitor the correct page is displayed', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify the Monitors category is displayed click over it
    cy.contains('Monitors').should('be.visible');
    cy.contains('a','Monitors').click()

    //Verify 'ASUS Full HD' is displaye and click over it
    cy.contains('a','ASUS Full HD').click() 

    //Verify 'ASUS Full HD' page is displayed'(Url, Title, Button)
    cy.url().should('include', '/prod.html?idp_=14')
    cy.contains('h2', 'ASUS Full HD').should('be.visible')
    cy.get('[onclick="addToCart(14)"]').should('be.visible')

  })
})