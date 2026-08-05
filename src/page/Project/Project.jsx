import NewVista from "../../assets/image/new-vista.png";
import Crud from "../../assets/image/crud.png";
import Store from "../../assets/image/store.png";
import Author from "../../assets/image/author.webp";
import Portfolio from "../../assets/image/portfolio.png";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";


function Project() {

  const projectList = [
    {
      title: "website New Vista",
      description:
        "A website for a company offering tourism and travel services.",
      image: NewVista,
      link: "https://alkhwlyhasan777-coder.github.io/New-Vista/",
      tools: ["HTML", "CSS", "JavaScript", "responsive design"],
    },
    {
      title: "Task Manager App",
      description:
        "A web application that allows users to manage their tasks and to-do lists.",
      image: Crud,
      link: "https://alkhwlyhasan777-coder.github.io/edit--crud/",
      tools: ["HTML5", "CSS", "JavaScript", "LocalStorge", "responsive design"],
    },
    {
      title: "website Auther",
      description:
        "A website for a author to showcase their work and connect with readers.",
      image: Author,
      link: "https://alkhwlyhasan777-coder.github.io/Author/",
      tools: ["HTML5", "CSS", "JavaScript", "responsive design"],
    },
    {
      title: "website E-commerce",
      description: "An online store for selling products and services.",
      link: "https://e-commerce-six-chi-27.vercel.app/",
      image: Store,
      tools: [
        "HTML5",
        "CSS",
        "JavaScript",
        "React",
        "Api",
        "responsive design",
      ],
    },
    {
      title: "website Portfolio",
      description:
        "A personal website to showcase my work and skills as a front-end developer.",
      link: "https://alkhwlyhasan777-coder.github.io/Myportfolio-/",
      image: Portfolio,
      tools: ["HTML5", "CSS", "JavaScript", "responsive design"],
    },
  ];
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
        {/* Heading */}
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

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectList.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-500 hover:-translate-y-2 hover:border-cyan-400"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>

                <p className="mb-5 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
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
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold transition hover:bg-cyan-400"
                >
                  Live Demo
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-24 border-t border-slate-800 pt-12">
          <h3 className="mb-8 text-center text-2xl font-bold">Let's Connect</h3>

          <div className="flex justify-center gap-6">
            {socialMMedia.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer noreferrer"
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
