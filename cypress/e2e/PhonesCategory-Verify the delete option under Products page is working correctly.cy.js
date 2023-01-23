describe('Test delete a product added under Productos page', () => {
  it('Should validate delete a product added under Productos page', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify the Phones category is displayed click over it
    cy.contains('a','Phones').click()

    //Verify 'Nokia lumia 1520' is displaye and click over it
    cy.contains('a','Nokia lumia 1520').click() 

    //Verify click Add to cart button
    cy.get('[onclick="addToCart(2)"]').click()

    //Checking the window alert text
    cy.on('window:alert',(txt)=>{
        
      expect(txt).to.include('Product added');
      return false;
    });

    //Verify click Cart tab
    cy.get('[id="cartur"]').click()

    //Verify 'Nokia lumia 1520' is displayed
    cy.contains('Nokia lumia 1520').should('be.visible') 

    //Verify click delete link
    cy.contains('a', 'Delete').click()

    //Verify 'Nokia lumia 1520' is not displayed
    cy.contains('Nokia lumia 1520').should('not.exist') 

  })
})