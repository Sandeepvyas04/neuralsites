import { motion } from "framer-motion";
import { fadeUp, viewport } from "../utils/animations";

export default function Section({ id, eyebrow, title, copy, children, className = "" }) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-6 lg:px-8 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || copy) && (
          <motion.div
            className="mx-auto mb-12 max-w-3xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>}
            {title && <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">{title}</h2>}
            {copy && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{copy}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
