import { Award, Star, Target, Zap } from "lucide-react";

const achievementsData = [
  {
    title: "Projects shipped",
    description:
      "Built several full-stack apps end to end — from API design to deployment-ready front ends.",
    icon: Award,
  },
  {
    title: "DSA practice",
    description:
      "Regular problem solving on coding platforms to sharpen algorithms and complexity thinking.",
    icon: Target,
  },
  {
    title: "Readable code",
    description:
      "Focus on naming, structure, and small PR-sized changes instead of one giant dump.",
    icon: Zap,
  },
  {
    title: "Always learning",
    description:
      "Following docs, building side projects, and picking up tools as projects need them.",
    icon: Star,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section"
      aria-labelledby="achievements-heading"
    >
      <div className="section-header">
        <h2 id="achievements-heading" className="section-label">
          Highlights
        </h2>
        <div className="section-line" />
      </div>

      <div className="achievements-grid">
        {achievementsData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="achievement-card">
              <div className="achievement-icon-wrapper">
                <Icon size={24} aria-hidden />
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
