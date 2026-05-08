import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 22, mass: 0.25 });

  return <motion.div className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-cyan via-blue to-violet" style={{ scaleX }} />;
}
