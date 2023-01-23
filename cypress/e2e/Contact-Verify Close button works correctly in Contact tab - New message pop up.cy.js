describe('Close button works correctly in New Message pop up', () => {
  it('Should validate Close button works correctly in Contact tab-New message pop up', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify the Contact tab is displayed and click over it
  cy.get ('[data-target="#exampleModal"]').click();

  //Verify the pop up is visible and contains the text New message
  cy.get('h5').contains('New message').should("be.visible");
  
  //Verify the pop up contains the Close button and click over it
  cy.contains('button', 'Close').click();
    
   cy.on('uncaught:exception', (err, runnable) => {
        //PS-7878-Error with an compoenet of the page or the app ...... this is deprecated, this will be updated
        //console.log('ERROR UNhandled exception: '+err);
        //Assertion
       return false;
   });

  //Verify back to Home page
  cy.url().should('include', '/index.html');

  })
})