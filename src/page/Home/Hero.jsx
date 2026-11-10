import Skills from "./Skills";

function Hero() {
  return (
    <div>
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6"
      >
        <div className="pointer-events-none absolute left-20 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-600/20 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              👋 Welcome to my Portfolio
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Hi, I'm
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hassan
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Front-End Developer specialized in building modern, responsive,
              and high-performance web applications using React, Tailwind CSS,
              JavaScript, and modern web technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-cyan-400 hover:shadow-[0_10px_30px_rgba(6,182,212,.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-8 py-4 text-white transition-colors duration-300 hover:border-cyan-400 hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <img
              src="/myImage.png"
              alt="Hassan - Front-End Developer"
              loading="eager"
              fetchPriority="high"
              className="relative z-10 h-[280px] w-[280px] rounded-full border-4 border-cyan-400/30 object-cover object-center shadow-[0_20px_80px_rgba(6,182,212,.25)] sm:h-[340px] sm:w-[340px] lg:h-[360px] lg:w-[360px]"
            />
          </div>
        </div>
      </section>

      <Skills />
    </div>
  );
}

export default Hero;
