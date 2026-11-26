import { plans } from "../data/plans";
import coverCard from "../assets/optimized/cafe-card-cover.webp";
import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  const example = plans[0];
  return (
    <section className="hero studio-cover" aria-labelledby="cover-title">
      <div className="cover-copy">
        <h1 id="cover-title">Tu negocio,<br />de la tarjeta<br /><em>a la web.</em></h1>
        <p>Diseñamos tu página y tu tarjeta QR para que tus clientes te encuentren con un escaneo.</p>
        <a className="cover-link" href="#planes">Ver planes desde {example.price} UYU <ArrowIcon direction="down" /></a>
      </div>
      <figure className="cover-work">
        <div className="cover-print">
          <img className="cover-screen" src={example.image} srcSet={`${example.imageSmall} 640w, ${example.image} 1200w`} sizes="(max-width: 760px) 78vw, 44vw" alt="Página web de ejemplo para Café Aurora" width="1200" height="675" fetchPriority="high" />
          <img className="cover-card" src={coverCard} alt="Tarjeta QR a juego con la web" width="900" height="500" />
        </div>
        <figcaption><strong>Café Aurora</strong><span>Ejemplo de web y tarjeta QR</span></figcaption>
      </figure>
    </section>
  );
}

