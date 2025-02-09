import styles from './page.module.css';
import "/Users/vivanverma/Documents/Port/UpdatedPortfolio/src/styles/global.css"

export default function Page() {
  return (
    <main className={styles.main}>
      {/* Home */}
      <section id="home" className={styles.home}>
        <h1 className={styles.homeTitle}>
          Hello, I’m <span className={styles.homeHighlight}>Vivan.</span>
        </h1>
        <p className={styles.homeDescription}>I’m a full stack web developer.</p>
        <a href="#about" className={styles.learnMoreButton}>
          Learn more <span>↓</span>
        </a>
      </section>

      {/* About  */}
      <section id="about" className={styles.about}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutDescription}>
          I’m a full-stack developer with a passion for creating beautiful and
          functional web experiences.
        </p>
        <a href="#projects" className={styles.learnMoreButton}>
          See my projects <span>↓</span>
        </a>
      </section>

      {/* Projects  */}
      <section id="projects" className={styles.projects}>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        <p className={styles.projectsDescription}>
          Check out some of my latest projects below!
        </p>
        <a href="#contact" className={styles.learnMoreButton}>
          Contact Me <span>↓</span>
        </a>
      </section>

      {/* Contact  */}
      <section id="contact" className={styles.contact}>
        <h2 className={styles.contactTitle}>Contact Me</h2>
        <p className={styles.contactDescription}>Let’s work together!</p>
        <a href="mailto:vivan@example.com" className={styles.contactButton}>
          Email Me
        </a>
      </section>
    </main>
  );
}
