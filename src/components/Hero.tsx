import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <Reveal className="hero-kicker">
        <span className="label">JL MARKETING — ESTUDIO WEB</span>
        <span className="hero-location label">
          Uruguay / {new Date().getFullYear()}
        </span>
      </Reveal>
      <div className="hero-layout">
        <h1 id="hero-title" aria-label="Una buena web se nota.">
          {["Una buena web", "se nota."].map((line, index) => (
            <span
              className={`title-mask title-line-${index}`}
              key={line}
              aria-hidden="true"
            >
              <motion.span
                initial={reduceMotion ? false : { y: "110%", rotate: 3 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.08 + index * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <Reveal className="hero-aside" delay={0.25}>
          <span className="hero-asterisk" aria-hidden="true">
            ✳
          </span>
          <p>
            Diseñamos páginas con identidad. <br />
            Para negocios que cuidan
            <br />
            lo que muestran.
          </p>
          <a className="round-link" href="#planes">
            <span>Ver planes y ejemplos</span>
            <span className="round-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </Reveal>
      </div>
      <Reveal className="hero-baseline" delay={0.35}>
        <span>Diseño a medida. Desarrollo. Tarjetas QR.</span>
        <span>
          Tu web desde <strong>$3.000</strong>
        </span>
      </Reveal>
    </section>
  );
}
