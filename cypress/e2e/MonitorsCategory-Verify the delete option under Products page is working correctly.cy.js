describe('Test delete a Monitor product added under Productos page', () => {
  it('Should validate delete a Monitor product added under Productos page', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify the Monitors category is displayed click over it
    cy.contains('a','Monitors').click()

    //Verify 'ASUS Full HD' is displaye and click over it
    cy.contains('a','ASUS Full HD').click() 

    //Verify click Add to cart button
    cy.get('[onclick="addToCart(14)"]').click()

    //Checking the window alert text
    cy.on('window:alert',(txt)=>{
        
      expect(txt).to.include('Product added');
      return false;
    });

    //Verify click Cart tab
    cy.get('[id="cartur"]').click()

    //Verify 'ASUS Full HD' is displayed
    cy.contains('ASUS Full HD').should('be.visible') 

    //Verify click delete link
    cy.contains('a', 'Delete').click()

    //Verify 'ASUS Full HD' is not displayed
    cy.contains('ASUS Full HD').should('not.exist') 
    
  })
})