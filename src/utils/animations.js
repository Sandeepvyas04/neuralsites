export const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
  }
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.09
    }
  }
};

export const viewport = { once: true, amount: 0.18 };
