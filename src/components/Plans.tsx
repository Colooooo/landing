import { useRef, useState } from "react";
import { plans, whatsapp } from "../data/plans";

export default function Plans() {
  const [selected, setSelected] = useState(0);
  const [card, setCard] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const openCard = (index: number, button: HTMLButtonElement) => {
    setCard(index);
    opener.current = button;
    dialog.current?.showModal();
  };
  const closeCard = () => {
    opener.current?.focus();
  };
  return (
    <section
      className="plans-section shell"
      id="planes"
      aria-labelledby="plans-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="small-line" /> EXPLORÁ LO QUE PODEMOS CREAR
          </p>
          <h2 id="plans-title">
            Tu próxima web empieza acá<span className="accent">.</span>
          </h2>
        </div>
        <p>
          Abrí los ejemplos. Probá cómo se sienten.{" "}
          <br />
          Imaginá el tuyo.
        </p>
      </div>
      <div className="plan-selector" aria-label="Elegir plan">
        {plans.map((plan, index) => (
          <button
            key={plan.name}
            onClick={() => setSelected(index)}
            aria-pressed={selected === index}
            aria-controls={`plan-${index}`}
          >
            <span>{plan.name}</span>
            <small>Desde {plan.price}</small>
          </button>
        ))}
      </div>
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            id={`plan-${index}`}
            className={`plan-card ${selected === index ? "is-selected" : ""} ${index === 1 ? "featured" : ""}`}
            aria-labelledby={`plan-title-${index}`}
          >
            <div className="plan-top">
              <span className="plan-number">
                0{index + 1} / {plan.name}
              </span>
              {index === 1 && <span className="plan-badge">Un paso más</span>}
            </div>
            <a
              className={`demo-preview preview-${index}`}
              href={plan.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir ejemplo ${plan.business} en una pestaña nueva`}
            >
              <div className="browser-chrome" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>
                  {plan.business.toLowerCase().replaceAll(" ", "")}.web
                </span>
                <span>↗</span>
              </div>
              <img
                src={plan.image}
                alt={`Vista de la página de ejemplo ${plan.business}`}
                loading={index === 0 ? "eager" : "lazy"}
                width="640"
                height="360"
              />
              <span className="preview-cta">
                Explorar sitio <span aria-hidden="true">↗</span>
              </span>
            </a>
            <div className="plan-body">
              <p className="demo-caption">{plan.category}</p>
              <h3 id={`plan-title-${index}`}>{plan.purpose}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="price">
                <span>Desde</span>
                <strong>{plan.price}</strong>
                <span> / proyecto</span>
              </div>
              <a
                className={`button ${index === 1 ? "button-lime" : "button-outline"} demo-button`}
                href={plan.link}
                target="_blank"
                rel="noreferrer"
              >
                Ver ejemplo en vivo <span aria-hidden="true">↗</span>
              </a>
              <details className="plan-details">
                <summary>
                  Qué incluye este plan <span aria-hidden="true">+</span>
                </summary>
                <ul>
                  {plan.included.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {plan.excluded.length > 0 && (
                  <p className="exclusions">
                    No incluye: {plan.excluded.join(", ")}.
                  </p>
                )}
              </details>
              <div className="plan-bottom">
                <button
                  onClick={(event) => openCard(index, event.currentTarget)}
                  aria-haspopup="dialog"
                >
                  Ver tarjeta QR <span aria-hidden="true">↗</span>
                </button>
                <a
                  href={whatsapp(plan.name)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar por WhatsApp sobre el plan ${plan.name}`}
                >
                  Me interesa <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="pricing-note">
        <span aria-hidden="true">↳</span> Precios de referencia. El presupuesto
        final y las funcionalidades se definen según tu proyecto.
      </p>
      <dialog
        ref={dialog}
        className="card-dialog"
        onClose={closeCard}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        aria-labelledby="card-dialog-title"
      >
        <div className="dialog-inner">
          <div className="dialog-heading">
            <h2 id="card-dialog-title">La tarjeta de {plans[card].business}</h2>
            <button
              autoFocus
              onClick={() => dialog.current?.close()}
              aria-label="Cerrar tarjeta ampliada"
            >
              ×
            </button>
          </div>
          <img
            src={plans[card].cardImage}
            alt={`Tarjeta de presentación con QR de ${plans[card].business}`}
            width="900"
            height="500"
          />
          <p>Un ejemplo de cómo conectar tu negocio físico con tu web.</p>
        </div>
      </dialog>
    </section>
  );
}
