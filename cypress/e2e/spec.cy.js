describe('Simple E2E Test', () => {
  it('visit website', ()=>{
    cy.visit('localhost:5173/')

  })

  it('contain header', ()=>{
    cy.visit('localhost:5173/')

    cy.get('h1').contains('TOTORO')
  })

  it('contain searchbar', ()=>{
    cy.visit('localhost:5173/')

    cy.get('.searchBar').contains('Search')
  })

  it('contain cards', ()=>{
    cy.visit('localhost:5173/')

    cy.get('.filmCard').contains('Minutes')
  })


  it('contain 10 cards per page', ()=>{
    cy.visit('localhost:5173/')

    cy.get('.filmCard').should('have.length', 10)
  })

  it('contain page nav', ()=>{
    cy.visit('localhost:5173/')

    cy.get('nav').contains('1')
  })

  it('can navigate to film detail page', ()=>{
    cy.visit('localhost:5173/')

    cy.get('.filmCard').first().click()
    cy.url().should('include', '/film/')
  })

  it('has film details', ()=>{
    cy.visit('http://localhost:5174/film/2baf70d1-42bb-4437-b551-e5fed5a87abe')

    cy.get('h1').contains('Castle in the Sky')
    
  })

  it('can search', () =>{
    cy.visit('localhost:5173/')

    cy.get('input').type('the wind rises 2002')
    cy.get('button').contains('Search').click()

    cy.get('.filmCard').should('have.length', 2)
    cy.get('.filmCard').first().contains('2002')
    cy.get('.filmCard').last().contains('The Wind Rises')

  })

  it('can navigate pages', () => {
    cy.visit('localhost:5173/')
    cy.get('nav').contains('2').click()
    cy.url().should('include', '/2')
    cy.get('nav').contains('3').click()
    cy.url().should('include', '/3')
    cy.get('.filmCard').should('have.length', 2)

  })


})