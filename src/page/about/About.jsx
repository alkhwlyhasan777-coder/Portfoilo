import { useRef } from "react";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
function About() {
  const aboutRef = useRef(null);
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pt-30 pb-24 text-white md:px-10 lg:px-20"    >
      {/* Background */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

      <div ref={aboutRef} className="relative mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[5px] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Building Modern
            <span className="text-cyan-400"> Web Experiences</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              Front-End Developer
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I'm Hassan, a Front-End Developer passionate about creating
              modern, responsive, and high-performance web applications. I
              specialize in building clean user interfaces with React,
              JavaScript, and Tailwind CSS.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              My focus is transforming ideas into interactive digital
              experiences with clean code, smooth animations, and user-friendly
              designs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <h4 className="text-2xl font-bold text-cyan-400">5+</h4>
                <p className="text-sm text-slate-400">Projects Built</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <h4 className="text-2xl font-bold text-cyan-400">1+</h4>
                <p className="text-sm text-slate-400">Years Learning</p>
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400">
              <FaCode className="text-cyan-400" size={30} />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Clean Code
              </h3>
              <p className="mt-2 text-slate-400">
                Writing maintainable and scalable code following modern
                development practices.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400">
              <FaLaptopCode className="text-cyan-400" size={30} />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Responsive Design
              </h3>
              <p className="mt-2 text-slate-400">
                Creating websites that work perfectly across all devices.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400">
              <FaRocket className="text-cyan-400" size={30} />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Modern Technologies
              </h3>
              <p className="mt-2 text-slate-400">
                React, Tailwind CSS, JavaScript, GSAP and modern frontend tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
