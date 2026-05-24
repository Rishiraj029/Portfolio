"use client";

import { motion } from "framer-motion";
import { Mail, Code, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 id="contact-heading" className="section-label">
          Get in touch
        </h2>
        <div className="section-line"></div>
      </motion.div>
      
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h3 className="contact-title">Let's build something together</h3>
        <p className="contact-text">
          Whether you have a question, a project idea, or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="contact-actions">
          <a href="mailto:rishirajsinghrathore029@gmail.com" className="btn btn-primary">
            <Mail size={18} />
            Say Hello
            <ArrowRight size={16} />
          </a>
          <a href="https://github.com/Rishiraj029" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Code size={18} />
            View GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
