describe('Test that message is displayed after trying to do the purchase without fill in required data', () => {
  it('Should validate that message is displayed after trying to do the purchase without fill in required data', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Cart is displayed and click over it
  cy.contains('a','Cart').click()
  
  //Verify Place Order is displayed and click over it
  cy.contains('button','Place Order').click()
  
  //Verify Place Order is displayed in the pop up as title
  cy.get('h5').contains('Place order').should ('be.visible')

  //Verify if Purchase button is displayed
  cy.get('[onclick="purchaseOrder()"]').click()

  //Checking the window alert text
  cy.on('window:alert',(txt)=>{
    
    expect(txt).to.include('Please fill out Name and Creditcard.');
    return false;
  });
  })
})