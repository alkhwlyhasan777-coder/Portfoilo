import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 py-24 pt-30 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[6px] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Work <span className="text-cyan-400">Together</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Have a project in mind or looking for a Front-End Developer?
            Feel free to contact me. I'll reply as soon as possible.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;