import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import profileImage from "../../../public/myImage.png";
import Skills from "./Skills";

function Hero() {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Hero Animation
      tl.from(".hero-badge", {
        y: -30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
          },
          "-=0.2",
        )
        .from(
          ".hero-text",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".hero-btn",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".hero-image",
          {
            scale: 0.75,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "-=0.7",
        );

      // Floating Image
      gsap.to(".hero-image", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Background Blobs
      gsap.to(".blob-left", {
        y: -40,
        x: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-right", {
        y: 35,
        x: -20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <div>
      <section
        ref={container}
        id="home"
        className="flex min-h-screen items-center justify-center bg-slate-950 px-6 overflow-hidden bg-slate-950 px-6"
      >
        <div className="blob-left absolute left-20 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="blob-right absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-600/20 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 ">
          <div>
            <span className="hero-badge inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              👋 Welcome to my Portfolio
            </span>

            <h1 className="hero-title mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Hi, I'm
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hassan
              </span>
            </h1>

            <p className="hero-text mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Front-End Developer specialized in building modern, responsive,
              and high-performance web applications using React, Tailwind CSS,
              JavaScript, and modern web technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="hero-btn rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_10px_30px_rgba(6,182,212,.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="hero-btn rounded-xl border border-white/20 px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

            <img
              src={profileImage}
              alt="Hassan"
              className="hero-image relative z-10 w-[360px] rounded-full drop-shadow-[0_20px_80px_rgba(6,182,212,.45)]"
            />
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
}
export default Hero;
