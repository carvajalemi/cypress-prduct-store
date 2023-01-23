describe('Test X icon in Sign up is working correctly', () => {
  it('Should validate that X icon in Sign up is working correctly', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify Log in is displayed and click over it
    cy.get('[id="signin2"]').click()

    //Verify Sign up text is displayed into the pop up
    cy.wait(1500)
    cy.contains('h5','Sign up')

    //Verify x option is displayed on the pop up and click over it
    cy.contains('×').should ('be.enabled').click({force: true})   //not close the pop up

  })
})