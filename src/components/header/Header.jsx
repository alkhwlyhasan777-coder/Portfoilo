import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../../assets/image/myImage.png";
import { FaThList } from "react-icons/fa";

const navigation = [
  { label: "Home", to: "/", end: true },
  { label: "About my work", to: "/about-my-work" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Hassan home"
        >
          <img
            src={image}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-2xl font-bold tracking-wide text-white">
            Hassan<span className="text-cyan-400">.</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 lg:hidden"
          >
            <FaThList size={20} aria-hidden="true" />
          </button>

          <ul
            id="primary-navigation"
            className={`absolute left-0 top-20 flex w-full flex-col gap-3 border-b border-white/10 bg-slate-950 p-6 transition-all duration-300 lg:static lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:border-none lg:bg-transparent lg:p-0 ${
              isMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-8 opacity-0 lg:visible lg:translate-y-0 lg:opacity-100"
            }`}
          >
            {navigation.map(({ label, to, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-cyan-400" />
                      )}
                    </>
                  )}
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
