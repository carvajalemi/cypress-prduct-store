describe('Test Add to cart button is working correctly in a Laptop page', () => {
  it('Should validate Add to cart button is working correctly in a Laptop page', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify the Laptops category is displayed click over it
    cy.contains('a','Laptops').click()

    //Verify 'Sony vaio i5' is displaye and click over it
    cy.contains('a','Sony vaio i5').click() 

    //Verify click Add to cart button
    cy.get('[onclick="addToCart(8)"]').click()

    //Checking the window alert text
    cy.on('window:alert',(txt)=>{
        
      expect(txt).to.include('Product added');
      return false;
    });

    //Verify click Cart tab
    cy.get('[id="cartur"]').click()

    //Verify 'Sony vaio i5' is displayed in Products page
    cy.contains('Sony vaio i5').should('be.visible') 
    
  })
})