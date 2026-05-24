"use client";

import { motion } from "framer-motion";
import { Terminal, Lightbulb, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 id="about-heading" className="section-label">
          About me
        </h2>
        <div className="section-line"></div>
      </motion.div>
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p>
            I am a developer who thrives on turning complex problems into elegant,
            user-friendly solutions. I prefer clean architectures and simple stacks
            that I can easily debug and scale.
          </p>
          <p>
            Performance, semantic HTML, and maintainable CSS are my core principles.
            I believe that great code is not just functional, but readable months or years later.
            Currently, I am diving deeper into accessibility and mastering advanced CSS layout techniques without relying heavily on frameworks.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source, or optimizing personal workflows.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-item">
            <Terminal className="stat-icon" size={24} color="var(--accent)" />
            <div>
              <div className="stat-value">Clean</div>
              <div className="stat-label">Architecture</div>
            </div>
          </div>
          <div className="stat-item">
            <Zap className="stat-icon" size={24} color="var(--accent-hot)" />
            <div>
              <div className="stat-value">Fast</div>
              <div className="stat-label">Performance</div>
            </div>
          </div>
          <div className="stat-item">
            <Lightbulb className="stat-icon" size={24} color="var(--link)" />
            <div>
              <div className="stat-value">Smart</div>
              <div className="stat-label">Solutions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
