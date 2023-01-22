describe('Test it is not possible to login using invalid account', () => {
  it('Should validate it is not possible to login using invalid account', () => {
    cy.visit('https://www.demoblaze.com/index.html')

     //Verify Log in is displayed and click over it
     cy.get('#login2').click()

     //Get the Username text field and fill in the value
     cy.get('#loginusername').type('ec')

     //Get the Password text field and fill in the value
     cy.get('#loginpassword').type('123')

     cy.contains('button', 'Log in').click()
    
     //Checking the window alert text
      cy.on('window:alert',(txt)=>{
        
        expect(txt).to.include('User does not exist.');
        return false;
      });
     
  })
})