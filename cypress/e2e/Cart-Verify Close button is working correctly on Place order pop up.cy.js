describe('Test close button is working correctly on Place order pop up', () => {
  it('Should validate close button is working correctly on Place order pop up', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify Cart tab is displayed and click over it
    cy.get('[id="cartur"]').click()

    //Verify Cart page is displayed
    cy.url().should('include', '/cart.html')

    //Verify click Place Order button
    cy.get('[data-target="#orderModal"]').click()

    //Verify Place Order title is displayed in the pop up
    cy.get('[id="orderModalLabel"]').should ('be.visible')
    
    //Verify the pop up contains the Close button and click over it
    cy.contains('button', 'Close').click();   //this line is not working
       

  })
})