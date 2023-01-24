describe('Test Next and Previous button are working correctly on phones page', () => {
  it('Should validate Next and Previous button are working correctly on phones page', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Phones category is displayed and  click over it
  cy.contains ('a', 'Phones').click()

  //Verify Next button is displayed on the phone page
  cy.contains('button', 'Next').click()

  //Verify Previous button is displayed on the phone page
  cy.contains('button', 'Previous').click()
  })
})