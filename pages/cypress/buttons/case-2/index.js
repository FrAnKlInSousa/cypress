import { useState, useEffect } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

export default function CasoDois() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={clsx(styles.container)}>
      <h1>Cenários de testes com botões</h1>
      <h2>Caso 2</h2>
      <div className={clsx(styles.externalBox)}>
        <div className={clsx(styles.internalBox)}>
          <p data-test="instruction" className={clsx(styles.paragraph)}>
            Mudar a cor do botão para roxo:
          </p>
          <button
            data-test="confirm-button"
            className={clsx(styles.button, {
              [styles.purple]: clicked,
            })}
            onClick={() => setClicked(true)}
          >
            {clicked ? 'Mudou de cor' : 'Clique aqui'}
          </button>
        </div>
        <div className={clsx(styles.nextContainer)}>
          <a href="/cypress/buttons/">
            <button data-test="next-button" className={clsx(styles.button)}>
              Voltar
            </button>
          </a>
          <a href="/cypress/buttons/case-3">
            <button data-test="next-button" className={clsx(styles.button)}>
              Próximo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
