describe('Test the correct content after clicking Monitors category is displayed', () => {
  it('Should validate the correct content after clicking Monitors category is displayed', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify the Monitors category is displayed click over it
    cy.contains('Monitors').should('be.visible');
    cy.contains('a','Monitors').click()

    //Verify the Monitors displayed
    cy.contains('a', 'Apple monitor 24').should('be.visible')
    cy.contains('a', 'ASUS Full HD').should('be.visible')

    //Verify product different to Monitors are not displayed
    cy.contains('Sony vaio i5').should('not.exist')
    cy.contains('a', 'Sony vaio i7').should('not.exist')
    
    //Verify Previous button displayed
    cy.get('[id="prev2"]').should('be.visible')
    cy.get('[id="next2"]').should('be.visible')

  })
})