import { Link, useLocation } from "react-router-dom";
import { m, useScroll, useSpring, useReducedMotion } from "framer-motion";
import logo from "../assets/optimized/logo.webp";
import { whatsapp } from "../data/plans";
import ArrowIcon from "./ArrowIcon";

export default function Navbar() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  const reduceMotion = useReducedMotion();
  return (
    <header className="site-header">
      <m.div
        className="reading-progress"
        style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
        aria-hidden="true"
      />
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <nav className="nav-inner shell" aria-label="Navegación principal">
        <Link to="/" className="brand ml-1" aria-label="JL Marketing · Inicio">
          <img src={logo} alt="JL Marketing" width="120" height="40" />
        </Link>
        <span className="nav-studio mt-2">Diseño & desarrollo web</span>
        <div className="hidden nav-links">
          <Link to={pathname === "/" ? "/#planes" : "/Presupuesto"}>
            Planes y ejemplos
          </Link>
          <Link to="/#proceso">El proceso</Link>
        </div>
        <a
          className="nav-contact"
          href={whatsapp()}
          target="_blank"
          rel="noreferrer"
        >
          Contáctanos <span aria-hidden="true">
            <ArrowIcon className="w-3"/>
          </span>
        </a>
      </nav>
    </header>
  );
}
