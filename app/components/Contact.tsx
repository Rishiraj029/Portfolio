import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="section-header">
        <h2 id="contact-heading" className="section-label">
          Contact
        </h2>
        <div className="section-line" />
      </div>

      <div className="contact-container">
        <h3 className="contact-title">Let&apos;s talk</h3>
        <p className="contact-text">
          Open to internships, freelance work, or just a chat about web
          development. Drop me a line — I usually reply within a day or two.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <MapPin size={20} className="contact-item-icon" aria-hidden />
            <div>
              <p className="contact-label">Location</p>
              <p className="contact-value">Jodhpur, Rajasthan, India</p>
            </div>
          </div>
          <div className="contact-item">
            <Mail size={20} className="contact-item-icon" aria-hidden />
            <div>
              <p className="contact-label">Email</p>
              <a
                href="mailto:rishirajsinghrathore029@gmail.com"
                className="contact-value contact-link"
              >
                rishirajsinghrathore029@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="contact-actions">
          <a href="mailto:rishirajsinghrathore029@gmail.com" className="btn btn-primary">
            <Mail size={18} aria-hidden />
            Email me
            <ArrowRight size={16} aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/rishirajsingh029"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Linkedin size={18} aria-hidden />
            LinkedIn
          </a>
          <a
            href="https://github.com/Rishiraj029"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={18} aria-hidden />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
