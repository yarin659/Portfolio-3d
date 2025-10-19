import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorRef = useRef(null);

  // תנועה רכה עם אינרציה (spring)
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 8);
      y.set(e.clientY - 8);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // כשנמצאים מעל אלמנט לחיץ – נרחיב את הקורסור
  useEffect(() => {
    const cursor = cursorRef.current;
    const hoverables = document.querySelectorAll("a, button, .cta, .nav-link, .card");
    const handleEnter = () => cursor.classList.add("cursor--hover");
    const handleLeave = () => cursor.classList.remove("cursor--hover");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });
    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="cursor"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
}
