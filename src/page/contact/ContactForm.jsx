import { useRef, useState } from "react";
import { sendEmail } from "../../services/email";

function ContactForm() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await sendEmail(form.current);

      alert("Message sent successfully ✅");

      form.current.reset();
    } catch (err) {
      alert("Failed to send message ❌");

      console.log(err);
    }

    setLoading(false);
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-slate-900 p-8"
    >
      <input
        name="user_name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none"
      />

      <input
        name="user_email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none"
      />

      <input
        name="subject"
        type="text"
        placeholder="Subject"
        required
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Your Message"
        required
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-cyan-500 py-4 font-semibold transition hover:bg-cyan-400 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;