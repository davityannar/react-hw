describe('Sorting section', function() {

    it('Checking   input ', function() {
      cy.visit('http://localhost:9000');
      cy.get('.sort-filters input#release').should('be.checked');
      cy.get('.sort-filters input#rating').should('not.be.checked');
    //   cy.contains("movies");
    })

    it('Checking that after clicking on "rating" input it is "checked" and first on is "unchecked"', () => {

        
        cy.visit('http://localhost:9000/')
    
        cy.get('.sort-filters input#rating').click({force: true}).should('be.checked');
        cy.get('.sort-filters input#release').should('not.be.checked');
      })
    
  });