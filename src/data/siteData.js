import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Cpu,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  MessagesSquare,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  WandSparkles,
  Zap
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const metrics = [
  { value: 150, suffix: "+", label: "Projects launched" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 24, suffix: "/7", label: "Launch support" },
  { value: 5, suffix: " day", label: "Starter delivery" }
];

export const logos = ["NOVA AI", "Quantix", "Fluxbase", "Auraloop", "Vertex Labs"];

export const services = [
  ["AI Website Development", BrainCircuit],
  ["SaaS Websites", Layers3],
  ["Startup Landing Pages", Rocket],
  ["Business Websites", BriefcaseBusiness],
  ["Portfolio Websites", Sparkles],
  ["UI/UX Design", WandSparkles],
  ["SEO Optimization", Search],
  ["Website Automation", Cpu],
  ["AI Chatbot Integration", Bot],
  ["Branding & Strategy", Globe2]
];

export const process = ["Discovery", "Strategy", "Design", "Development", "Launch", "Scaling"];

export const projects = [
  {
    name: "Lumen",
    category: "AI SaaS Dashboard",
    result: "+42% demo conversions",
    palette: "from-cyan/30 via-blue/20 to-violet/40",
    image: "/projects/lumen-dashboard.svg"
  },
  {
    name: "Helix Labs",
    category: "AI Web App",
    result: "7-day premium launch",
    palette: "from-violet/35 via-cyan/15 to-blue/35",
    image: "/projects/helix-webapp.svg"
  },
  {
    name: "Orbit",
    category: "Mobile Ecosystem",
    result: "3.1x lead quality lift",
    palette: "from-blue/35 via-violet/20 to-cyan/30",
    image: "/projects/orbit-mobile.svg"
  },
  {
    name: "Vela",
    category: "Founder Portfolio",
    result: "Awwwards-style relaunch",
    palette: "from-cyan/25 via-violet/30 to-fuchsia-500/20",
    image: "/projects/vela-portfolio.svg"
  },
  {
    name: "Northstar",
    category: "AI Agency",
    result: "Premium agency refresh",
    palette: "from-cyan/30 via-slate-600/20 to-blue/30",
    image: "/projects/northstar-agency.svg"
  },
  {
    name: "Plasma",
    category: "DTC Brand",
    result: "Mobile-first sales lift",
    palette: "from-violet/25 via-cyan/20 to-emerald-400/20",
    image: "/projects/plasma-brand.svg"
  }
];

export const pricing = [
  {
    name: "Starter Plan",
    price: "199",
    suffix: "USDT",
    description: "A sharp launch foundation for lean brands that need a premium first impression fast.",
    features: ["1-3 pages", "Mobile responsive", "SEO optimized", "Contact form", "Basic animations", "Delivery in 5 days"],
    icon: Zap
  },
  {
    name: "Pro Plan",
    price: "499",
    suffix: "USDT",
    popular: true,
    description: "The signature NeuralSites build for startups that need motion, polish, and conversion depth.",
    features: ["Premium UI/UX", "Advanced animations", "Custom sections", "SEO optimization", "Performance optimization", "Priority support", "Delivery in 7 days"],
    icon: Star
  },
  {
    name: "Enterprise Plan",
    price: "999+",
    suffix: "USDT",
    description: "A fully custom digital system with integrations, automation, and scalable architecture.",
    features: ["Fully custom website", "AI integrations", "Dashboard systems", "Booking systems", "API integrations", "Advanced automation", "Premium support", "Scalable architecture"],
    icon: ShieldCheck
  }
];

export const reasons = [
  ["Lightning fast delivery", Gauge],
  ["AI-enhanced workflow", BrainCircuit],
  ["Conversion-focused design", ArrowUpRight],
  ["Mobile-first development", Code2],
  ["SEO optimized", Search],
  ["Premium animations", Sparkles],
  ["Modern architecture", Layers3],
  ["Scalable solutions", LockKeyhole]
];

export const testimonials = [
  {
    quote: "NeuralSites made our AI product feel venture-backed before we had a full marketing team. The site launched fast and instantly lifted demo quality.",
    name: "Maya Chen",
    role: "Founder, AstraFlow AI"
  },
  {
    quote: "The design system, motion, and conversion strategy felt incredibly premium. We finally had a website that matched the ambition of the product.",
    name: "Elias Rowe",
    role: "CEO, LumenOps"
  },
  {
    quote: "They built the kind of landing page investors actually remember. Clean code, strong SEO, and a polished handoff for our internal team.",
    name: "Priya Nair",
    role: "COO, FinPilot Cloud"
  }
];

export const faqs = [
  ["How does pricing work?", "Pricing is packaged in USDT by project scope. Starter is 199 USDT, Pro is 499 USDT, and Enterprise begins at 999+ USDT."],
  ["How fast can you deliver?", "Starter projects can ship in 5 days. Pro projects usually ship in 7 days. Enterprise timelines depend on integrations and system depth."],
  ["Can you handle hosting?", "Yes. The site is prepared for Netlify deployment, and we can help connect a custom domain, SSL, redirects, and environment variables."],
  ["Do you offer maintenance?", "Yes. Maintenance can include content updates, performance audits, SEO refinements, analytics, and ongoing feature work."],
  ["How many revisions are included?", "Each plan includes revision rounds matched to the scope. Larger builds receive structured review checkpoints during design and development."],
  ["Is SEO included?", "Yes. Every build includes semantic structure, metadata, page speed care, responsive layout, and SEO-ready content hierarchy."],
  ["What support do I get?", "You get launch support, handoff guidance, and priority support on Pro and Enterprise builds."],
  ["Can you build custom systems?", "Yes. Enterprise projects can include dashboards, booking systems, AI workflows, API integrations, and automation."],
  ["What payment methods are supported?", "Pricing is listed only in USDT. Contact us to coordinate the payment workflow for your project."]
];

export const projectTypes = ["AI Website", "SaaS Website", "Startup Landing Page", "Business Website", "Automation System", "Branding + UI/UX"];
export const budgets = ["199 USDT", "499 USDT", "999+ USDT", "Custom USDT Scope"];
export const timelines = ["5 days", "7 days", "2-4 weeks", "Flexible"];

export const contactHighlights = [
  ["EmailJS ready", MessagesSquare],
  ["Netlify Forms", Check],
  ["Validated fields", ShieldCheck]
];
