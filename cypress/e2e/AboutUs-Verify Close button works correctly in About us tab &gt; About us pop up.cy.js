describe('Close button works correctly in About us pop up', () => {
  it('Should validate Close button works correctly in About us tab-About us pop up', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify About Us is displayed and click on it
    cy.get('[data-target="#videoModal"]').click()

    //Verify About us pop up is displayed
    cy.contains('h5','About us').should('be.visible')

    //Verify the pop up contains the Close button and click over it
    cy.contains('button', 'Close').click();   //this line is not working
    


  })
})