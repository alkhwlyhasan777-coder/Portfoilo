import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import image from "../../assets/image/myImage.png";
import { FaThList, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", to: "/" },
  { label: "About my work", to: "/about-my-work" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="Hassan home">
          <img src={image} alt="" width="40" height="40" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-2xl font-bold tracking-wide text-white">Hassan<span className="text-cyan-400">.</span></span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 lg:hidden">
            {menuOpen ? <FaTimes size={20} /> : <FaThList size={20} />}
          </button>
          <ul id="primary-navigation" className={`${menuOpen ? "flex" : "hidden"} absolute left-0 top-20 w-full flex-col gap-4 border-b border-white/10 bg-slate-950 p-6 lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:border-none lg:bg-transparent lg:p-0`}>
            {links.map(({ label, to }) => (
              <li key={to}>
                <NavLink to={to} onClick={() => setMenuOpen(false)} className={({ isActive }) => `relative text-sm font-medium transition-colors ${isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"}`}>
                  {({ isActive }) => <>{label}{isActive && <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-cyan-400" aria-hidden="true" />}</>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
