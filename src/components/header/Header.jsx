import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { CiLight } from "react-icons/ci";
// import { MdDarkMode } from "react-icons/md";
import { FaThList } from "react-icons/fa";
function Header() {
  const link = ["home", "About my work", "projects", "contact"];
  // const [darkMode, setDarkMode] = useState(true);
  const [media, setMedia] = useState(false);

  const handleMedia = () => {
    setMedia((prev) => !prev);
  };
  // const handleDarkMode = () => {
  //   setDarkMode((prev) => !prev);
  //   document.body.classList.toggle("dark");
  // };
let image = "../../image/myImage.png"
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/" className="flex items-center  gap-3">
          <img
            src={image}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover "
          />

          <h1 className="text-2xl font-bold tracking-wide text-white">
            Hassan
            <span className="text-cyan-400">.</span>
          </h1>
        </a>

        <nav className="flex items-center gap-6">
          <button
            onClick={handleMedia}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-cyan-500 lg:hidden"
          >
            <FaThList size={20} />
          </button>
          <ul
            className={`absolute left-0 top-20 flex w-full flex-col gap-3 border-b border-white/10 bg-slate-950 p-6 transition-all duration-300 lg:static lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:border-none lg:bg-transparent lg:p-0 ${
              media
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0 lg:translate-y-0 lg:opacity-100"
            }`}
          >
            {link.map((item) => 
            <NavLink
              to={
                item === "home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`
              }
              className={({ isActive }) =>
                `relative text-sm font-medium transition-all duration-300 ${
                  isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.charAt(0).toUpperCase() + item.slice(1)}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-cyan-400"></span>
                  )}
                </>
              )}
            </NavLink>)}
          </ul>
        </nav>

        {/* Dark Mode
        <button
          onClick={handleDarkMode}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:rotate-180 hover:bg-cyan-500"
        >
          {darkMode ? <MdDarkMode size={22} /> : <CiLight size={22} />}
        </button> */}
      </div>
    </header>
  );
}

export default Header;
