import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Rishiraj Singh Rathore</h3>
          <p className="footer-tagline">
            Full-stack developer · MERN · backend-focused
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">On this page</h4>
          <div className="footer-links">
            <a href="#intro">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Elsewhere</h4>
          <div className="social-links">
            <a
              href="https://github.com/Rishiraj029"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rishirajsingh029"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rishirajsinghrathore029@gmail.com"
              aria-label="Email"
              className="social-link"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Rishiraj Singh Rathore</p>
        <p className="footer-location">Built with Next.js · Jodhpur, India</p>
      </div>
    </footer>
  );
}
