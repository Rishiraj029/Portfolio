"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Header() {
  return (
    <motion.header 
      className="site-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <a href="/" className="brand">
        <span className="brand-dot" aria-hidden="true" />
        Rishiraj Singh
      </a>
      
      <nav className="site-nav" aria-label="Primary">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
  );
}
