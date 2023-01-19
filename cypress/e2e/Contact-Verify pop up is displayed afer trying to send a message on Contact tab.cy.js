describe('Test pop up is displayed after Sending a message on Cntact tab', () => {
  it('Should validate the pop up is displayed after Sending a message on Cntact tab', () => {
    cy.visit('https://www.demoblaze.com/index.html')
  

  //Verify the Contact tab is displayed and click over it
  cy.get ('[data-target="#exampleModal"]').click();

  //Verify the pop up is visible
  cy.contains('Contact Email').should("be.visible");
  
  //Verify the content of the pop up contains the text New message
  cy.get('h5').contains('New message');
  
  //Verify the the pop up contains the Send Message button and click over it
  cy.get('[onclick="send()"]').click();
 
  //Checking the window alert text
  cy.on('window:alert',(txt)=>{
    
  cy.on('uncaught:exception', (err, runnable) => {
      //PS-7878-Error with an compoenet of the page or the app ...... this is deprecated, this will be updated
      //console.log('ERROR UNhandled exception: '+err);
      //Assertion
      expect(txt).to.include('Thanks for the message!!');
      return false;
    });
  })
})
})