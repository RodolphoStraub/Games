"use client";
import { useState } from "react";

import styles from "./RockPaperScissors.module.css";

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

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
  );
};

export default RockPaperScissors;
