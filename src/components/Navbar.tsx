import { Link } from "react-router-dom";
import logo from "../assets/logotexto.png";
import { whatsapp } from "../data/plans";

export default function Navbar() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <nav className="nav-inner shell" aria-label="Navegación principal">
        <Link to="/" className="brand" aria-label="JL Marketing · Inicio">
          <img src={logo} alt="JL Marketing" />
        </Link>
        <div className="nav-links">
          <Link to="/Presupuesto">Planes y ejemplos</Link>
          <Link to="/#proceso">Cómo trabajamos</Link>
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
