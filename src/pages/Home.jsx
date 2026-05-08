import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, ExternalLink, Play, Quote, Sparkles, Star, X } from "lucide-react";
import BackgroundFX from "../components/BackgroundFX.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Counter from "../components/Counter.jsx";
import Section from "../components/Section.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { contactHighlights, faqs, logos, metrics, pricing, process, projects, reasons, services, testimonials } from "../data/siteData.js";
import { fadeUp, stagger, viewport } from "../utils/animations.js";
import { useEffect, useState } from "react";

const scrollToContact = () => {
  const form = document.getElementById("contact");
  if (form) {
    const top = form.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
  window.history.pushState(null, "", "#contact");
};

export default function Home() {
  return (
    <main id="home" className="relative">
      <BackgroundFX />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-5 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div className="mx-auto max-w-5xl text-center" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm text-cyan shadow-glow">
            <Sparkles size={16} />
            AI web systems for premium startup launches
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-5xl font-black leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            AI-Powered Websites <span className="text-cyan">Built For The Future</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            NeuralSites creates cinematic, conversion-focused websites for founders, SaaS teams, and modern businesses that need to look impossible to ignore.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-4 font-bold text-ink shadow-glow transition hover:-translate-y-1 hover:bg-white">
              Launch Your Website
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet/60 hover:text-cyan">
              View Pricing
              <Play size={17} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="relative mx-auto mt-14 min-h-[420px] max-w-5xl sm:min-h-[520px]" initial={{ opacity: 0, scale: 0.92, y: 34 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="absolute inset-x-4 top-10 h-[78%] rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-violet backdrop-blur-xl" />
          <motion.div className="absolute inset-x-0 top-0 rounded-[1.5rem] border border-cyan/20 bg-ink/80 p-4 shadow-2xl sm:p-5" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" /></div>
              <span className="rounded-full border border-cyan/30 px-3 py-1 text-xs text-cyan">Live AI build</span>
            </div>
            <div className="grid gap-4">
              <div className="h-24 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/25 via-blue/10 to-violet/25 p-4 sm:h-28">
                <div className="h-3 w-36 rounded-full bg-white/50" />
                <div className="mt-8 h-4 w-56 rounded-full bg-cyan/60" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {["UX signal", "SEO engine", "Lead flow", "AI assist"].map((label, index) => (
                  <motion.div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4" animate={{ opacity: [0.72, 1, 0.72] }} transition={{ duration: 2.5, delay: index * 0.35, repeat: Infinity }}>
                    <div className="mb-4 h-8 w-8 rounded-xl bg-cyan/20" />
                    <div className="text-sm font-semibold">{label}</div>
                    <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan to-violet" style={{ width: `${58 + index * 10}%` }} /></div>
                  </motion.div>
                ))}
              </div>
              <div className="rounded-2xl border border-violet/20 bg-violet/10 p-5">
                <div className="flex items-center justify-between text-sm text-slate-300"><span>Conversion model</span><span className="text-cyan">98.7%</span></div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-cyan via-blue to-violet" initial={{ width: "18%" }} animate={{ width: "88%" }} transition={{ duration: 2, delay: 0.6 }} /></div>
              </div>
            </div>
          </motion.div>
          <div className="absolute -left-2 top-20 rounded-full border border-cyan/20 bg-ink/80 px-3 py-2 text-xs text-cyan shadow-glow sm:-left-8">98% conversion lift</div>
          <div className="absolute -right-2 top-32 rounded-full border border-cyan/20 bg-ink/80 px-3 py-2 text-xs text-cyan shadow-glow sm:-right-8">Built in 7 days</div>
          <div className="absolute bottom-8 left-2 rounded-full border border-cyan/20 bg-ink/80 px-3 py-2 text-xs text-cyan shadow-glow sm:left-12">AI-ready</div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="relative z-10 px-5 py-10 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,.13),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
        <div className="grid gap-5 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-ink/50 p-5 text-center">
              <div className="font-display text-3xl font-black text-white"><Counter value={metric.value} suffix={metric.suffix} /></div>
              <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold tracking-[0.18em] text-slate-500">
          {logos.map((logo) => <span key={logo}>{logo}</span>)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" className="bg-[radial-gradient(circle_at_78%_35%,rgba(34,211,238,.09),transparent_28%)]">
      <div className="grid items-center gap-10 lg:grid-cols-[.78fr_1.22fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan">About NeuralSites</p>
          <h2 className="font-display text-4xl font-black leading-[0.94] sm:text-6xl">We design AI-native experiences that feel inevitable.</h2>
          <p className="mt-6 leading-8 text-slate-300">NeuralSites is a boutique studio of designers, engineers, and growth strategists. We craft luxury, conversion-obsessed websites for ambitious founders building the next decade of the internet.</p>
          <p className="mt-8 text-sm text-slate-500">Studio · Remote-first · Operating worldwide</p>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2">
        {["Conversion architecture", "AI-accelerated delivery", "Luxury startup identity"].map((title, index) => (
          <TiltCard key={title} className="p-7">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-cyan/10 text-cyan"><Sparkles size={22} /></div>
            <h3 className="font-display text-2xl font-bold">{title}</h3>
            <p className="mt-4 leading-7 text-slate-400">
              {index === 0 && "Every section is planned around clarity, trust, proof, and action so visitors know why to choose you."}
              {index === 1 && "AI-assisted research, content shaping, and component workflows keep launches fast without sacrificing craft."}
              {index === 2 && "Your brand gets the visual depth, spacing, typography, and interface polish expected from premium SaaS."}
            </p>
          </TiltCard>
        ))}
          <TiltCard className="p-7">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-cyan/10 text-cyan"><Sparkles size={22} /></div>
            <h3 className="font-display text-2xl font-bold">Production-grade code</h3>
            <p className="mt-4 leading-7 text-slate-400">Clean React, Tailwind, routing, SEO, Netlify deployment, and working lead capture without builder lock-in.</p>
          </TiltCard>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="Capabilities" title="A studio that ships everything you need." copy="From AI landing pages to automation-ready web systems, each service is built as a premium, reusable growth asset." className="bg-[radial-gradient(circle_at_18%_50%,rgba(139,92,246,.1),transparent_24%)]">
      <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        {services.map(([name, Icon]) => (
          <motion.div key={name} variants={fadeUp}>
            <TiltCard className="h-full p-5">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                <Icon size={21} />
              </div>
              <h3 className="font-display text-lg font-bold">{name}</h3>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process" eyebrow="How We Ship" title="A six-step flight plan to launch." className="bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,.1),transparent_32%)]">
      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-cyan/40 to-transparent lg:block" />
        {process.map((step, index) => (
          <motion.div key={step} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className={`relative rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl ${index % 2 === 0 ? "lg:mr-20" : "lg:ml-20 lg:translate-y-16"}`}>
            <span className="absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_24px_rgba(34,211,238,.9)] lg:block" style={index % 2 === 0 ? { right: "-5.6rem" } : { left: "-5.6rem" }} />
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-slate-500">Step 0{index + 1}</p>
            <h3 className="text-right font-display text-2xl font-bold lg:text-left">{step}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{["Deep dives into product, audience and competitive edge.", "Information architecture, narrative and conversion plan.", "Cinematic UI, motion direction and design tokens.", "Production-grade React, performance and accessibility.", "QA, SEO, analytics and a confident release.", "Iterate, A/B test and grow with continuous improvements."][index]}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <Section id="portfolio" eyebrow="Portfolio" title="Premium launch systems disguised as unforgettable websites." copy="Placeholder case studies are structured like real projects so you can replace content and imagery without rebuilding the layout.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <TiltCard key={project.name} className="min-h-[330px] p-6">
            <div className="relative mb-6 h-48 overflow-hidden rounded-2xl border border-white/10 bg-ink">
              <img src={project.image} alt={`${project.name} ${project.category} project preview`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{project.name}</h3>
                <p className="mt-2 text-slate-400">{project.result}</p>
              </div>
              <button onClick={() => setSelected(project)} className="grid h-11 w-11 place-items-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan transition hover:bg-cyan hover:text-ink" aria-label={`Open ${project.name} preview`}>
                <ExternalLink size={20} />
              </button>
            </div>
          </TiltCard>
        ))}
      </div>
      {selected && (
        <motion.div className="fixed inset-0 z-[90] grid place-items-center bg-ink/80 p-5 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-violet" initial={{ scale: 0.92, y: 24 }} animate={{ scale: 1, y: 0 }}>
            <button onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-ink/80 text-white transition hover:text-cyan" aria-label="Close project preview">
              <X size={18} />
            </button>
            <div className="relative h-80 bg-ink">
              <img src={selected.image} alt={`${selected.name} expanded project preview`} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
            </div>
            <div className="p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan">{selected.category}</p>
              <h3 className="mt-2 font-display text-3xl font-bold">{selected.name}</h3>
              <p className="mt-4 leading-7 text-slate-300">A premium AI-startup case study concept with conversion-first messaging, cinematic product visuals, responsive motion, SEO-ready structure, and a scalable React component system.</p>
              <div className="mt-6 inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 font-semibold text-cyan">{selected.result}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing" eyebrow="Investment" title="Premium pricing in USDT." copy="No bloated retainers. Pick the launch scope, then scale when your brand needs deeper systems." className="bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,.13),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,.11),transparent_28%)]">
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {pricing.map((plan) => {
          const Icon = plan.icon;
          return (
            <TiltCard key={plan.name} className={`flex h-full min-h-[650px] flex-col p-6 lg:p-8 ${plan.popular ? "border-cyan/60 shadow-glow" : ""}`}>
              <div className="h-8">
                {plan.popular && <div className="inline-flex rounded-full bg-cyan px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-ink">Most Popular</div>}
              </div>
              <Icon className="mb-5 mt-4 text-cyan" size={32} />
              <h3 className="font-display text-3xl font-bold">{plan.name}</h3>
              <p className="mt-4 min-h-[84px] text-base leading-7 text-slate-400">{plan.description}</p>
              <div className="mt-8 flex items-end gap-2"><span className="font-display text-6xl font-black leading-none">{plan.price}</span><span className="pb-2 font-bold text-cyan">{plan.suffix}</span></div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-base text-slate-300"><Check size={18} className="mt-1 shrink-0 text-cyan" />{feature}</li>
                ))}
              </ul>
              <a href="#contact" onClick={(event) => { event.preventDefault(); scrollToContact(); }} className="relative z-20 mt-auto inline-flex w-full items-center justify-center rounded-full bg-cyan px-5 py-4 text-base font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white">
                Choose Plan
              </a>
            </TiltCard>
          );
        })}
      </div>
    </Section>
  );
}

function WhyChoose() {
  return (
    <Section id="why" eyebrow="Why Choose Us" title="Built like a premium product team, focused like a growth agency." className="bg-[radial-gradient(circle_at_25%_40%,rgba(34,211,238,.09),transparent_28%)]">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(([reason, Icon]) => (
          <TiltCard key={reason} className="p-5">
            <Icon className="mb-4 text-cyan" size={24} />
            <h3 className="font-display text-lg font-bold">{reason}</h3>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <Section id="testimonials" eyebrow="Loved By Founders" title="What clients are saying." className="bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,.12),transparent_32%)]">
      <div className="mx-auto max-w-4xl">
        <motion.div key={item.name} initial={{ opacity: 0, x: 26, filter: "blur(8px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 0.55 }}>
          <TiltCard className="p-7 sm:p-10">
            <Quote className="mb-6 text-cyan" size={28} />
            <div className="mb-5 flex gap-1 text-cyan">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={17} fill="currentColor" />)}</div>
            <p className="text-xl leading-9 text-slate-200">"{item.quote}"</p>
            <div className="mt-7 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-cyan/30 to-violet/40 font-display font-bold">{item.name.charAt(0)}</div>
              <div><h3 className="font-bold">{item.name}</h3><p className="text-sm text-slate-400">{item.role}</p></div>
            </div>
          </TiltCard>
        </motion.div>
        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button key={testimonial.name} onClick={() => setActive(index)} className={`h-3 rounded-full transition-all ${active === index ? "w-10 bg-cyan" : "w-3 bg-white/20 hover:bg-white/40"}`} aria-label={`Show testimonial ${index + 1}`} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Common questions.">
      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map(([question, answer], index) => (
          <div key={question} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl">
            <button className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-lg font-bold" onClick={() => setOpen(open === index ? -1 : index)}>
              {question}
              <ChevronDown className={`shrink-0 text-cyan transition ${open === index ? "rotate-180" : ""}`} />
            </button>
            <motion.div initial={false} animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }} className="overflow-hidden">
              <p className="px-5 pb-5 leading-7 text-slate-400">{answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Start A Project" title="Let's build the future of your brand." copy="The form is wired for EmailJS when environment variables are present and falls back to Netlify Forms on deployed Netlify builds." className="bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,.12),transparent_30%)]">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div className="space-y-4">
          {contactHighlights.map(([label, Icon]) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan/10 text-cyan"><Icon size={22} /></div>
              <span className="font-display text-xl font-bold">{label}</span>
            </div>
          ))}
          <div className="rounded-2xl border border-cyan/20 bg-cyan/10 p-5 text-sm leading-7 text-cyan">
            For production email delivery, add your EmailJS variables or deploy to Netlify with Forms enabled. Both setup paths are documented in the README.
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
