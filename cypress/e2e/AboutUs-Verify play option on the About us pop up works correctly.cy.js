describe('Test play option on the About us pop up works correctly', () => {
  it('Should validate the play option on the About us pop up works correctly', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    //Verify Contact Us is displayed and click over it
    cy.get('[data-target="#videoModal"]').click()
    
    //Verify the video is displayed in the About us pop up and click to reproduce it
    cy.get('[class="vjs-big-play-button"]').click()
    
    cy.wait(1500)
    //Pause the video
    cy.get('[class="vjs-play-control vjs-control vjs-button vjs-playing"]').click()
    
    //Click on the x option 
    cy.contains('button', 'Close').click({force: true}); //this line is not eorking
    
  })
})