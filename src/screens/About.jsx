import React from "react";
import { motion } from "framer-motion";
import SkillDeck from "../sections/skills/SkillDeck";

export default function About({ lang = "en" }) {
  const aboutText = {
    en: `I'm a passionate software developer who enjoys combining creativity and technology to build engaging, elegant, and scalable products.`,
    he: `אני מפתח תוכנה נלהב שנהנה לשלב יצירתיות וטכנולוגיה כדי לבנות מוצרים מעוצבים, אינטואיטיביים ומתקדמים.`,
  };

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* כותרת עליי */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          color: "#E2BF5A",
          fontSize: "2.8rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
          textShadow: "0 0 12px rgba(226,191,90,0.4)",
          letterSpacing: "1px",
        }}
      >
        {lang === "he" ? "עליי" : "About Me"}
      </motion.h2>

      {/* טקסט עליך */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          maxWidth: "700px",
          color: "#d8d8d8",
          fontSize: "1.1rem",
          lineHeight: 1.8,
          marginBottom: "3rem",
        }}
      >
        {aboutText[lang]}
      </motion.p>

      {/* כותרת skills */}
   <motion.h3
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  whileHover={{
    scale: 1.05,
    textShadow: [
      "0 0 8px rgba(226,191,90,0.3)",
      "0 0 16px rgba(226,191,90,0.5)",
      "0 0 24px rgba(226,191,90,0.7)",
    ],
    color: "#fff8dc",
  }}
  style={{
    color: "#E2BF5A",
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "1.2rem",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    borderBottom: "1px solid rgba(226,191,90,0.5)",
    paddingBottom: "0.4rem",
    width: "fit-content",
    textShadow: "0 0 6px rgba(226,191,90,0.25)",
  }}
>
        Skills
      </motion.h3>

      {/* Deck */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={{ width: "100%", maxWidth: "1000px" }}
      >
        <SkillDeck />
      </motion.div>
    </section>
  );
}
