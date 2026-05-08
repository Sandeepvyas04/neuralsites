import { AnimatePresence, motion } from "framer-motion";
import BackToTop from "./components/BackToTop.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Home from "./pages/Home.jsx";
import useSmoothScroll from "./hooks/useSmoothScroll.js";

export default function App() {
  useSmoothScroll();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen overflow-hidden bg-ink text-white selection:bg-cyan/30 selection:text-white"
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <Home />
        <Footer />
        <BackToTop />
      </motion.div>
    </AnimatePresence>
  );
}
