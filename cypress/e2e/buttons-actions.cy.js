function buttonRedirect() {
  cy.get('[data-test="button-option"]').as('button');
  cy.get('@button').should('have.text', 'Botões');
  cy.get('@button').click();
}

function changeButtonText() {
  cy.get('[data-test="confirm-button"]')
    .as('confirm-button')
    .should('have.text', 'Confirmar')
    .click();
}

function changeButtonColor() {
  cy.get('[data-test="confirm-button"]')
    .as('confirm-button')
    .should('have.text', 'Clique aqui')
    .click()
    .should('have.text', 'Mudou de cor');
}
describe('check buttons behaviors on dummy page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check if button Botões redirects to /buttons', () => {
    buttonRedirect();
    cy.url().should('include', '/cypress/buttons');

    changeButtonText();
    cy.get('@confirm-button').should('have.text', 'Parabéns, gênio!');

    cy.get('[data-test="next-button"]').click();
    cy.url().should('include', 'cypress/buttons/case-2');

    changeButtonColor();
    cy.get('@confirm-button').should('have.css', 'background-color');
  });
});
