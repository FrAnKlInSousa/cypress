import styles from './index.module.css';
import clsx from 'clsx';
import { useState } from 'react';

export default function Buttons() {
  const [label, setLabel] = useState('Confirmar');

  return (
    <div className={clsx(styles.container)}>
      <h1>Cenários de testes com botões</h1>
      <h2>Caso 1</h2>
      <div className={clsx(styles.externalBox)}>
        <div className={clsx(styles.internalBox)}>
          <p className={clsx(styles.paragraph)}>
            Mudar texto do botão ao clicar:
          </p>
          <button
            data-test="confirm-button"
            className={clsx(styles.button)}
            onClick={() => setLabel('Parabéns, gênio!')}
          >
            {label}
          </button>
        </div>
        <div className={clsx(styles.nextContainer)}>
          <a href="/cypress">
            <button data-test="previous-button" className={clsx(styles.button)}>
              Voltar
            </button>
          </a>
          <a href="./buttons/case-2">
            <button data-test="next-button" className={clsx(styles.button)}>
              Próximo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
