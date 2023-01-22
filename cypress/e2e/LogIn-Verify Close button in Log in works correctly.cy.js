describe('Test Close button in Log in works correctly', () => {
  it('Should validate Close button in Log in works correctly', () => {
    cy.visit('https://www.demoblaze.com/index.html')

     //Verify Log in is displayed and click over it
     cy.get('#login2').click()

     //Verify Close button is displayed and click over it
     cy.contains('button','Close').click({force: true})  //this line is not working

  })
})