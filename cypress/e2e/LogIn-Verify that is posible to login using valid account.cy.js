describe('Test that is posible to login using valid account', () => {
  it('Should validate that is posible to login using valid account', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify Log in is displayed and click over it
    cy.get('[id="login2"]').click()
    
    //Get the Username text field and fill in the value
    cy.get('[id="loginusername"]').type('Sheila')
    cy.wait(1500)
    //Get the Password text field and fill in the value
    cy.get('[id="loginpassword"]').type('Sheila')
   
    //Verify if the Log in button ixist and click over it
    cy.get('[onclick="logIn()"]').click()
    cy.wait(5000)
    //Verify Log out and Welcome are displayed after log in
    cy.get('[id="logout2"]').should('exist')
    cy.get('[id="nameofuser"]').should('exist')

  })
})