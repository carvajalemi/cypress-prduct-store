describe('Test Close button in Sign up works correctly', () => {
  it('Should validate Close button in Sign up works correctly', () => {
    cy.visit('https://www.demoblaze.com/index.html')
 
    //Verify Sign up is displayed and click over it
 cy.get('#signin2').click()

 //Verify Close button is displayed and click over it
 cy.contains('button','Close').click({force: true})  //this line is not working

  })
})