const BASE_URL = 'localhost:5173/';

describe('Simple E2E Test', () => {
	it('visit website', () => {
		cy.visit(BASE_URL);
	});

	it('contain header', () => {
		cy.visit(BASE_URL);

		cy.get('h1').contains('TOTORO');
	});

	it('contain searchbar', () => {
		cy.visit(BASE_URL);

		cy.get('.searchBar').contains('Search');
	});

	it('contain cards', () => {
		cy.visit(BASE_URL);

		cy.get('.filmCard').contains('Minutes');
	});

	it('contain 10 cards per page', () => {
		cy.visit(BASE_URL);

		cy.get('.filmCard').should('have.length', 10);
	});

	it('contain page nav', () => {
		cy.visit(BASE_URL);

		cy.get('nav').contains('1');
	});

	it('can navigate to film detail page', () => {
		cy.visit(BASE_URL);

		cy.get('.filmCard').first().click();
		cy.url().should('include', '/film/');
	});

	it('has film details', () => {
		cy.visit(BASE_URL+'film/2baf70d1-42bb-4437-b551-e5fed5a87abe');

		cy.get('h1').contains('Castle in the Sky');
	});

	it('can search', () => {
		cy.visit(BASE_URL);

		cy.get('input').type('the wind rises 2002');
		cy.get('button').contains('Search').click();

		cy.get('.filmCard').should('have.length', 2);
		cy.get('.filmCard').first().contains('2002');
		cy.get('.filmCard').last().contains('The Wind Rises');
	});

	it('can navigate pages', () => {
		cy.visit(BASE_URL);
		cy.get('nav').contains('2').click();
		cy.url().should('include', '/2');
		cy.get('nav').contains('3').click();
		cy.url().should('include', '/3');
		cy.get('.filmCard').should('have.length', 2);
	});
});
