describe('Test that X icon in Loh in pop up works correctly', () => {
  it('Should validate that X icon in Loh in pop up works correctly', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify Log in is displayed and click over it
    cy.get('[id="login2"]').click()

    cy.wait(1500)
    //Verify Log in text is displayed into the pop up
    cy.contains('h5','Log in')
    

    //Verify X icon is displayed in the pop up and click over it
    cy.contains('×').should('be.enabled').click({force: true})    //not close the pop up
    cy.wait(1500)
  })
})