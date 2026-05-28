import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logoblanco.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const location = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);

  // cerrar menú al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // cerrar menú tocando afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // ocultar navbar al bajar
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScroll && window.scrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Sobre nosotros", path: "/login" },
    { name: "Herramientas utilizadas", path: "/login" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35 }}
      className="
        fixed top-0 left-0
        w-full z-50
        border-b border-white/10
        bg-black/70
        backdrop-blur-xl
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-18">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img
                src={logo}
                className="h-8 ml-5"
                alt="JLan"
              />

              <div className="absolute inset-0 blur-xl bg-red-600/30 opacity-0 group-hover:opacity-100 transition" />
            </div>

            <span className="font-semibold tracking-wide text-l">
              JLan Soluciones Web
            </span>
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="
                  relative
                  text-sm
                  hover:text-red-500
                  transition
                  duration-300
                  group
                "
              >
                {link.name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    w-0
                    h-[2px]
                    bg-red-600
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="flex items-center gap-2 md:hidden">

            <Link to="/agenda">
              <button
                className="
                  bg-red-700
                  px-3 py-2
                  rounded-lg
                  text-sm
                  hidden
                "
              >
                Turno
              </button>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                relative
                w-11 h-11
                rounded-xl
                flex items-center justify-center
                bg-white/5
                border border-white/10
                hover:bg-white/10
                transition
              "
            >
              <AnimatePresence mode="wait">

                {menuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}

              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (
          <>
            {/* fondo oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed inset-0
                bg-black/60
                backdrop-blur-sm
                md:hidden
              "
            />

            {/* menú */}
            <motion.div
              ref={menuRef}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                md:hidden
                absolute
                top-full
                left-0
                w-full
                bg-black/95
                border-b border-white/10
                backdrop-blur-2xl
                overflow-hidden
              "
            >
              <div className="flex flex-col p-5 gap-2">

                {links.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="
                        flex items-center
                        justify-between
                        py-4 px-4
                        rounded-xl
                        bg-white/5
                        border border-white/5
                        hover:bg-red-700/20
                        hover:border-red-700/30
                        transition
                      "
                    >
                      {link.name}

                      <span className="text-red-500">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}

                <Link to="/admin">
                  <button
                    className="
                      w-full
                      mt-2
                      py-4
                      rounded-xl
                      bg-red-700
                      hover:bg-red-600
                      transition
                      font-medium
                    "
                  >
                    Pedir presupuesto
                  </button>
                </Link>

              </div>
            </motion.div>
          </>
        )}

      </AnimatePresence>
    </motion.nav>
  );
}