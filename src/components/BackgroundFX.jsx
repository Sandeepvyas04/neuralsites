import { motion } from "framer-motion";

export default function BackgroundFX() {
  const particles = Array.from({ length: 16 });
  const lenses = [
    "left-[5%] top-[9%] h-28 w-28",
    "right-[12%] top-[11%] h-44 w-44",
    "left-[26%] top-[2%] h-36 w-36",
    "right-[4%] top-[28%] h-24 w-24",
    "left-[8%] top-[36%] h-24 w-24"
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,.14),transparent_34%),linear-gradient(180deg,#05030b_0%,#030207_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:78px_78px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      {lenses.map((className, index) => (
        <motion.span
          key={className}
          className={`absolute rounded-full border border-cyan/10 bg-[radial-gradient(circle_at_45%_42%,rgba(34,211,238,.24),rgba(34,211,238,.05)_38%,rgba(255,255,255,.025)_39%,transparent_62%)] shadow-[inset_0_0_36px_rgba(34,211,238,.14),0_0_38px_rgba(139,92,246,.12)] ${className}`}
          animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 8 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="absolute inset-3 rounded-full border border-white/10" />
          <span className="absolute inset-[-10px] rounded-full border border-violet/10" />
        </motion.span>
      ))}
      {particles.map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-cyan/50 shadow-[0_0_18px_rgba(34,211,238,.7)]"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 23) % 100}%`
          }}
          animate={{ y: [-18, 28, -18], opacity: [0.15, 0.9, 0.15], scale: [0.7, 1.4, 0.7] }}
          transition={{ duration: 4 + (index % 5), delay: index * 0.22, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent,rgba(5,3,11,.76)_60%,#05030b_100%)]" />
    </div>
  );
}
