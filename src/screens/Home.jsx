import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Home({ goWork }) {
  const [shadow, setShadow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty("--lx", `${x}px`);
      document.documentElement.style.setProperty("--ly", `${y}px`);

      const nx = (x / window.innerWidth - 0.5) * 1.2;
      const ny = (y / window.innerHeight - 0.5) * 1.2;
      setShadow({ x: nx, y: ny });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.style.setProperty(
      "--lightAlpha",
      prefersReduced ? "0.0" : "0.18"
    );
  }, []);

  const titleStyle = {
    fontFamily: "var(--font-heading)",
    fontSize: "3.5rem",
    fontWeight: 600,
    letterSpacing: "2px",
    color: "#E2BF5A",
    textShadow: `
      ${shadow.x * 6}px ${shadow.y * 6}px 14px rgba(226,191,90,0.35),
      0 0 22px rgba(226,191,90,0.20)
    `,
    transition: "text-shadow 120ms linear",
  };

  const subtitleStyle = {
    fontFamily: "var(--font-body)",
    fontSize: "1.5rem",
    fontWeight: 400,
    color: "#cfcfcf",
    textShadow: `
      ${shadow.x * 4}px ${shadow.y * 4}px 10px rgba(226,191,90,0.22)
    `,
    transition: "text-shadow 120ms linear",
  };

  return (
    <>
      {/* 🔥 פנס אמיתי על כל המסך */}
      <div
        aria-hidden
        id="global-light"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(180px 180px at var(--lx) var(--ly), rgba(226,191,90, var(--lightAlpha)), rgba(0,0,0,0) 70%)",
          mixBlendMode: "screen",
          transition: "opacity 150ms linear",
        }}
      />

      {/* תוכן ה־Home */}
      <section
        id="home"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          color: "#f5f5f5",
          background: "transparent",
          zIndex: 1,
          overflow: "visible", // חשוב! לא לחתוך את הפנס
        }}
      >
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            style={titleStyle}
          >
            YARIN COHEN
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1.0, ease: "easeOut" }}
            style={subtitleStyle}
          >
            Software Developer & Creative Technologist
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.9, ease: "easeOut" }}
            style={{
              width: "120px",
              height: "2px",
              background: "linear-gradient(90deg, #E2BF5A, #fff8dc)",
              margin: "1.6rem auto 0",
              transformOrigin: "left",
              filter: "drop-shadow(0 0 8px rgba(226,191,90,0.25))",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            style={{
              maxWidth: 640,
              margin: "1.6rem auto 0",
              fontSize: "1.05rem",
              color: "#d6d6d6",
              lineHeight: 1.75,
            }}
          >
            Passionate about building immersive, elegant, and high-performance
            digital experiences that connect creativity with technology.
          </motion.p>

          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goWork?.();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.9 }}
            whileHover={{ scale: 1.05 }}
            style={{
              display: "inline-block",
              marginTop: "2.4rem",
              padding: "0.8rem 1.8rem",
              borderRadius: "30px",
              border: "1px solid #E2BF5A",
              color: "#E2BF5A",
              fontWeight: 500,
              letterSpacing: "1px",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
          >
            View My Work
          </motion.a>
        </div>
      </section>
    </>
  );
}
