import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({ isActive }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // בכל פעם ש־isActive הופך true נפעיל את האנימציה
    if (isActive) {
      setVisible(true);
      // אחרי סיום האנימציה נסתיר שוב
      const timer = setTimeout(() => setVisible(false), 700);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isActive]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="fade"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
          exit={{ opacity: 0, x: -80, transition: { duration: 0.35, ease: "easeInOut" } }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
            zIndex: 999,
            pointerEvents: "none",
          }}
        />
      )}
    </AnimatePresence>
  );
}
