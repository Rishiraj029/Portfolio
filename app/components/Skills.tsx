import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Package,
  Zap,
  type LucideIcon,
} from "lucide-react";

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: Zap,
    skills: ["React", "Next.js", "Responsive UI", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Cpu,
    skills: ["Node.js", "Express", "REST APIs", "JWT", "Middleware"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Schema design", "Queries"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
  {
    title: "Foundations",
    icon: Package,
    skills: ["DSA", "OOP", "Problem solving", "Clean code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="section-header">
        <h2 id="skills-heading" className="section-label">
          Skills
        </h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {skillsData.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.title} className="skill-card">
              <div className="skill-header">
                <Icon size={22} className="skill-icon" aria-hidden />
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
