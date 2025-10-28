import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Nav.css";

export default function Nav({ current, onNavigate, items }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => onNavigate("home")}>YARIN</div>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav className="nav-links">
            {items.map((s) => (
              <button
                key={s}
                className={`nav-link ${current === s ? "active" : ""}`}
                onClick={() => onNavigate(s)}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </nav>
        )}

        {/* Hamburger / Close button */}
        {isMobile && (
          <button
            className={`hamburger-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.nav
            className="mobile-dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {items.map((s, i) => (
              <motion.button
                key={s}
                className={`mobile-dropdown-link ${current === s ? "active" : ""}`}
                onClick={() => {
                  onNavigate(s);
                  setMenuOpen(false);
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                {s.toUpperCase()}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
