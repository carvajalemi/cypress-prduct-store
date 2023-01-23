describe('Test that message is displayed after sending empty fields in the Sign up pop up', () => {
  it('Should validate that message is displayed after sending empty fields in the Sign up pop up', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify Log in is displayed and click over it
    cy.get('[id="signin2"]').click()

    //Verify if the Log in button ixist and click over it
    cy.get('[onclick="register()"]').click()
    
    cy.wait(2000)
    //Checking the window alert text
    cy.on('window:alert',(txt)=>{
        
      expect(txt).to.include('Please fill out Username and Password.');
      return false;
    });

  })
})