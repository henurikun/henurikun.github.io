import { useState } from "react";

const skills = [
  "HTML (Basic Front-End)",
  "PHP (Basic Back-End)",
  "SQL (Basic Back-End)",
];

const project = {
  name: "4RMTech Frontend",
  description: "My first and currently only hosted project.",
  link: "https://4rmtech-frontend.vercel.app/",
};

export default function App() {
  const [theme, setTheme] = useState("light");
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <div className={`page ${theme}`}>
      <nav className="navbar">
        <div className="nav-inner">
          <p className="brand">Henry D. Nacorda</p>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="theme-buttons" role="group" aria-label="Theme mode">
            <button
              type="button"
              className={`theme-btn ${theme === "light" ? "active" : ""}`}
              onClick={() => setTheme("light")}
            >
              Light
            </button>
            <button
              type="button"
              className={`theme-btn ${theme === "dark" ? "active" : ""}`}
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-top">
          <div className="hero-text">
            <p className="tag">Portfolio</p>
            <h1>Henry D. Nacorda</h1>
            <p className="intro">
              I am a fresh college graduate specializing in web development. I
              am willing to learn new programming languages and can adapt easily
              to new technologies and environments.
            </p>
          </div>
          <div className="photo-holder" aria-label="Profile photo">
            {!photoMissing ? (
              <img
                src="public/assets/SKY_1374.JPG"
                alt="Henry Nacorda profile photo"
                className="profile-photo"
                onError={() => setPhotoMissing(true)}
              />
            ) : (
              <span className="photo-fallback">Add `public/assets/SKY_1374.JPG`</span>
            )}
          </div>
        </div>
      </header>

      <main className="content">
        <section id="about" className="card">
          <h2>About Me</h2>
          <p>
            I am Henry D. Nacorda, a fresh college graduate who is passionate
            about building practical and user-friendly web applications. I
            chose web development because I enjoy turning ideas into real
            websites that people can use in everyday life.
          </p>
          <p>
            My current foundation includes basic front-end development using
            HTML and basic back-end development using PHP and SQL. I understand
            that technology changes fast, so I always keep an open mindset and
            continue learning step by step to improve both my technical skills
            and problem-solving ability.
          </p>
          <p>
            One of my strengths is adaptability. I am willing to learn new
            programming languages, frameworks, and tools, and I can adjust
            quickly to new environments and team workflows. As I continue my
            journey as a developer, my goal is to contribute to meaningful
            projects, grow through real-world experience, and become a reliable
            full-stack web developer in the future.
          </p>
        </section>

        <section id="skills" className="card">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="card">
          <h2>Projects</h2>
          <article className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Visit Hosted Project
            </a>
          </article>
        </section>
      </main>
    </div>
  );
} 
