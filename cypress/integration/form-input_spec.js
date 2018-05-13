describe('Form Input', function () {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Focues the input on load', () => {
        cy.visit('/');
        cy.focused().should('have.id', 'cityInputForm');
    })

    it('Accepts Input', () => {
        cy.visit('/');
        cy.get("#cityInputForm").type('Coimbatore').should('have.value', 'Coimbatore');
    })
});