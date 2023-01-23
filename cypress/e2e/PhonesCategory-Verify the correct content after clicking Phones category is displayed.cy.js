describe('Test the correct content after clicking Phones category is displayed', () => {
  it('Should validate the correct content after clicking Phones category is displayed', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify the Phones category is displayed click over it
    cy.contains('Phones').should('be.visible');
    cy.contains('a','Phones').click()

    //Verify the Phones displayed
    cy.contains('a', 'Samsung galaxy s6').should('be.visible')
    cy.contains('a', 'Nokia lumia 1520').should('be.visible')
    cy.contains('a', 'Nexus 6').should('be.visible')
    cy.contains('a', 'Samsung galaxy s7').should('be.visible')
    cy.contains('a', 'Iphone 6 32gb').should('be.visible')
    cy.contains('a', 'Sony xperia z5').should('be.visible')
    cy.contains('a', 'HTC One M9').should('be.visible')

    //Verify product different to phones are not displayed
    cy.contains('Sony vaio i5').should('not.exist')
    cy.contains('a', 'Sony vaio i7').should('not.exist')
    
    //Verify Previous button displayed
    cy.get('[id="prev2"]').should('be.visible')
    cy.get('[id="next2"]').should('be.visible')

  })
})