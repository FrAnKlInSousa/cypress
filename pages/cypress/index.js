import styles from './index.module.css';

import clsx from 'clsx';

export default function Cypress() {
  return (
    <div data-test="container" className={clsx(styles.container)}>
      <div>
        <h1 data-test="title">Página dummy para treinar automações</h1>
        <h2 data-test="instructions">
          Escolha abaixo o tópico que deseja treinar
        </h2>
      </div>

      <div data-test="studyContents" className={clsx(styles.studyContents)}>
        <a href="/cypress/forms">
          <button data-test="form-option" className={clsx(styles.button)}>
            Formulários
          </button>
        </a>
        <a href="/cypress/buttons">
          <button data-test="button-option" className={clsx(styles.button)}>
            Botões
          </button>
        </a>
        <a href="/cypress/radio-buttons">
          <button data-test="radio-option" className={clsx(styles.button)}>
            Radio buttons
          </button>
        </a>
        <a href="/cypress/toggles">
          <button data-test="toggle-option" className={clsx(styles.button)}>
            Toggles
          </button>
        </a>
        <a href="/cypress/checkboxes">
          <button data-test="checkbox-option" className={clsx(styles.button)}>
            Checkboxes
          </button>
        </a>
        <a href="/cypress/dropdowns">
          <button data-test="dropdown-option" className={clsx(styles.button)}>
            Dropdown
          </button>
        </a>
      </div>
    </div>
  );
}
