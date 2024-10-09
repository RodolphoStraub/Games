"use client";
import { useState } from "react";

import styles from "./RockPaperScissors.module.css";

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState("Esperando...");
  const [computerChoice, setComputerChoice] = useState("Esperando...");
  const [result, setResult] = useState("Jogo ainda não iniciado");

  const choices = ["✊", "✋", "✌️"];

  const determineWinner = (player: string, computer: string) => {
    if (player === computer) return "Empate!";
    if (
      (player === "✊" && computer === "✌️") ||
      (player === "✌️" && computer === "✋") ||
      (player === "✋" && computer === "✊")
    ) {
      return "Você venceu!";
    }
    return "Computador venceu!";
  };

  const playGame = (choice) => {
    setPlayerChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    const gameResult = determineWinner(choice, randomChoice);
    setResult(gameResult);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.all}>
          <h1 className={styles.title}>Jogo Pedra, Papel e Tesoura</h1>
          <div className={styles.sub_all}>
            <p className={styles.sub_tile}>Escolha uma opção:</p>
            <div className={styles.all_btn}>
              {choices.map((choice) => (
                <button
                  className={styles.btn}
                  key={choice}
                  onClick={() => playGame(choice)}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
          {playerChoice && (
            <div className={styles.sub_all2}>
              <p className={styles.escolha1}>Você escolheu: {playerChoice}</p>
              <p className={styles.escolha2}>
                Computador escolheu: {computerChoice}
              </p>
              <h2 className={styles.result}>{result}</h2>
            </div>
          )}
        </div>
        <div className={styles.rules_board}>
          <h1 className={styles.rules_title}>Regras:</h1>
          <p className={styles.text}>
            São três elementos: <span className={styles.bold}>pedra, papel e tesoura</span>. A pedra (representada
            pelo punho fechado), papel (mão aberta) e tesoura (os dedos
            indicador e médio formam um V).
            <br /> Cada um dos jogadores apresenta um elemento. Pedra perde para
            papel (o papel embrulha a pedra); papel perde para tesoura (esta
            corta o primeiro); e, finalmente, a tesoura perde para a pedra, que
            a quebra.
          </p>
        </div>
      </div>
    </>
  );
};

export default RockPaperScissors;
