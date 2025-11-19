import "../styles/Work.css";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "EventLife",
    tech: "React • Spring Boot • PostgresSQL",
    image: "/media/eventlife.jpg",
    media: "/media/eventlife.mp4",
    link: "https://event-life123.netlify.app/"
  },
  
  {
    id: 2,
    name: "Smart Budget Tracker (soon...)",
    tech: "React • Springboot(Java) • PostgresSQL",
    image: "/media/budget.jpg",
    media: "/media/budget.mp4"
  }
];

export default function Work() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="work">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            className="card"
            onMouseEnter={() => setHovered(proj.id)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => proj.link && window.open(proj.link, "_blank")}
          >
            <div className="thumb">

              {/* תמונה תמיד קיימת */}
              <img
                src={proj.image}
                alt={proj.name}
                className="preview img-layer"
              />

              {/* וידאו תמיד קיים */}
              <video
                src={proj.media}
                autoPlay
                loop
                muted
                playsInline
                className="preview video-layer"
              />

            </div>

            <motion.div
              className="meta"
              animate={{
                opacity: hovered === proj.id ? 1 : 0.85,
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
