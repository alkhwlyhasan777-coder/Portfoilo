import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { contact } from "../../data/contact";
import { projectList } from "./ProjectData";

function Project() {
  const socialMedia = [
    { name: "GitHub", icon: <FaGithub />, link: contact.github },
    { name: "LinkedIn", icon: <FaLinkedin />, link: contact.linkedin },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: contact.whatsapp.href },
    { name: "Email", icon: <FaEnvelope />, link: contact.email.href },
  ];

  return (
    <section className="min-h-screen bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 uppercase tracking-[6px] text-cyan-400">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold">
            My Latest <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Here are some of the projects I have built using modern Front-End
            technologies. Every project focuses on clean code, responsive
            design, and user experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectList.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-500 hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-5 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.title}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold transition hover:bg-cyan-400"
                >
                  Live Demo
                  <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-slate-800 pt-12">
          <h3 className="mb-8 text-center text-2xl font-bold">Let's Connect</h3>
          <div className="flex justify-center gap-6">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={social.name}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-2xl transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
