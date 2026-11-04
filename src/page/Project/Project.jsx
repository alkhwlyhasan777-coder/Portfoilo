import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projectList } from "./ProjectData";

function Project() {
  return (
    <section className="min-h-screen bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 uppercase tracking-[6px] text-cyan-400">Portfolio</p>
          <h2 className="text-4xl font-bold">My Latest <span className="text-cyan-400">Projects</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">Selected projects built with modern front-end technologies, focusing on clean code, responsive layouts, and user experience.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectList.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-500 hover:-translate-y-2 hover:border-cyan-400">
              <div className="overflow-hidden">
                <img src={project.image} alt={`${project.title} project preview`} width="640" height="360" loading="lazy" decoding="async" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-5 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => <span key={tool} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">{tool}</span>)}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300">
                    Live Demo <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`} className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300">
                    <FaGithub aria-hidden="true" /> Source
                  </a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
