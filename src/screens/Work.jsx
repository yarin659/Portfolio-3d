import { motion } from "framer-motion";
import { useState } from "react";

// רשימת פרויקטים לדוגמה (תוכל לשנות לשמות אמיתיים)
const projects = [
  {
    id: 1,
    name: "EventLife",
    tech: "React • Spring Boot • AWS",
    media: "/media/eventlife.mp4",
  },
  {
    id: 2,
    name: "Smart Budget Tracker",
    tech: "React • DynamoDB • Cognito",
    media: "/media/budget.mp4",
  },
  {
    id: 3,
    name: "AI Resume Analyzer",
    tech: "Python • Flask • OpenAI API",
    media: "/media/resume.mp4",
  },
];

export default function Work() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="work">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            className="card"
            onMouseEnter={() => setHovered(proj.id)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="thumb">
              {hovered === proj.id ? (
                <video
                  src={proj.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="preview"
                />
              ) : null}
            </div>

            <motion.div
              className="meta"
              animate={{
                opacity: hovered === proj.id ? 1 : 0.7,
                y: hovered === proj.id ? -4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <span>{proj.name}</span>
              <small>{proj.tech}</small>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
