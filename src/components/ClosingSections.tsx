import { Link } from "react-router-dom";
import { plans, whatsapp } from "../data/plans";
import logo from "../assets/logotexto.png";

export default function ClosingSections() {
  return (
    <>
      <section className="bridge-section shell" aria-labelledby="bridge-title">
        <div className="qr-art">
          <img
            src={plans[1].cardImage}
            alt="Tarjeta King Barber con código QR"
            loading="lazy"
            width="900"
            height="500"
          />
          <span className="qr-art-label">DEL MOSTRADOR AL CELULAR ↗</span>
        </div>
        <div className="bridge-copy">
          <p className="eyebrow">UNA EXPERIENCIA CONECTADA</p>
          <h2 id="bridge-title">
            Tu tarjeta abre la puerta.
            <br />
            <span>Tu web hace el resto.</span>
          </h2>
          <p>
            En el mostrador, en una mesa o en una conversación. Una tarjeta con
            QR lleva a tus clientes directo a lo que necesitan conocer de tu
            negocio.
          </p>
          <a href="#planes" className="text-link">
            Descubrí las tarjetas de ejemplo <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <section
        className="process-section shell"
        id="proceso"
        aria-labelledby="process-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">VOS CONOCÉS TU NEGOCIO. NOSOTROS, LA WEB.</p>
            <h2 id="process-title">De «tengo una idea» a «ya está online».</h2>
          </div>
        </div>
        <div className="process-grid">
          {[
            [
              "01",
              "Contanos tu idea",
              "Qué hacés, qué te gustaría mostrar y qué necesitás. Te orientamos y preparamos un presupuesto sin costo.",
            ],
            [
              "02",
              "Le damos forma",
              "Diseñamos y desarrollamos tu página. Vas viendo los avances y ajustamos los detalles juntos.",
            ],
            [
              "03",
              "Salí a mostrarla",
              "Publicamos tu web y diseñamos tu tarjeta QR. También podés consultar por mantenimiento y actualizaciones.",
            ],
          ].map(([number, title, description]) => (
            <article key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="faq-section shell" aria-labelledby="faq-title">
        <div>
          <p className="eyebrow">ANTES DE DAR EL PASO</p>
          <h2 id="faq-title">
            Dudas normales.
            <br />
            Respuestas claras.
          </h2>
        </div>
        <div className="faq-list">
          {[
            [
              "¿Mi página va a ser igual al ejemplo?",
              "No. Los ejemplos te ayudan a explorar la propuesta de cada plan. Diseñamos tu página con la identidad, el contenido y las necesidades de tu negocio.",
            ],
            [
              "¿Tengo que saber de tecnología?",
              "No. Nos encargamos del diseño, la programación y la publicación. Vos nos contás de tu negocio y revisamos juntos los avances.",
            ],
            [
              "¿Qué incluye el precio?",
              "Cada plan tiene un alcance de referencia que podés consultar arriba. Antes de empezar, definimos el presupuesto final, las funcionalidades y los costos de dominio, alojamiento y mantenimiento que correspondan.",
            ],
            [
              "¿Y si necesito algo diferente?",
              "Contanos qué tenés en mente. Podemos preparar una propuesta a medida; no necesitás elegir un plan antes de escribirnos.",
            ],
          ].map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="contact-section shell" id="contacto">
        <div>
          <p className="eyebrow">EL PRÓXIMO EJEMPLO PODRÍA SER EL TUYO</p>
          <h2>
            Hagamos que tu negocio
            <br />
            se vea como se merece<span>.</span>
          </h2>
          <p>Contanos tu idea. El primer paso es una conversación.</p>
        </div>
        <a
          className="button button-dark"
          href={whatsapp()}
          target="_blank"
          rel="noreferrer"
        >
          Hablemos por WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </section>
      <footer className="site-footer shell">
        <Link to="/" aria-label="JL Marketing · Inicio">
          <img src={logo} alt="JL Marketing" />
        </Link>
        <p>Diseño con intención. Webs con identidad.</p>
        <span>© {new Date().getFullYear()} JL Marketing</span>
      </footer>
      <div className="mobile-dock">
        <a href="#planes">
          Ver planes <span aria-hidden="true">↑</span>
        </a>
        <a href={whatsapp()} target="_blank" rel="noreferrer">
          Hablemos <span aria-hidden="true">↗</span>
        </a>
      </div>
    </>
  );
}
