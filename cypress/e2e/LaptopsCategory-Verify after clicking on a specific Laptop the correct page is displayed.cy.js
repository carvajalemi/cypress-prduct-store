describe('Test after clicking on a specific Laptop the correct page is displayed', () => {
  it('Should validate after clicking on a specific Laptop the correct page is displayed', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Laptop category is displayed and  click over it
  cy.contains ('a', 'Laptops').click()

  //Verify specific product is displayed and click over it
  cy.contains('a','Sony vaio i5').click()
  
  //Verify the correct page is loading
  cy.contains('h2','Sony vaio i5')

  })
})