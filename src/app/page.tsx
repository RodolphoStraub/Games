import styles from "./page.module.css";

import RockPaperScissors from "./components/RockPaperScissors";
import CaraOuCoroa from "./components/CaraOuCoroa";
import About from "./components/About";

export default function Home() {
  return (
    <div className={styles.all}>
      <About />
      <RockPaperScissors />
      <CaraOuCoroa />
    </div>
  );
}
