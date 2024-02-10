describe('App E2E Tests', () => {
  it('renders PlayersContainer component at startup', () => {
    cy.visit('/');
    cy.get('[data-testid=players-container]').should('exist');
  });

  it('does not render MatchsContainer component at startup if no player is selected', () => {
    cy.visit('/');
    cy.get('[data-testid=matchs-container]').should('not.exist');
  });

  it('renders MatchsContainer component when a player is selected', () => {
    cy.visit('/');

    // Sélectionnez un joueur (assurez-vous d'ajuster en fonction de votre application)
    // Par exemple, vous pourriez cliquer sur un élément avec une classe spécifique liée à un joueur
    cy.get('.player-card').first().click();

    // Assurez-vous que MatchsContainer est maintenant rendu
    cy.get('[data-testid=matchs-container]').should('exist');
  });
});