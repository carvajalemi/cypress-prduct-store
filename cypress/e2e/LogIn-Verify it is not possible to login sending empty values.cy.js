describe('Test that is not posible to login sending empty values', () => {
  it('Should validate that is not posible to login sending empty values', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify Log in is displayed and click over it
    cy.get('[id="login2"]').click()

    //Verify if the Log in button ixist and click over it
    cy.get('[onclick="logIn()"]').click()
    
    //Checking the window alert text
    cy.on('window:alert',(txt)=>{
        
      expect(txt).to.include('Please fill out Username and Password.');
      return false;
    });
  })
})