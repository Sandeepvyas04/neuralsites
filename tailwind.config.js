/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        ink: "#05030b",
        panel: "#0d081a",
        violet: "#8b5cf6",
        cyan: "#22d3ee",
        blue: "#2f7df6"
      },
      boxShadow: {
        glow: "0 0 50px rgba(34, 211, 238, 0.22)",
        violet: "0 0 60px rgba(139, 92, 246, 0.25)"
      },
      backgroundImage: {
        "mesh-radial": "radial-gradient(circle at 25% 15%, rgba(34,211,238,.18), transparent 26%), radial-gradient(circle at 72% 25%, rgba(139,92,246,.22), transparent 24%), radial-gradient(circle at 52% 82%, rgba(47,125,246,.16), transparent 28%)"
      }
    }
  },
  plugins: []
};
