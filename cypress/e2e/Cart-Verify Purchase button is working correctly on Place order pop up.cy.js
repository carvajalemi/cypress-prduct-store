describe('Test purchase button is working correctly on Place order pop up', () => {
  it('Should validate purchase button is working correctly on Place order pop up', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify Cart tab is displayed and click over it
    cy.get('[id="cartur"]').click()

    //Verify Cart page is displayed
    cy.url().should('include', '/cart.html')

    //Verify click Place Order button
    cy.get('[data-target="#orderModal"]').click()

    //Verify Place Order title is displayed in the pop up
    cy.get('[id="orderModalLabel"]').should ('be.visible')

    //Fill the Name value in Name field
    cy.get('[id="name"]').type('test Name')

    //Fill the number value in Credit card field
    cy.get('[id="card"]').type('123')
  
    //Verify Purchase button is displayed and click on it
    cy.get('[onclick="purchaseOrder()"]').click()
    cy.wait(5000)
    //Verify Ok button is displayed after clicking Purchase Order button
    cy.contains('OK').should('be.visible')

  })
})