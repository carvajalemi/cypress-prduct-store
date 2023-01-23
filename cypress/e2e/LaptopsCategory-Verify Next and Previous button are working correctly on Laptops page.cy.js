describe('Test Next and Previous button are working correctly on Laptops page', () => {
  it('Should validate that Next and Previous button are working correctly on Laptops page', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify the Laptops category is displayed click over it
    cy.contains('a','Laptops').click()

    //Verify Previous button displayed and click over it
    cy.get('[id="prev2"]').should('be.visible')
    cy.get('[id="prev2"]').click()

    //Verify Next button displayed and click over it
    cy.get('[id="next2"]').should('be.visible')
    cy.get('[id="next2"]').click()

  })
})