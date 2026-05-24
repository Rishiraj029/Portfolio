"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, FolderGit2, MessageSquare, Users, CloudRain } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  live?: string;
  icon: any;
};

const projects: Project[] = [
  {
    title: "Chat App",
    description:
      "Real-time style chat ui with rooms list and message thread. Practiced state, api routes, and keeping the bundle small.",
    tags: ["Next.js", "React", "CSS"],
    repo: "https://github.com/Rishiraj029/Chat-App",
    icon: MessageSquare
  },
  {
    title: "Interview Platform",
    description:
      "An advanced Interview Platform designed to streamline candidate evaluation processes with integrated real-time code environments.",
    tags: ["HTML", "CSS", "Forms", "JS"],
    repo: "https://github.com/Rishiraj029",
    icon: Users
  },
  {
    title: "Weather Checker",
    description:
      "City search hits a public weather api and renders the result. Rewrote it until fetch and error states felt stable.",
    tags: ["JavaScript", "Fetch", "DOM API"],
    repo: "https://github.com/Rishiraj029",
    icon: CloudRain
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 id="projects-heading" className="section-label">
          Selected work
        </h2>
        <div className="section-line"></div>
      </motion.div>
      
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.article 
            key={p.title} 
            className="project"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="project-top">
              <div className="project-icon">
                <p.icon size={20} />
              </div>
              <div className="project-links">
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Github Repo">
                  <Code size={20} />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
