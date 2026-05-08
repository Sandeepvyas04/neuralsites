import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { budgets, projectTypes, timelines } from "../data/siteData";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  business: "",
  projectType: projectTypes[0],
  budget: budgets[0],
  timeline: timelines[0],
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [errors, setErrors] = useState({});

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!/^[+()\-\s\d]{7,20}$/.test(form.phone.trim())) next.phone = "Enter a valid contact number.";
    if (form.business.trim().length < 2) next.business = "Enter your business name.";
    if (form.message.trim().length < 15) next.message = "Tell us a little more about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submitNetlify = async () => {
    const body = new URLSearchParams({ "form-name": "neuralsites-contact", ...form }).toString();
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    });
    if (!response.ok) throw new Error("Netlify form submission failed.");
  };

  const submitEmailJS = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) return false;

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        from_email: form.email,
        phone_number: form.phone,
        business_name: form.business,
        project_type: form.projectType,
        budget: form.budget,
        timeline: form.timeline,
        message: form.message,
        to_email: import.meta.env.VITE_CONTACT_TO_EMAIL
      },
      { publicKey }
    );
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus({ type: "loading", message: "Transmitting project brief..." });
    try {
      const emailSent = await submitEmailJS();
      if (!emailSent) await submitNetlify();
      setForm(initialForm);
      setStatus({ type: "success", message: "Brief received. NeuralSites will reply with next steps shortly." });
    } catch (error) {
      setStatus({ type: "error", message: "Submission failed. Check EmailJS or Netlify Forms setup, then try again." });
    }
  };

  return (
    <form
      name="neuralsites-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-violet backdrop-blur-xl sm:p-8"
    >
      <input type="hidden" name="form-name" value="neuralsites-contact" />
      <p className="hidden">
        <label>Do not fill this out: <input name="bot-field" /></label>
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" value={form.name} onChange={update} error={errors.name} autoComplete="name" />
        <Field label="Email Address" name="email" type="email" value={form.email} onChange={update} error={errors.email} autoComplete="email" />
        <Field label="Contact Number" name="phone" type="tel" value={form.phone} onChange={update} error={errors.phone} autoComplete="tel" />
        <Field label="Business Name" name="business" value={form.business} onChange={update} error={errors.business} autoComplete="organization" />
        <Select label="Project Type" name="projectType" value={form.projectType} onChange={update} options={projectTypes} />
        <Select label="Budget" name="budget" value={form.budget} onChange={update} options={budgets} />
        <Select label="Timeline" name="timeline" value={form.timeline} onChange={update} options={timelines} />
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium text-slate-200" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={update}
          className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-ink/65 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan/60 focus:ring-4 focus:ring-cyan/10"
          placeholder="Tell us about your offer, audience, pages, integrations, and launch goals."
        />
        {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-6 py-4 font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-wait disabled:opacity-70"
      >
        {status.type === "loading" ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-ink/25 border-t-ink" /> : <Send size={18} />}
        Send Project Brief
      </button>
      <AnimatePresence>
        {status.message && (
          <motion.p
            className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${status.type === "success" ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200" : status.type === "error" ? "border-rose-400/25 bg-rose-400/10 text-rose-200" : "border-cyan/25 bg-cyan/10 text-cyan"}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            {status.message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({ label, error, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-200" htmlFor={props.name}>{label}</label>
      <input
        id={props.name}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/65 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan/60 focus:ring-4 focus:ring-cyan/10"
        {...props}
      />
      {error && <p className="mt-2 text-sm text-rose-300">{error}</p>}
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-200" htmlFor={props.name}>{label}</label>
      <select id={props.name} className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/65 px-4 py-3 text-white outline-none transition focus:border-cyan/60 focus:ring-4 focus:ring-cyan/10" {...props}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}
