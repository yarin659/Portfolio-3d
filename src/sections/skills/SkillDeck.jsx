import React, { useState } from "react";
import "./SkillDeck.css";

const skillData = {
  Frontend: [
    { name: "React", icon: "react" },
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
  ],
  Backend: [
    { name: "Java", icon: "java" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "C", icon: "c" },
    { name: "C++", icon: "cpp" },
    { name: "C#", icon: "csharp" },
  ],
  "DevOps & Cloud": [
    { name: "Linux", icon: "linux" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "AWS", icon: "aws" },
  ],
  Tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "GitLab", icon: "gitlab" },
    { name: "PostgreSQL", icon: "sql" },
    { name: "MongoDB", icon: "nosql" },
  ],
};

export default function SkillDeck() {
  const [active, setActive] = useState(null);

  return (
    <div className="deck-container">
      {Object.entries(skillData).map(([category, skills]) => {
        const isActive = active === category;
        return (
          <div
            key={category}
            className={`deck-card ${isActive ? "active" : ""}`}
            onMouseEnter={() => setActive(category)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Front side */}
            <div className="deck-front">
              <h3>{category}</h3>
            </div>

            {/* Expanded list */}
            {isActive && (
              <div className="deck-expanded">
                {skills.map((s) => (
                  <div key={s.name} className="skill-item">
                    <img
                      src={`/src/assets/icons/${s.icon}.svg`}
                      alt={s.name}
                      className="skill-icon"
                    />
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
