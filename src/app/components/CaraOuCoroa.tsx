"use client";
import { useState } from "react";

import styles from "./CaraOuCoroa.module.css";

const CaraOuCoroa = () => {
  const [choice, setChoice] = useState<string>("");
  const [result, setResult] = useState<
    "cara" | "coroa" | "Esperando você jogar"
  >("Esperando você jogar");
  const [mensagem, setMensagem] = useState<string>("Ainda não definido");

  const play = () => {
    const gameResult = Math.random() < 0.5 ? "cara" : "coroa";
    setResult(gameResult);

    if (choice === gameResult) {
      setMensagem("Você acertou!");
    } else {
      setMensagem("Você errou.");
    }
  };

  const handleChoice = (e) => {
    setChoice(e.target.value);
    setMensagem("");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.all}>
          <h1 className={styles.title}>Cara ou Coroa</h1>
          <label className={styles.sub_title}>
            Escolha:
            <select
              className={styles.choice}
              value={choice}
              onChange={handleChoice}
            >
              <option className={styles.option} value="">Escolha</option>
              <option className={styles.option} value="cara">Cara</option>
              <option className={styles.option} value="coroa">Coroa</option>
            </select>
          </label>
          <button className={styles.btn} onClick={play} disabled={!choice}>
            Jogar
          </button>
          {result && (
            <>
              <p className={styles.result}>Resultado: {result}</p>
              <p className={styles.escolha}>{mensagem}</p>
            </>
          )}
        </div>
        <div className={styles.rules_board}>
          <h1 className={styles.rules_title}>Regras:</h1>
          <p className={styles.text}>
            No jogo Cara ou Coroa, quem vence? A resposta é deveras simples: nas
            moedas de real, a “cara” é o lado que tem um rosto; e a “coroa” é o
            outro lado, o do valor da moeda, mesmo sem coroa.
          </p>
        </div>
      </div>
    </>
  );
};

export default CaraOuCoroa;
