import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  BrainCircuit,
  Server,
  Database,
  ExternalLink,
} from "lucide-react";

const skills = [
  "Python",
  "C++",
  "FastAPI",
  "Flask",
  "REST APIs",
  "SQL",
  "PostgreSQL",
  "SQLite",
  "React",
  "Git / GitHub",
  "Generative AI",
  "Gemini API",
  "Prompt Engineering",
  "LangChain",
];

const projects = [
  {
    number: "01",
    title: "SentinelAI",
    subtitle: "AI Agent Governance Platform",
    description:
      "A governance-focused platform for evaluating and controlling AI agent actions with policy checks, risk review and execution oversight.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "AI Governance",
    ],
    github: "https://github.com/Sibinesh5/sentinel-ai",
    live: null,
    featured: true,
  },

  {
    number: "02",
    title: "AI Job Description Analyzer",
    subtitle: "Resume vs Job Match Analyzer",
    description:
      "A Generative AI application that compares resumes with job descriptions, identifies matched and missing skills, suggests improvements and generates interview questions.",
    stack: [
      "Python",
      "Streamlit",
      "Gemini API",
      "PyMuPDF",
      "Pydantic",
    ],
    github: "https://github.com/Sibinesh5/ai-job-analyzer",
    live: "https://ai-job-analyzer-v1.streamlit.app/",
  },

  {
    number: "03",
    title: "Task Manager REST API",
    subtitle: "Backend CRUD API",
    description:
      "A RESTful task-management backend with CRUD operations, reusable database logic, parameterized SQL and proper HTTP status handling.",
    stack: ["Python", "Flask", "SQLite", "REST API"],
    github: "https://github.com/Sibinesh5/task-manager-flask-api",
    live: null,
  },
];

function App() {
  return (
    <div className="site-shell">

      {/* Background Effects */}
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      {/* Navbar */}
      <header className="nav-wrap">
        <nav className="navbar container">

          <a className="brand" href="#home">
            S.
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-cta" href="#contact">
            Let's talk
            <ArrowUpRight size={16} />
          </a>

        </nav>
      </header>

      <main>

        {/* HERO */}
        <section className="hero container" id="home">

          <div className="hero-kicker">
            <span className="status-dot" />
            Available for software engineering opportunities
          </div>

          <h1>
            I build <span>backend systems</span>
            <br />
            and AI-powered products.
          </h1>

          <p className="hero-copy">
            I'm <strong>Sibinesh S</strong>, a Software Engineer and Python
            Developer focused on backend engineering, REST APIs and Generative
            AI applications.
          </p>

          {/* Hero Buttons */}
          <div className="hero-actions">

            <a
              className="button primary"
              href="#projects"
            >
              View projects
              <ArrowUpRight size={18} />
            </a>

            <a
              className="button secondary"
              href="/resume.pdf"
              download
            >
              <Download size={18} />
              Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="hero-socials">

            <a
              href="https://github.com/Sibinesh5"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sibinesh-sivakumar-713045258"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

          </div>

          {/* Code Window */}
          <div className="hero-panel">

            <div className="code-window">

              <div className="window-top">

                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <span>sibinesh.py</span>

              </div>

              <pre>
                <span className="purple">class</span>{" "}
                <span className="blue">Engineer</span>:
                {"\n"}
                {"    "}name ={" "}
                <span className="green">"Sibinesh S"</span>
                {"\n"}
                {"    "}focus = [
                <span className="green">"Backend"</span>,{" "}
                <span className="green">"GenAI"</span>,{" "}
                <span className="green">"APIs"</span>]
                {"\n"}
                {"    "}stack = [
                <span className="green">"Python"</span>,{" "}
                <span className="green">"FastAPI"</span>,{" "}
                <span className="green">"SQL"</span>]
                {"\n"}
                {"\n"}
                {"    "}
                <span className="purple">def</span>{" "}
                <span className="blue">build</span>(self):
                {"\n"}
                {"        "}
                <span className="purple">return</span>{" "}
                <span className="green">"Useful software."</span>
              </pre>

            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section
          className="section container"
          id="about"
        >

          <div className="section-heading">

            <span>01 / About</span>

            <h2>
              Engineering with curiosity and ownership.
            </h2>

          </div>

          <div className="about-grid">

            <p className="about-lead">
              I enjoy turning ideas into working software — from clean REST APIs
              to AI-assisted applications that solve practical problems.
            </p>

            <div className="about-copy">

              <p>
                My strongest area is Python backend development, with hands-on
                work in Flask, FastAPI, SQL databases and API integrations.
              </p>

              <p>
                I'm also building with Generative AI, including Gemini-powered
                applications, prompt design and structured LLM outputs.
              </p>

              <p>
                I'm currently looking for opportunities where I can contribute,
                learn fast and grow as a software engineer.
              </p>

            </div>

          </div>

        </section>

        {/* SKILLS */}
        <section
          className="section container"
          id="skills"
        >

          <div className="section-heading">

            <span>02 / Skills</span>

            <h2>
              Tools I use to build.
            </h2>

          </div>

          <div className="skill-categories">

            <article className="skill-card">

              <Code2 size={25} />

              <h3>
                Programming
              </h3>

              <p>
                Python, C++, problem solving and data structures.
              </p>

            </article>

            <article className="skill-card">

              <Server size={25} />

              <h3>
                Backend
              </h3>

              <p>
                FastAPI, Flask, REST APIs and backend architecture.
              </p>

            </article>

            <article className="skill-card">

              <BrainCircuit size={25} />

              <h3>
                Generative AI
              </h3>

              <p>
                Gemini API, prompt engineering and LLM applications.
              </p>

            </article>

            <article className="skill-card">

              <Database size={25} />

              <h3>
                Data
              </h3>

              <p>
                PostgreSQL, SQLite, SQL and relational database fundamentals.
              </p>

            </article>

          </div>

          <div className="skill-cloud">

            {skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* PROJECTS */}
        <section
          className="section container"
          id="projects"
        >

          <div className="section-heading projects-heading">

            <div>

              <span>
                03 / Selected work
              </span>

              <h2>
                Projects that show how I build.
              </h2>

            </div>

            <a
              href="https://github.com/Sibinesh5"
              target="_blank"
              rel="noreferrer"
            >
              All GitHub projects
              <ArrowUpRight size={16} />
            </a>

          </div>

          <div className="projects-list">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-main">

                  <div className="project-title-row">

                    <div>

                      {project.featured && (
                        <span className="featured">
                          Featured
                        </span>
                      )}

                      <h3>
                        {project.title}
                      </h3>

                      <p className="project-subtitle">
                        {project.subtitle}
                      </p>

                    </div>

                    <div className="project-links">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github size={20} />
                      </a>

                      {project.live && (

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={20} />
                        </a>

                      )}

                    </div>

                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="stack-row">

                    {project.stack.map((item) => (

                      <span key={item}>
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* HIGHLIGHTS */}
        <section
          className="section container"
          id="achievements"
        >

          <div className="section-heading">

            <span>
              04 / Highlights
            </span>

            <h2>
              A little proof of persistence.
            </h2>

          </div>

          <div className="achievement-grid">

            <div className="achievement-card">

              <BrainCircuit size={26} />

              <strong>
                3 Projects
              </strong>

              <span>
                Backend + Generative AI applications
              </span>

            </div>

            <div className="achievement-card">

              <Code2 size={26} />

              <strong>
                450+
              </strong>

              <span>
                LeetCode problems solved
              </span>

            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section
          className="contact container"
          id="contact"
        >

          <span className="contact-kicker">
            05 / Contact
          </span>

          <h2>
            Have an opportunity or an idea?
          </h2>

          <p>
            I'm open to software engineering, Python backend and Generative AI
            roles.
          </p>

          <div className="contact-actions">

            {/* Gmail Button */}
            <a
              className="button primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sibineshsivakumar@gmail.com&su=Portfolio%20Contact"
              target="_blank"
              rel="noreferrer"
            >
              <Mail size={18} />
              Email me
            </a>

            {/* LinkedIn Button */}
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/sibinesh-sivakumar-713045258"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer container">

        <p>
          Designed & built by Sibinesh S.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;