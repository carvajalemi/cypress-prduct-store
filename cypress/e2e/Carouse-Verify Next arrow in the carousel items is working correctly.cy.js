describe('Test Next arrow in the carousel items is working correctly', () => {
  it('Should validate Next arrow in the carousel items is working correctly', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Carousel is displayed
  cy.get('[href="#carouselExampleIndicators"]')

  //Verify > works correctly
  cy.contains ('a', 'Next').click()

  })
})