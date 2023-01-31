describe('Test about us pop up is displayed after clicking about us tab', () => {
  it('Should validate about us pop up is displayed after clicking about us tab', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify About Us is displayed and click on it
    cy.get('[data-target="#videoModal"]').click()

    //Verify About us pop up is displayed
  cy.contains('h5','About us').should('be.visible')

  /// this is  change
  
  })
})