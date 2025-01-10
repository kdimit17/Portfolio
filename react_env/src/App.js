import React from 'react';
import './App.css';
import logo from './images/logo.png';
import emailIcon from './images/email.png';
import githubIcon from './images/github.png';
import linkedinIcon from './images/linkedin.png';

function App() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <nav className="nav-bar">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          <a href="files/resume.pdf" className="resume-button" download="Karolina_Dimitriou_Resume.pdf">Resume</a>
        </nav>
      </header>
      <main>
        <div id="about" className="text-box">
          <img src={logo} alt="Logo" className="logo" />
          <div className="intro">Hello, my name is</div>
          <div className="name">Karolina Dimitriou</div>
          <div className="tagline">Computer science graduate, creating projects to grow.</div>
          <div className="description">
            I’m a recent Computer Science graduate from the University of Cyprus with a passion for problem-solving and software development.
            My thesis focused on creating an AI-based tool to analyze GDPR compliance in cloud privacy policies,
            showcasing my ability to tackle complex technical challenges. Skilled in Java, C, and C++,
            I’m now expanding my expertise in Python and web development by building personal projects and a professional portfolio.
            I’m actively seeking a software engineering role where I can contribute to innovative solutions while continuing to grow as a developer.
          </div>
          <button className="cta-button">Check out my work !</button>
        </div>
        <section id="projects" className="projects-section">
          <h2>Projects</h2>
          <p>Here you will find a showcase of my projects. Stay tuned for updates!</p>
        </section>
        <section id="contact" className="contact-section">
          <div className="contact">
            <a href="mailto:dimitrioukarolina@gmail.com"><img src={emailIcon} alt="Email" /></a>
            <a href="https://github.com/kdimit17" target="_blank"><img src={githubIcon} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/dimitriou-karolina/" target="_blank"><img src={linkedinIcon} alt="LinkedIn" /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
