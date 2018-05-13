describe('Basic Sanity', function () {
    it('Assert that <title> is correct', () => {
        cy.visit('/')
        cy.title().should('include', 'Weather-Act')
    });
});