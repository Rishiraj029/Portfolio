"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Terminal, Database, Layers } from "lucide-react";

export default function Intro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="intro" className="intro" aria-labelledby="intro-heading">
      <div className="intro-grid">
        <motion.div 
          className="intro-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="intro-eyebrow">
            <Code2 size={16} /> Developer portfolio
          </motion.div>
          <motion.h1 id="intro-heading" className="hero-name" variants={itemVariants}>
            Hi, I build things for the web.
          </motion.h1>
          <motion.p className="hero-role" variants={itemVariants}>
            I am <strong>Rishiraj</strong>. I like clear interfaces, readable code, and shipping
            small projects end to end.
          </motion.p>
          <motion.p className="hero-text" variants={itemVariants}>
            My focus is on creating dynamic, fast, and beautiful digital experiences.
            I specialize in the React ecosystem, modern CSS, and backend integrations.
          </motion.p>
          <motion.div className="stack-row" aria-label="Tools I use" variants={itemVariants}>
            <span className="stack-pill"><Terminal size={14} /> Next.js</span>
            <span className="stack-pill"><Layers size={14} /> React</span>
            <span className="stack-pill"><Code2 size={14} /> TypeScript</span>
            <span className="stack-pill"><Database size={14} /> Node.js</span>
          </motion.div>
        </motion.div>

        <motion.figure 
          className="photo-card"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="photo-ring">
            <img
              className="photo-img"
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop"
              alt="Rishiraj Singh"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
