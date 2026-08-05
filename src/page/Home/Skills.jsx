import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiVite,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiRedux />, name: "Redux Toolkit" },
    ],
  },
  {
    title: "Learning",
    items: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ],
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

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-6 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Professional Skills
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            I build modern, responsive, and scalable web applications using
            the latest frontend technologies and development tools.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <h3 className="mb-8 text-2xl font-bold text-cyan-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl bg-white/5 p-4 transition hover:bg-cyan-500/10"
                  >
                    <span className="text-3xl text-cyan-400">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </section>
  );
}

export default Skills;