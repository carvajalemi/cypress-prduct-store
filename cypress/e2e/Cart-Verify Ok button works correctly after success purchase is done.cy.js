describe('Test Ok button works correctly after success purchase is done', () => {
  it('Should validate  Ok button works correctly after success purchase is done', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Cart is displayed and click over it
  cy.contains('a','Cart').click()
  
  //Verify Place Order is displayed and click over it
  cy.contains('button','Place Order').click()
  
  //Verify Place Order is displayed in the pop up as title
  cy.get('h5').contains('Place order').should ('be.visible')

  cy.wait(1500)
  //Get the Name text field and fill in the Name value
  cy.get('#name').type('ec')
  
  //Get the Credit card text field and fill in the number value
  cy.get('#card').type('123')
  
  //Verify Purchase button is displayed and click on it
  cy.get('[onclick="purchaseOrder()"]').click()

  cy.wait(1500)
  //Verify Ok button is displayed after the purchase is done and click over it
  cy.get('[class="confirm btn btn-lg btn-primary"]').click()

  //Verify after pressing the Ok button, index page is returned
  cy.visit('https://www.demoblaze.com/index.html')

  })
})