function buttonRedirect() {
  cy.get('[data-test="button-option"]').as('button');
  cy.get('@button').should('have.text', 'Botões').click();
  cy.url().should('include', '/cypress/buttons');
}

function changeButtonText() {
  cy.wait(50);
  cy.get('[data-test="confirm-button"]')
    .as('confirm-button')
    .should('have.text', 'Confirmar')
    .click();
  cy.get('@confirm-button').should('have.text', 'Parabéns, gênio!');
}

function changeButtonColor() {
  cy.wait(50);

  cy.get('[data-test="confirm-button"]')
    .as('confirm-button')
    .should('have.text', 'Clique aqui')
    .click()
    .should('have.text', 'Mudou de cor');
  cy.get('@confirm-button').should('have.css', 'background-color');
}
describe('check buttons behaviors on dummy page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(50);
  });

  it('check if button Botões redirects to /buttons', () => {
    buttonRedirect();

    changeButtonText();

    cy.get('[data-test="next-button"]').click();
    cy.url().should('include', 'cypress/buttons/case-2');

    changeButtonColor();
  });
});
