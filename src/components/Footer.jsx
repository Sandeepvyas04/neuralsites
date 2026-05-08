import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { navLinks } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <a href="#home" className="font-display text-2xl font-bold">NeuralSites</a>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">Premium AI websites, SaaS interfaces, and conversion systems for ambitious digital brands.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-300">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cyan">{link.label}</a>
          ))}
        </div>
        <div className="flex gap-3">
          {[Twitter, Linkedin, Instagram, Github].map((Icon, index) => (
            <a key={index} href="#contact" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan/50 hover:text-cyan" aria-label="Social link">
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} NeuralSites. All rights reserved.
      </div>
    </footer>
  );
}
