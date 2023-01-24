describe('Test Add to cart is working correctly', () => {
  it('Should validate the add to cart is working correctly', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Monitors category is displayed and  click over it
  cy.contains ('a', 'Monitors').click()

  //Verify specific product is displayed in the list and click over it
  cy.contains('a','Apple monitor 24').click()

  //Add to cart the phone
  cy.contains('a','Add to cart').click()

  //Checking the window alert text
  cy.on('window:alert',(txt)=>{
    
    expect(txt).to.include('Product added');
    return false;
  });
  
  //Verify Cart is displayed and click over it
  cy.contains('a','Cart').click()

  //Verify the product is displayed in the Cart page and click on the delete button
  cy.contains('td','Apple monitor 24')
  cy.contains('a','Delete').click()
  })
})