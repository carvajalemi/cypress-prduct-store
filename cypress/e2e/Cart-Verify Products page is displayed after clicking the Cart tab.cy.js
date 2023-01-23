describe('Test products page is displayed after clicking Carts tab', () => {
  it('Should validate products page is displayed after clicking Carts tab', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify Cart tab is displayed and click over it
    cy.get('[id="cartur"]').click()

    //Verify Cart page is displayed
    cy.url().should('include', '/cart.html')

    //Verify Products is displayed in the pop up as title
    cy.get('h2').contains('Products').should ('be.visible')

    //Verify table of products and Place Order button are displayed in the page
    cy.contains('Pic').should('be.visible')
    cy.contains('Title').should('be.visible')
    cy.contains('Price').should('be.visible')
    cy.contains('x').should('be.visible')
    cy.get('[data-target="#orderModal"]').should('be.visible')

  })
})