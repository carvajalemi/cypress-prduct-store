describe('Test Home content page', () => {
  it('Should validate the Home content page', () => {
    cy.visit('https://www.demoblaze.com/index.html')
  
  //Verify tabs 
  cy.contains('Home')
  cy.contains('Contact')
  cy.contains('About us')
  cy.contains('Cart')
  cy.contains('Log in')
  cy.contains('Sign up')

  //Verify the Categories
  cy.contains('CATEGORIES').should('have.attr', 'id','cat')
  cy.contains('Phones').should('have.attr', 'id','itemc')
  cy.contains('Laptops').should('have.attr', 'id','itemc')
  cy.contains('Monitors').should('have.attr', 'id','itemc')
  
  //Verify the Carrousel section is displayed
  cy.get('#contcar')

  //Verify the arrows are displayed on the Carrousel section
  cy.get('[href="#carouselExampleIndicators"]')
  cy.contains('Next')
  cy.contains('Previous')
  
  //Verify Previous and Next buttons on the Home page
  cy.contains('button', 'Next')
  cy.contains('button','Previous')

  })
})