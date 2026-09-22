import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import logo from "../assets/logotexto.png";
import { whatsapp } from "../data/plans";

export default function Navbar() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  const reduceMotion = useReducedMotion();
  return (
    <header className="site-header">
      <motion.div
        className="reading-progress"
        style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
        aria-hidden="true"
      />
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <nav className="nav-inner shell" aria-label="Navegación principal">
        <Link to="/" className="brand" aria-label="JL Marketing · Inicio">
          <img src={logo} alt="JL Marketing" width="120" height="40" />
        </Link>
        <span className="nav-studio">Diseño & desarrollo web</span>
        <div className="nav-links">
          <Link to={pathname === "/" ? "/#planes" : "/Presupuesto"}>
            Planes & ejemplos
          </Link>
          <Link to="/#proceso">El proceso</Link>
        </div>
        <a
          className="nav-contact"
          href={whatsapp()}
          target="_blank"
          rel="noreferrer"
        >
          Hablemos <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
