describe('Test the correct content after clicking Laptops category is displayed', () => {
  it('Should validate the correct content after clicking Laptops category is displayed', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Laptop category is displayed and  click over it
  cy.contains ('a', 'Laptops').click()

  //Verify specific products are displayed in the list 
  cy.contains('a','Sony vaio i5')
  cy.contains('a','MacBook Pro')

  })
})