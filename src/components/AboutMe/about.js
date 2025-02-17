import styles from "./about.module.css";
import LeetCodeChart from "../LeetCode/chart";

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <h1 className={styles.title}>Hello, I'm Him</h1>
      <p className={styles.description}>Filler data dont stress</p>
      <LeetCodeChart />
    </section>
  );
}
