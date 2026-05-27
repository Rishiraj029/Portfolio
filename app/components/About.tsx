import { Code, Database, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="section-header">
        <h2 id="about-heading" className="section-label">
          About
        </h2>
        <div className="section-line" />
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I&apos;m a computer science student and aspiring software engineer
            based in Jodhpur. Most of my work sits in the MERN stack — I like
            building REST APIs, wiring up databases, and pairing that with React
            front ends that don&apos;t get in the way.
          </p>
          <p>
            I try to write code that&apos;s easy to read and change later. That
            means clear naming, sensible folder structure, and not over-engineering
            the first version. I&apos;m also working through DSA problems and
            system design basics alongside my coursework.
          </p>
          <p>
            Right now I&apos;m looking for internships or junior roles where I can
            ship real features, learn from a team, and grow on the backend side.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <Code size={22} color="var(--accent)" aria-hidden />
            <div>
              <div className="stat-value">Full-stack</div>
              <div className="stat-label">MERN & Next.js</div>
            </div>
          </div>
          <div className="stat-item">
            <Database size={22} color="var(--accent)" aria-hidden />
            <div>
              <div className="stat-value">Backend</div>
              <div className="stat-label">APIs & databases</div>
            </div>
          </div>
          <div className="stat-item">
            <Zap size={22} color="var(--accent)" aria-hidden />
            <div>
              <div className="stat-value">Practical</div>
              <div className="stat-label">Ship, then refine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
