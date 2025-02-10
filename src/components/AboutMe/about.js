import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <h1 className={styles.title}>Hello, I'm [Your Name]</h1>
      <p className={styles.description}>
        Filler data dont stress
      </p>
    </section>
  );
}
