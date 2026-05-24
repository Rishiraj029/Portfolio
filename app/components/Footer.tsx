"use client";

import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <a href="https://github.com/Rishiraj029" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
          <Code size={20} />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} Rishiraj Singh. Built with Next.js & Framer Motion.
      </div>
    </footer>
  );
}
