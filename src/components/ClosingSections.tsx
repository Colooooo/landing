import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { whatsapp } from "../data/plans";
import logo from "../assets/optimized/logo.webp";
import Reveal from "./Reveal";
import tarjetajlan from "../assets/optimized/tarjeta-jl-1200.webp";
import tarjetaSmall from "../assets/optimized/tarjeta-jl-640.webp";
import ArrowIcon from "./ArrowIcon";

const steps = [
  [
    "Primero, tu negocio.",
    "Nos contás qué hacés y qué necesitás. Definimos el alcance, los contenidos y un presupuesto antes de empezar.",
  ],
  [
    "Después, el diseño.",
    "Trabajamos con tu identidad, te damos elecciones y te mostramos los avances. Revisamos juntos la página y ajustamos cualquier detalle.",
  ],
  [
    "Por último, al mundo.",
    "Publicamos tu web y diseñamos tu tarjeta QR. Ofrecemos el mantenimiento permanente de la página una vez publicada.",
  ],
];

export default function ClosingSections() {
  const { pathname } = useLocation();
  const [heroInView, setHeroInView] = useState(pathname === "/");
  const [step, setStep] = useState<number | null>(0);
  const cardDialog = useRef<HTMLDialogElement>(null);
  const [cardOpen, setCardOpen] = useState(false);
  const sourceCard = useRef<HTMLImageElement>(null);
  const expandedCard = useRef<HTMLImageElement>(null);
  const cardAnimation = useRef<Animation | null>(null);
  const closingCard = useRef(false);
  const cardSection = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardSection,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-5, 3]);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const sourceTransform = () => {
    const source = sourceCard.current!.getBoundingClientRect();
    const target = expandedCard.current!.getBoundingClientRect();
    return `translate(${source.left + source.width / 2 - target.left - target.width / 2}px, ${source.top + source.height / 2 - target.top - target.height / 2}px) rotate(${cardRotate.get()}deg) scale(${sourceCard.current!.offsetWidth / target.width})`;
  };

  useEffect(() => {
    if (!cardOpen || !expandedCard.current) return;
    cardAnimation.current = expandedCard.current.animate(
      [{ transform: sourceTransform() }, { transform: "none" }],
      { duration: reduceMotion ? 0 : 550, easing: "cubic-bezier(.22,1,.36,1)" },
    );
    // Geometry is sampled only when opening, so scroll motion stays independent.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardOpen]);

  const closeCard = async () => {
    if (closingCard.current || !expandedCard.current) return;
    closingCard.current = true;
    cardAnimation.current?.finish();
    cardDialog.current?.setAttribute("data-closing", "");
    const animation = expandedCard.current.animate(
      [{ transform: "none" }, { transform: sourceTransform() }],
      { duration: reduceMotion ? 0 : 400, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" },
    );
    try { await animation.finished; } catch { /* Unmounted during navigation. */ }
    cardDialog.current?.close();
    setCardOpen(false);
    closingCard.current = false;
  };

  const dockVisible = pathname !== "/" || !heroInView;

  return (
    <>
      <section
        className="identity-section shell"
        aria-labelledby="identity-title"
      >
        <Reveal className="identity-copy">
          <p className="label">02 / EN LAS MANOS DE TUS CLIENTES</p>
          <h2 id="identity-title">
            La llave a tu página.
            <br />
            <span>La misma identidad.</span>
          </h2>
          <p>
            Podés compartir tu web fácil y profesionalmente
            <br />
            mediante tarjetas de negocio.
          </p>
          <p className="identity-description">
            Diseñamos las dos para que se establezca la identidad de tu negocio.
          </p>
        </Reveal>
        <div className="identity-art identity-showcase" ref={cardSection}>
          <span className="card-stack card-stack-back" aria-hidden="true" />
          <span className="card-stack card-stack-front" aria-hidden="true" />
          <button className="identity-card-trigger" aria-label="Ampliar mi tarjeta de JL Marketing" aria-haspopup="dialog" onClick={() => {
            cardDialog.current?.removeAttribute("data-closing");
            setCardOpen(true);
            cardDialog.current?.showModal();
          }}>
          <m.img
            ref={sourceCard}
            src={tarjetajlan}
            srcSet={`${tarjetaSmall} 640w, ${tarjetajlan} 1200w`}
            sizes="(max-width: 760px) 76vw, (max-width: 1448px) 36vw, 490px"
            decoding="async"
            alt="Tarjeta de JL Marketing"
            width="1200"
            height="686"
            loading="lazy"
            style={{ visibility: cardOpen ? "hidden" : undefined, ...(reduceMotion ? {} : { y: cardY, rotate: cardRotate }) }}
          />
          </button>
          <div className="art-bottom label">
            <span>TOCÁ PARA AMPLIAR ↗</span>
            <span>90 × 50 MM</span>
          </div>
        </div>
      </section>
      <dialog ref={cardDialog} className="card-dialog identity-dialog" aria-labelledby="identity-dialog-title" onClose={() => setCardOpen(false)} onCancel={(event) => { event.preventDefault(); void closeCard(); }} onClick={(event) => {
        if (event.target === event.currentTarget) void closeCard();
      }}>
        {cardOpen && <>
          <div className="dialog-heading">
            <h2 id="identity-dialog-title">Tarjeta de JL Marketing</h2>
            <button autoFocus aria-label="Cerrar tarjeta de JL Marketing" onClick={() => void closeCard()}>×</button>
          </div>
          <img ref={expandedCard} src={tarjetajlan} alt="Tarjeta ampliada de JL Marketing" width="1200" height="686" decoding="async" />
        </>}
      </dialog>
      <section
        className="process-section shell"
        id="proceso"
        aria-labelledby="process-title"
      >
        <Reveal className="process-intro">
          <p className="label">03 / CÓMO TRABAJAMOS</p>
          <h2 id="process-title">
            De cerca.
            <br />
            Durante todo el proceso.
          </h2>
          <p>
            Hablás con quienes hacen tu web.
          </p>
        </Reveal>
        <div className="process-list">
          {steps.map(([title, description], index) => (
            <div
              className={`process-item ${step === index ? "is-open" : ""}`}
              key={title}
            >
              <h3>
                <button
                  id={`step-button-${index}`}
                  aria-expanded={step === index}
                  aria-controls={`step-content-${index}`}
                  onClick={() => setStep(step === index ? null : index)}
                >
                  <span className="step-index">0{index + 1}</span>
                  <span>{title}</span>
                  <span className="expand-symbol" aria-hidden="true">
                    +
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {step === index && (
                  <m.div
                    id={`step-content-${index}`}
                    role="region"
                    aria-labelledby={`step-button-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="process-answer"
                  >
                    <p>{description}</p>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
      <section className="faq-section shell" aria-labelledby="faq-title">
        <h2 id="faq-title">Antes de empezar.</h2>
        <div className="faq-list">
          {[
            [
              "¿El diseño es a medida?",
              "Sí. Los ejemplos muestran el alcance de cada plan. Tu página tendrá la identidad, los textos y el contenido de tu negocio.",
            ],
            [
              "¿Qué pasa con el dominio y el mantenimiento?",
              "Te detallamos los costos de dominio, alojamiento y mantenimiento que correspondan en el presupuesto. Todo se acuerda antes de comenzar.",
            ],
            [
              "¿Puedo pedir algo diferente?",
              "Claro. Contanos qué necesitás y armamos una propuesta a medida. No hace falta elegir un plan para escribirnos.",
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
      <section className="contact-section" id="contacto">
        <div className="shell">
          <Reveal className="contact-top">
            <p className="label">¿TENÉS UNA IDEA EN MENTE?</p>
            <span className="label">LA CONVERSAMOS.</span>
          </Reveal>
          <a
            href={whatsapp()}
            className="contact-title"
            target="_blank"
            rel="noreferrer"
          >
            <span>Hablemos.</span>
            <span className="contact-arrow" aria-hidden="true">
              <ArrowIcon className="w-20 h-15 m-0"/>
            </span>
          </a>
          <div className="contact-bottom">
            <p>Contáctanos y consultá por tu negocio sin compromiso.</p>
            <a href={whatsapp()} target="_blank" rel="noreferrer">
              WhatsApp / 092 204 234
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer shell">
        <Link to="/" aria-label="JL Marketing · Inicio">
          <img src={logo} alt="JL Marketing" width="40" height="23" />
        </Link>
        <span>© {new Date().getFullYear()} JL Marketing</span>
        <a href="#contenido">
          Volver arriba <span aria-hidden="true">↑</span>
        </a>
      </footer>
      <nav
        className={`mobile-dock ${dockVisible ? "" : "is-hidden"}`}
        aria-label="Accesos rápidos"
        aria-hidden={!dockVisible}
        inert={!dockVisible}
      >
        <a href="#planes">
          Ver planes <span aria-hidden="true">↑</span>
        </a>
        <a href={whatsapp()} target="_blank" rel="noreferrer">
          Hablemos <span aria-hidden="true"><ArrowIcon className="w-3 h-3"/></span>
        </a>
      </nav>
    </>
  );
}
