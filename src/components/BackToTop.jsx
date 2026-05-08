import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.15], [20, 0]);

  return (
    <motion.a
      href="#home"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-cyan/30 bg-white/10 text-cyan shadow-glow backdrop-blur-xl transition hover:bg-cyan hover:text-ink"
      style={{ opacity, y }}
      aria-label="Back to top"
    >
      <ArrowUp size={19} />
    </motion.a>
  );
}
