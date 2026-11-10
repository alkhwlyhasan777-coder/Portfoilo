import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { projectList } from "./ProjectData";

function Project() {
  const socialMMedia = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/alkhwlyhasan777-coder",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/hasan-alkhwly/",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/1234567890",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=alkhwlyhasan777@gmail.com",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-cyan-400 uppercase tracking-[6px]">
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

        <div className="grid auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectList.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="h-56 shrink-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 min-h-[32px] text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-5 min-h-[84px] line-clamp-3 text-sm leading-7 text-slate-400">
                  {project.description || "A responsive web application built with modern front-end technologies, focused on usability and a clean user experience."}
                </p>

                <div className="mb-6 flex min-h-[76px] flex-wrap content-start gap-2 overflow-hidden">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="h-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold transition hover:bg-cyan-400"
                >
                  Live Demo
                  <FaExternalLinkAlt />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-slate-800 pt-12">
          <h3 className="mb-8 text-center text-2xl font-bold">Let's Connect</h3>
          <div className="flex justify-center gap-6">
            {socialMMedia.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
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
