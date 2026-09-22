import { plans } from "../data/plans";

export default function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> DISEÑO WEB PARA NEGOCIOS REALES
        </p>
        <h1 id="hero-title">
          Tu negocio merece
          <br />
          una web que{" "}
          <span className="hero-emphasis">
            atrape
            <svg viewBox="0 0 300 18" aria-hidden="true">
              <path d="M3 12Q130 -3 294 8M47 16Q170 4 273 12" />
            </svg>
          </span>
          <span className="accent">.</span>
        </h1>
        <p className="hero-description">
          Convertí un simple escaneo en el comienzo de algo.
          <br className="desktop-break" /> Diseñamos una web que muestre lo
          mejor de tu negocio.
        </p>
        <div className="hero-actions">
          <a href="#planes" className="button button-lime">
            Encontrá tu plan <span aria-hidden="true">↓</span>
          </a>
          <span className="hero-price">
            Tu web, desde <strong>$3.000</strong>
          </span>
        </div>
        <div className="hero-benefits">
          <span>Diseño a tu medida</span>
          <span>Listo para celular</span>
          <span>Presupuesto sin costo</span>
        </div>
      </div>
      <a
        className="hero-showcase"
        href={plans[0].link}
        target="_blank"
        rel="noreferrer"
        aria-label="Explorar la web de ejemplo Café Aurora"
      >
        <div className="showcase-label">
          <span>DE LA IDEA A TU PANTALLA</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="showcase-browser">
          <div className="browser-chrome" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>Café Aurora · vista previa</span>
          </div>
          <img
            src={plans[0].image}
            alt="Diseño de ejemplo para Café Aurora"
            width="640"
            height="360"
            fetchPriority="high"
          />
        </div>
        <div className="showcase-sticker">
          <span aria-hidden="true">✳</span>
          <div>
            Así podría verse
            <br />
            <strong>tu próximo paso.</strong>
          </div>
        </div>
        <div className="showcase-caption">
          <span>Un ejemplo. Infinitas posibilidades.</span>
          <span>Exploralo ↗</span>
        </div>
      </a>
    </section>
  );
}
