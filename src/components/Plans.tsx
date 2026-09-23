import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { plans, whatsapp } from "../data/plans";
import Reveal from "./Reveal";

export default function Plans() {
  const [selected, setSelected] = useState(0);
  const [card, setCard] = useState<number | null>(null);
  const [view, setView] = useState<"web" | "card">("web");
  const dialog = useRef<HTMLDialogElement>(null);
  const comparison = useRef<HTMLDetailsElement>(null);
  const tabButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  const plan = plans[selected];
  const changePlan = (index: number) => {
    setSelected(index);
  };
  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % plans.length;
    else if (event.key === "ArrowLeft")
      next = (index + plans.length - 1) % plans.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = plans.length - 1;
    else return;
    event.preventDefault();
    changePlan(next);
    tabButtons.current[next]?.focus();
  };
  const openCard = () => {
    setCard(selected);
    dialog.current?.showModal();
  };
  return (
    <section
      className="work-section shell"
      id="planes"
      aria-labelledby="plans-title"
    >
      <Reveal className="section-top">
        <p className="label">01 / PLANES & EJEMPLOS</p>
        <h2 id="plans-title">¡Revisá nuestro trabajo!</h2>
        <p className="section-note">Elegí un plan. Explorá el ejemplo.</p>
        <p className="plans-subtitle">
          Usa nuestros planes como guía de lo que puedes esperar de nosotros.
          <br />
          Cualquier idea es realizable y nuestro presupuesto se adapta a tu
          negocio.
          <br />
        </p>
      </Reveal>
      <div className="plan-tabs" role="tablist" aria-label="Planes disponibles">
        {plans.map((item, index) => (
          <button
            key={item.name}
            id={`tab-${index}`}
            role="tab"
            ref={(element) => {
              tabButtons.current[index] = element;
            }}
            aria-selected={selected === index}
            aria-controls={`panel-${index}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => changePlan(index)}
            onKeyDown={(event) => onTabKey(event, index)}
          >
            <span className="tab-number">0{index + 1}</span>
            <span className="tab-name">{item.name}</span>
            <span className="tab-price">
              <small className="mr-1">desde</small> {item.price}
            </span>
            <span className="tab-arrow" aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
        <m.span
          className="tab-underline"
          aria-hidden="true"
          initial={false}
          animate={{ x: `${selected * 100}%` }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
      <div
        role="tabpanel"
        id={`panel-${selected}`}
        aria-labelledby={`tab-${selected}`}
        tabIndex={0}
        className="project-panel"
      >
        <div className="project-visual">
          <div className="visual-toolbar">
            <span className="label">
              {plan.business} <span className="toolbar-divider">/</span> EJEMPLO
            </span>
            <div className="view-switch" aria-label="Tipo de vista">
              <button
                onClick={() => setView("web")}
                aria-pressed={view === "web"}
              >
                Página
              </button>
              <button
                onClick={() => setView("card")}
                aria-pressed={view === "card"}
              >
                Tarjeta
              </button>
            </div>
          </div>
          <div
            className={`project-stage stage-${selected} ${view === "card" ? "show-card" : ""}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                className="stage-content"
                key={`${selected}-${view}`}
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  y: reduceMotion ? 0 : 22,
                  scale: reduceMotion ? 1 : 0.97,
                }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {view === "web" ? (
                  <a
                    className="project-screen"
                    href={plan.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ejemplo ${plan.business} en una pestaña nueva`}
                  >
                    <div className="screen-bar" aria-hidden="true">
                      <span className="window-dots">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span>{plan.business}</span>
                      <span>↗</span>
                    </div>
                    <div className="screen-image">
                      <img
                        src={plan.image}
                        srcSet={`${plan.imageSmall} 640w, ${plan.image} 1200w`}
                        sizes="(max-width: 760px) 80vw, (max-width: 1100px) 49vw, (max-width: 1448px) 55vw, 735px"
                        alt={`Diseño web de ejemplo para ${plan.business}`}
                        width="1200"
                        height="675"
                        fetchPriority="high"
                        decoding="async"
                      />
                    </div>
                    <span className="screen-visit">
                      Visitar sitio <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                ) : (
                  <button
                    className="project-card-image"
                    onClick={openCard}
                    aria-haspopup="dialog"
                    aria-label={`Ampliar tarjeta QR de ${plan.business}`}
                  >
                    <img
                      src={plan.cardImage}
                      decoding="async"
                      alt={`Tarjeta de presentación de ${plan.business}`}
                      width="900"
                      height="500"
                    />
                    <span>
                      Ampliar tarjeta <span aria-hidden="true">↗</span>
                    </span>
                  </button>
                )}
              </m.div>
            </AnimatePresence>
            <span className="stage-index" aria-hidden="true">
              0{selected + 1} / 03
            </span>
          </div>
        </div>
        <div className="project-info">
          <div className="project-info-top">
            <span className="label">PLAN {plan.name.toUpperCase()}</span>
            <span className="label">0{selected + 1}</span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={selected}
              initial={{
                opacity: reduceMotion ? 1 : 0,
                y: reduceMotion ? 0 : 8,
              }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
            >
              <h3>{plan.business}</h3>
              <p className="project-category">
                {plan.category.split(" · ")[1]}
              </p>
              <p className="project-description">{plan.description}</p>
              <ul className="included-list">
                {plan.included.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">+</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </m.div>
          </AnimatePresence>
          <div className="project-purchase">
            <div className="project-price">
              <span>Desde</span>
              <strong>{plan.price}</strong>
              <small>/ proyecto</small>
            </div>
            <a
              className="button button-light"
              href={plan.link}
              target="_blank"
              rel="noreferrer"
            >
              Explorar ejemplo <span aria-hidden="true">↗</span>
            </a>
            <a
              className="project-enquiry"
              href={whatsapp(plan.name)}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por este plan <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="work-footnote">
        <span>
          Los ejemplos son un punto de partida. Tu diseño será a medida.
        </span>
        <a
          href="#comparar"
          onClick={(event) => {
            event.preventDefault();
            comparison.current?.setAttribute("open", "");
            comparison.current?.scrollIntoView({
              behavior: reduceMotion ? "instant" : "smooth",
              block: "start",
            });
          }}
        >
          Comparar qué incluye cada plan <span aria-hidden="true">↓</span>
        </a>
      </div>
      <details ref={comparison} className="comparison" id="comparar">
        <summary>
          Los planes, en detalle <span aria-hidden="true">+</span>
        </summary>
        <div className="comparison-grid">
          {plans.map((item) => (
            <div key={item.name}>
              <h3>
                {item.name}
                <span>{item.price}</span>
              </h3>
              <ul>
                {item.included.map((feature) => (
                  <li key={feature}>+ {feature}</li>
                ))}
              </ul>
              {item.excluded.length > 0 && (
                <p>No incluye: {item.excluded.join(", ")}.</p>
              )}
            </div>
          ))}
        </div>
      </details>
      <p className="pricing-note">
        Precios de referencia. Definimos el alcance y el presupuesto final antes
        de empezar.
      </p>
      <dialog
        ref={dialog}
        className="card-dialog"
        onClose={() => setCard(null)}
        aria-labelledby="card-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        {card !== null && (
          <>
            <div className="dialog-heading">
              <h2 id="card-dialog-title">
                {plans[card].business} / Tarjeta QR
              </h2>
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
              alt={`Tarjeta QR de ${plans[card].business}`}
              width="900"
              height="500"
              decoding="async"
            />
          </>
        )}
      </dialog>
    </section>
  );
}
