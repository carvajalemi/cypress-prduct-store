describe('Test logout option is working correcttly', () => {
  it('Should validate logout option is working correcttly', () => {
    cy.visit('https://www.demoblaze.com/index.html')

     //Verify Log in is displayed and click over it
     cy.get('#login2').click()
    
     //Get the Username text field and fill in the value
    cy.get('#loginusername').type('!7')
    cy.wait(1500)
    //Get the Password text field and fill in the value
    cy.get('#loginpassword').type('C12')
    
    cy.wait(1500)
    //Verify if the Log in button ixist and click over it
    cy.contains('button', 'Log in').click()
    cy.wait(1500)
    
    //Verify log out and Welcome username options are displayed  
    cy.get('#logout2')
    cy.get('#nameofuser')

    //Click over the log out option
    cy.get('#logout2').click()

    //Verify log in and Sign up options are displayed  
    cy.get('#login2')
    cy.get('#signin2')
     

  })
})