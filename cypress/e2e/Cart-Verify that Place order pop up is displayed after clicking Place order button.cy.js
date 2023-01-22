describe('Test that Place order pop up is displayed after clicking Place order button', () => {
  it('Should validate that Place order pop up is displayed after clicking Place order button', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Cart is displayed and click over it
  cy.contains('a','Cart').click()
  
  //Verify Place Order is displayed and click over it
  cy.contains('button','Place Order').click()
  
  //Verify Place Order is displayed in the pop up as title
  cy.get('h5').contains('Place order').should ('be.visible')

  //Verify if Purchase button is displayed
  cy.get('[onclick="purchaseOrder()"]')
  })
})