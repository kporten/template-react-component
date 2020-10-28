// https://storybook.js.org/docs/react/workflows/interaction-testing
describe('Component', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=component--basic');
  });

  it('should display the correct headline', () => {
    cy.findByText('test').should('be.visible');
  });
});
