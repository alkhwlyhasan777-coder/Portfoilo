import { useRef, useState } from "react";
import { sendEmail } from "../../services/email";

function ContactForm() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.current || loading) return;

    setLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      await sendEmail(form.current);
      form.current.reset();
      setFeedback({
        type: "success",
        message: "Your message has been sent successfully. Thank you!",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setFeedback({
        type: "error",
        message: "We couldn't send your message. Please try again or contact me directly by email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-slate-900 p-8"
    >
      <label className="sr-only" htmlFor="contact-name">Your name</label>
      <input
        id="contact-name"
        name="user_name"
        type="text"
        placeholder="Your Name"
        autoComplete="name"
        minLength={2}
        maxLength={80}
        required
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
      />

      <label className="sr-only" htmlFor="contact-email">Your email</label>
      <input
        id="contact-email"
        name="user_email"
        type="email"
        placeholder="Your Email"
        autoComplete="email"
        maxLength={120}
        required
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
      />

      <label className="sr-only" htmlFor="contact-subject">Subject</label>
      <input
        id="contact-subject"
        name="subject"
        type="text"
        placeholder="Subject"
        minLength={3}
        maxLength={120}
        required
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
      />

      <label className="sr-only" htmlFor="contact-message">Your message</label>
      <textarea
        id="contact-message"
        name="message"
        rows={6}
        placeholder="Your Message"
        minLength={10}
        maxLength={2000}
        required
        className="w-full resize-y rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
      />

      {feedback.message && (
        <p
          role={feedback.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`rounded-xl p-4 text-sm ${
            feedback.type === "success"
              ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          {feedback.message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
