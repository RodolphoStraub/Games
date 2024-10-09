import styles from "./page.module.css"

import RockPaperScissors from "./components/RockPaperScissors";
import CaraOuCoroa from "./components/CaraOuCoroa";

export default function Home() {
  return (
    <div className={styles.all}>
    <RockPaperScissors/>
    <CaraOuCoroa/>
    </div>
  );
}
