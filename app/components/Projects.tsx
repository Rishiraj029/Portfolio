import {
  CloudRain,
  Code2,
  ExternalLink,
  Github,
  MessageSquare,
  Users,
  type LucideIcon,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  live?: string;
  icon: LucideIcon;
  role?: string;
};

const projects: Project[] = [
  {
    title: "Chat Application",
    description:
      "Real-time chat with rooms and live messages using WebSockets.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    repo: "https://github.com/Rishiraj029/Chat-App",
    icon: MessageSquare,
    role: "Full-stack",
  },
  {
    title: "Interview Platform",
    description:
      "Practice interviews with a shared code editor and session flow.",
    tags: ["React", "Node.js", "WebRTC"],
    repo: "https://github.com/Rishiraj029",
    icon: Users,
    role: "Full-stack",
  },
  {
    title: "Task Management API",
    description:
      "REST API with JWT auth, CRUD for tasks, and Postman documentation.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/Rishiraj029",
    icon: Code2,
    role: "Backend",
  },
  {
    title: "Weather App",
    description:
      "City search and forecasts using the OpenWeather API.",
    tags: ["JavaScript", "HTML", "CSS", "Fetch API"],
    repo: "https://github.com/Rishiraj029",
    icon: CloudRain,
    role: "Frontend",
  },
  {
    title: "E-Commerce (in progress)",
    description:
      "Product catalog, cart, auth, and payment flow — MERN stack.",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    repo: "https://github.com/Rishiraj029",
    icon: Code2,
    role: "Full-stack",
  },
  {
    title: "This portfolio",
    description:
      "Personal site with responsive layout, sections, and clean CSS.",
    tags: ["Next.js", "React", "TypeScript", "CSS"],
    repo: "https://github.com/Rishiraj029",
    icon: Code2,
    role: "Frontend",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="section-header">
        <h2 id="projects-heading" className="section-label">
          Projects
        </h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <article key={p.title} className="project">
              <div className="project-top">
                <div className="project-icon">
                  <Icon size={20} aria-hidden />
                </div>
                <div className="project-links">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${p.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${p.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              {p.role && <p className="project-role">{p.role}</p>}
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
