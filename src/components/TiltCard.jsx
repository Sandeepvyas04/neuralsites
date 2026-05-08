import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 170, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 170, damping: 18 });
  const spotlight = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(34,211,238,.18), transparent 34%)`;

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    mouseX.set(px * 100);
    mouseY.set(py * 100);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, backgroundImage: spotlight }}
      className={`group relative transform-gpu overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] backdrop-blur-xl transition duration-300 hover:border-cyan/45 hover:shadow-glow ${className}`}
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
      </div>
      {children}
    </motion.div>
  );
}
