import { m, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import ArrowIcon from "./ArrowIcon";
import ScrollArrow from "./ScrollArrow";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero" aria-label="Diseño web a medida">
      <Reveal className="hero-kicker">
        <span className="mobile-hero-kicker label">Uruguay / 2026</span>
        <span className="hero-location label">
          Uruguay / {new Date().getFullYear()}
        </span>
      </Reveal>
      <div className="hero-layout">
        <h1 className="hero-desktop-title" aria-label="Una buena web se nota.">
          {["Una buena web", "se nota."].map((line, index) => (
            <span
              className={`title-mask title-line-${index}`}
              key={line}
              aria-hidden="true"
            >
              <m.span
                initial={reduceMotion ? false : { y: "105%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.15,
                  delay: 0.18 + index * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </m.span>
            </span>
          ))}
        </h1>
        <m.h1
          className="hero-mobile-title"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Impulsá tu
          <br />negocio con
          <br />
          nosotros<span>.</span>
        </m.h1>
        <Reveal className="hero-aside" delay={0.52}>
          <span className="hero-asterisk" aria-hidden="true">
            ✳
          </span>
          <p className="hero-desktop-copy">
            Diseñamos páginas para impulsar tu <br />
            negocio y tarjetas para fácil promoción.
          </p>
          <p className="hero-mobile-copy">
            Hacemos páginas web y tarjetas QR para que puedas promocionar
            e innovar tu negocio.
          </p>
          <a className="round-link" href="#planes">
            <span>Ver planes y ejemplos</span>
            <span className="round-arrow" aria-hidden="true">
              <ArrowIcon direction="down" />
            </span>
          </a>
        </Reveal>
      </div>
      <Reveal className="hero-baseline" delay={0.82}>
        <span className="hero-desktop-baseline">
          Diseño a medida. Desarrollo. Tarjetas QR.
        </span>
        <ScrollArrow />
        <span>
          Tu web desde<strong>$1.500</strong>
        </span>
      </Reveal>
    </section>
  );
}
