import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 90], ["rgba(5,3,11,0)", "rgba(5,3,11,.82)"]);
  const border = useTransform(scrollY, [0, 90], ["rgba(255,255,255,0)", "rgba(255,255,255,.12)"]);

  return (
    <motion.header className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl" style={{ backgroundColor: bg, borderColor: border }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="NeuralSites home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan/30 bg-white/5 shadow-glow">
            <span className="font-display text-xl font-black text-cyan">N</span>
          </span>
          <span className="font-display text-xl font-bold tracking-wide">NeuralSites</span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan">
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-full border border-cyan/40 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan shadow-glow transition hover:bg-cyan hover:text-ink lg:inline-flex">
          Start a Project
        </a>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {open && (
        <motion.div className="mx-5 mb-4 rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-2xl lg:hidden" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-slate-200 hover:bg-white/5 hover:text-cyan">
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
