import AboutMe from "../components/AboutMe/about.js";
import Projects from "../components/Projects/projects.js";
import Contacts from "../components/Contacts/contacts.js";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center", color: "var(--foreground)" }}>
          <h1>Hello, I'm <span style={{ color: "#f56565" }}>Vivan</span>.</h1>
          <h2>I'm a full-stack web developer.</h2>
          <button style={{ marginTop: "20px", padding: "10px 20px", fontSize: "1.2rem", backgroundColor: "#f56565", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            View my work ↓
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contacts />
      </section>
    </>
  );
}
