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
  cy.wait(50);
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

function changeDisableButtonToEnable() {
  cy.wait(50);
  cy.get('[data-test="button"]')
    .as('button')
    .should('have.text', 'Clique aqui');
  cy.get('@button').should('be.disabled');

  cy.get('[data-test="checkbox"]').check();
  cy.get('@button').should('be.enabled').click().should('have.text', 'Clicou!');

  cy.get('[data-test="checkbox"]').uncheck();
  cy.get('@button').should('be.disabled').should('have.text', 'Clique aqui');
}

describe('check buttons behaviors on dummy page', () => {
  it('check if button changes the text value', () => {
    cy.visit('buttons');
    changeButtonText();
  });

  it('check if color button changes', () => {
    cy.visit('buttons/case-2');
    changeButtonColor();
  });

  it.only('check the state changes of disabled button', () => {
    cy.visit('buttons/case-3');
    changeDisableButtonToEnable();
  });
});
