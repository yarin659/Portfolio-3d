import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export default function Home({ goWork }) {
  const wrapperRef = useRef(null);
  const [shadow, setShadow] = useState({ x: 0, y: 0 });

  // עדכון משתני CSS למיקום האור + חישוב text-shadow עדין
  const onMove = (e) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // נשמור משתנים ל-light overlay
    wrapperRef.current.style.setProperty("--lx", `${x}px`);
    wrapperRef.current.style.setProperty("--ly", `${y}px`);

    // חשב היסט קל ל־text-shadow (לא יותר מדי כדי לא לכאוב בעיניים)
    const nx = (x / rect.width - 0.5) * 1.2;  // הטיה עדינה
    const ny = (y / rect.height - 0.5) * 1.2;
    setShadow({ x: nx, y: ny });
  };

  // הפחתת תנועה אם המשתמש ביקש (נגישות)
  const prefersReduced = typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) {
      wrapperRef.current?.style.setProperty("--lightAlpha", "0.0");
    }
  }, [prefersReduced]);

  const titleStyle = {
    fontFamily: "var(--font-heading)",
    fontSize: "3.5rem",
    fontWeight: 600,
    letterSpacing: "2px",
    color: "#E2BF5A",
    // זוהר עדין סביב האותיות, מושפע מהמיקום
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
    <section
      ref={wrapperRef}
      onMouseMove={onMove}
      id="home"
      className="hero-wrap"
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
        // ברירות מחדל ל-overlay
        "--lx": "50vw",
        "--ly": "50vh",
        "--lightAlpha": "0.18",
      }}
    >
      {/* Light overlay – כתם אור עדין שמאיר את ההירו */}
      <div
        aria-hidden
        className="hero-light"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          mixBlendMode: "screen",
          background:
            "radial-gradient(250px 250px at var(--lx) var(--ly), rgba(226,191,90, var(--lightAlpha)), rgba(0,0,0,0) 70%)",
          transition: "opacity 150ms linear",
          zIndex: 0,
        }}
      />

      {/* טקסטים מעל האור */}
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
          Passionate about building immersive, elegant, and high-performance digital experiences that connect creativity with technology.
        </motion.p>

       <motion.a
  href="#"
  onClick={(e) => { e.preventDefault(); goWork?.(); }}  // ← זה הניווט האמיתי
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
  );
}
