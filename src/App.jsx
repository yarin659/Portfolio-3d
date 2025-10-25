import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Cursor from "./components/Cursor.jsx";
import Background from "./three/Background.jsx";
import Home from "./screens/Home.jsx";
import Work from "./screens/Work.jsx";
import About from "./screens/About.jsx";
import Contact from "./screens/Contact.jsx";
import PageTransition from "./components/PageTransition.jsx";
import DownloadCVButton from "./components/DownloadCVButton";
import Education from "./screens/Education.jsx";

const SCREENS = ["home", "work", "about", "contact", "education"];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [transitioning, setTransitioning] = useState(false);

  const navigateTo = (target) => {
    if (target === screen) return;
    setTransitioning(true);
    setTimeout(() => {
      setScreen(target);
      setTransitioning(false);
    }, 350);
  };

  // Lock scroll to mimic single-screen sections
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  return (
    <div className="app">
      {/* WebGL background */}
      <Background />

      {/* Navigation */}
      <Nav current={screen} onNavigate={navigateTo} items={SCREENS} />

      {/* Screen transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={screen}
          className="screen"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, x: -24, transition: { duration: 0.35 } }}
        >
          {screen === "home" && <Home goWork={() => navigateTo("work")} />}
          {screen === "work" && <Work />}
          {screen === "about" && <About />}
          {screen === "contact" && <Contact />}
          {screen === "education" && <Education />}


        </motion.main>
      </AnimatePresence>

      {/* Overlay transition */}
      <PageTransition isActive={transitioning} />

      {/* Custom cursor */}
      <Cursor />

      {/* Cv button download */}
      <DownloadCVButton />
    </div>
  );
}
