describe('Test X icon works correctly in Contact tab > New message pop up', () => {
  it('Should validate the X icon works correctly in Contact tab > New message pop up', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Contact tab is displayed and click over it
  cy.get('[data-target="#exampleModal"]').click()
  
  //Verify New message text is displayed into the pop up
  cy.wait(1500)
  cy.contains('h5','New message')

  //Verify x option is displayed on the pop up and click over it
  cy.contains('×').should ('be.enabled').click()
  
  //Verify New message pop up is not displayed
  cy.contains('h5','New message').should('not.be.visible')
  })
})