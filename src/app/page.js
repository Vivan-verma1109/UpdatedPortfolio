"use client";
import { useRef } from "react";
import AboutMe from "../components/AboutMe/about.js";
import Projects from "../components/Projects/projects.js";
import Contacts from "../components/Contacts/contacts.js";
import styles from "./page.module.css";

export default function Page() {
  const projectsRef = useRef(null);

  const handleScroll = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Home Section */}
      <section className={styles.home}>
        <div className={styles.section}>
          <h1 className={styles.homeTitle}>
            Hello, I'm <span className={styles.homeHighlight}>Vivan</span>.
          </h1>
          <h2 className={styles.homeDescription}>I'm a full-stack web developer.</h2>
          <button className={styles.learnMoreButton} onClick={handleScroll}>
            View my work ↓
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contacts />
      </section>
    </>
  );
}
