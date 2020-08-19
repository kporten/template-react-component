describe('Component', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=component--basic&');
  });

  it('displays the correct headline', () => {
    cy.findByText(/test/).should('be.visible');
  });
});
