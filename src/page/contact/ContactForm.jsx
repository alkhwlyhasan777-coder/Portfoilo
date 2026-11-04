import { useRef, useState } from "react";
import { sendEmail } from "../../services/email";

function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.current || status.type === "loading") return;

    setStatus({ type: "loading", message: "Sending your message..." });
    try {
      await sendEmail(form.current);
      form.current.reset();
      setStatus({ type: "success", message: "Your message has been sent successfully. I'll get back to you soon." });
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus({ type: "error", message: "We couldn't send your message. Please try again or contact me directly by email." });
    }
  };

  const feedbackColor = status.type === "error" ? "text-rose-400" : status.type === "success" ? "text-emerald-400" : "text-slate-400";

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-slate-900 p-8" aria-busy={status.type === "loading"}>
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">Your Name</label>
        <input id="contact-name" name="user_name" type="text" autoComplete="name" minLength={2} maxLength={80} placeholder="Your Name" required className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">Your Email</label>
        <input id="contact-email" name="user_email" type="email" autoComplete="email" maxLength={120} placeholder="you@example.com" required className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-300">Subject</label>
        <input id="contact-subject" name="subject" type="text" minLength={3} maxLength={120} placeholder="How can I help?" required className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">Your Message</label>
        <textarea id="contact-message" name="message" rows={6} minLength={10} maxLength={3000} placeholder="Tell me a little about your project..." required className="w-full resize-y rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
      </div>
      <p role="status" aria-live="polite" className={`text-sm ${feedbackColor}`}>{status.message}</p>
      <button type="submit" disabled={status.type === "loading"} className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50">
        {status.type === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
