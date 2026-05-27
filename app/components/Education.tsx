import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    college: "Engineering college, Jodhpur",
    location: "Jodhpur, Rajasthan, India",
    duration: "2022 — 2026 (expected)",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Web Technologies",
      "OOP",
      "Software Engineering",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="section-header">
        <h2 id="education-heading" className="section-label">
          Education
        </h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {educationData.map((edu) => (
          <article key={edu.degree} className="timeline-item">
            <div className="timeline-marker">
              <GraduationCap size={18} aria-hidden />
            </div>

            <div className="timeline-content">
              <h3 className="education-degree">{edu.degree}</h3>

              <div className="education-info">
                <div className="info-row">
                  <BookOpen size={16} className="info-icon" aria-hidden />
                  <span>{edu.college}</span>
                </div>
                <div className="info-row">
                  <MapPin size={16} className="info-icon" aria-hidden />
                  <span>{edu.location}</span>
                </div>
                <div className="info-row">
                  <Calendar size={16} className="info-icon" aria-hidden />
                  <span>{edu.duration}</span>
                </div>
              </div>

              <div className="coursework">
                <p className="coursework-label">Coursework</p>
                <div className="coursework-tags">
                  {edu.coursework.map((course) => (
                    <span key={course} className="course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
