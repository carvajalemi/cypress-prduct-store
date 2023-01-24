describe('Test the delete option under Products page is working correctly', () => {
  it('Should validate the delete option under Products page is working correctly', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Laptops category is displayed and  click over it
  cy.contains ('a', 'Laptops').click()

  //Verify specific product is displayed in the list and click over it
  cy.contains('a','Sony vaio i5').click()

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
  cy.contains('td','Sony vaio i5')
  cy.contains('a','Delete').click()
  })
})