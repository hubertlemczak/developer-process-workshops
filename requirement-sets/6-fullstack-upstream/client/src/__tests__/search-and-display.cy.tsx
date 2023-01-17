import '';

describe('Places', () => {
  describe('Search for a place', () => {
    describe('Given the user has entered a valid place id', () => {
      it('should display place details', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.search input').type('GXvPAor1ifNfpF0U5PTG0w');
        cy.get('.search button').click();

        cy.get('.left h1').contains('Casa Ferlin');
        cy.get('.left p').contains('Stampfenbachstrasse 38, 8006 Zürich');
      });
    });
  });
});
