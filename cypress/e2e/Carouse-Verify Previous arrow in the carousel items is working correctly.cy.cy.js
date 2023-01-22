describe('Test Previous arrow in the carousel items is working correctly', () => {
  it('Should validate Prevous arrow in the carousel items is working correctly', () => {
    cy.visit('https://www.demoblaze.com/index.html')

  //Verify Carousel is displayed
  cy.get('[href="#carouselExampleIndicators"]')

  //Verify < works correctly
  cy.contains ('a', 'Previous').click()

  })
})