import { useState, useEffect } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

export default function CaseThree() {
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheckBoxChange = (e) => {
    const isChecked = e.target.checked;

    setChecked(isChecked);

    if (!isChecked) {
      setClicked(false);
    }
  };

  return (
    <div className={clsx(styles.container)}>
      <h1>Cenários de testes com botões</h1>
      <h2>Caso 3</h2>
      <div className={clsx(styles.externalBox)}>
        <div className={clsx(styles.internalBox)}>
          <p className={clsx(styles.paragraph)}>
            Habilite o botão para poder clicar:
          </p>
          <div className={clsx(styles.lineOptions)}>
            <div>
              <input
                id="situacao"
                type="checkbox"
                name="situacao"
                checked={checked}
                onChange={handleCheckBoxChange}
              ></input>
              <label className={clsx(styles.label)} htmlFor="situacao">
                habilitar
              </label>
            </div>
            <button
              disabled={!checked}
              data-test="button"
              className={clsx(styles.button, {
                [styles.disabled]: !checked,
              })}
              onClick={() => setClicked(true)}
            >
              {clicked ? 'Clicou!' : 'Clique aqui'}
            </button>
          </div>
        </div>
        <div className={clsx(styles.nextContainer)}>
          <a href="/cypress/buttons/case-2">
            <button data-test="next-button" className={clsx(styles.button)}>
              Voltar
            </button>
          </a>
          <a href="#">
            <button data-test="next-button" className={clsx(styles.button)}>
              Próximo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
