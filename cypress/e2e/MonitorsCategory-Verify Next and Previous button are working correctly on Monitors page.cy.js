describe('Test Next and Previous button are working correctly on monitors page', () => {
  it('Should validate Next and Previous button are working correctly on monitors page', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Monitors category is displayed and  click over it
  cy.contains ('a', 'Monitors').click()

  //Verify Next button is displayed on the phone page
  cy.contains('button', 'Next').click()

  //Verify Previous button is displayed on the phone page
  cy.contains('button', 'Previous').click()
  })
})