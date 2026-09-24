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

const steps = [
  [
    "Primero, tu negocio.",
    "Nos contás qué hacés y qué necesitás. Definimos el alcance, los contenidos y un presupuesto antes de empezar.",
  ],
  [
    "Después, el diseño.",
    "Trabajamos con tu identidad y te mostramos los avances. Revisamos juntos la página y ajustamos los detalles.",
  ],
  [
    "Por último, al mundo.",
    "Publicamos tu web y diseñamos tu tarjeta QR. Si necesitás cambios después, podés consultar por mantenimiento.",
  ],
];

export default function ClosingSections() {
  const { pathname } = useLocation();
  const [heroInView, setHeroInView] = useState(pathname === "/");
  const [step, setStep] = useState<number | null>(0);
  const cardSection = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardSection,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);

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

  const dockVisible = pathname !== "/" || !heroInView;

  return (
    <>
      <section
        className="identity-section shell"
        aria-labelledby="identity-title"
      >
        <Reveal className="identity-copy">
          <p className="label">02 / DEL PAPEL A LA PANTALLA</p>
          <h2 id="identity-title">
            La llave a tu página.
            <br />
            <span>La misma identidad.</span>
          </h2>
          <p>
            Una tarjeta que da ganas de guardar.
            <br />
            Una página que vale la pena abrir.
          </p>
          <p className="identity-description">
            Diseñamos las dos para que tu negocio se reconozca desde el primer
            momento.
          </p>
          <a
            className="line-link"
            href={whatsapp()}
            target="_blank"
            rel="noreferrer"
          >
            Quiero algo así <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
        <div className="identity-art" ref={cardSection}>
          <m.img
            src={tarjetajlan}
            srcSet={`${tarjetaSmall} 640w, ${tarjetajlan} 1200w`}
            sizes="(max-width: 760px) 80vw, (max-width: 1448px) 36vw, 490px"
            decoding="async"
            alt="Tarjeta de JL Marketing"
            width="1200"
            height="686"
            loading="lazy"
            style={reduceMotion ? undefined : { y: cardY, rotate: cardRotate }}
          />
          <div className="art-bottom label">
            <span>TARJETA DE PRESENTACIÓN</span>
            <span>90 × 50 MM</span>
          </div>
        </div>
      </section>
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
            De principio a fin.
          </h2>
          <p>
            Hablás con quienes hacen tu web.
            <br />
            Así de simple.
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
            <p className="label">¿TENÉS UN PROYECTO EN MENTE?</p>
            <span className="label">LO CONVERSAMOS.</span>
          </Reveal>
          <a
            href={whatsapp()}
            className="contact-title"
            target="_blank"
            rel="noreferrer"
          >
            <span>Hablemos.</span>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <div className="contact-bottom">
            <p>Una idea, una pregunta o un negocio por mostrar.</p>
            <a href={whatsapp()} target="_blank" rel="noreferrer">
              WhatsApp / 092 204 234 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer shell">
        <Link to="/" aria-label="JL Marketing · Inicio">
          <img src={logo} alt="JL Marketing" width="100" height="33" />
        </Link>
        <span>Diseño & desarrollo web.</span>
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
          Ver planes <span aria-hidden="true">↓</span>
        </a>
        <a href={whatsapp()} target="_blank" rel="noreferrer">
          Hablemos <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </>
  );
}
