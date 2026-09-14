import { useState } from "react";
import cafe from "../assets/cafeauroradesktop.jpg";
import barberia from "../assets/barberia.jpg";
import ferreteria from "../assets/ferreteria.jpg";
import "./Presupuesto.css";

const plans = [
  {
    name: "Básico", price: "$2500", label: "Página de presentación", image: cafe,
    description: "Una página simple para presentar tu negocio, casi sin funcionalidades.",
    link: "https://cafeteria-sage-three.vercel.app/",
    included: ["1 sección principal", "Diseño responsive", "Formulario de contacto", "Animaciones básicas", "Optimización SEO básica"],
    excluded: ["Catálogo de productos", "Pagos online", "Agenda de reservas", "Panel administrativo", "Integraciones avanzadas"],
  },
  {
    name: "Avanzado", price: "$4000", label: "Página avanzada", image: barberia,
    description: "Más secciones, movimiento e integraciones para una presencia digital más completa.",
    link: "https://barberia-ruddy.vercel.app/",
    included: ["Múltiples secciones", "Diseño responsive", "Animaciones avanzadas", "Formulario de contacto", "SEO optimizado", "Integraciones básicas"],
    excluded: ["Pagos online", "Agenda de reservas", "Panel administrativo"],
  },
  {
    name: "Completo", price: "$7000", label: "Página completa", image: ferreteria,
    description: "Una web con herramientas para vender, recibir reservas y gestionar tu negocio.",
    link: "https://ferreteria-9kgk4zxjm-colooooos-projects.vercel.app/",
    included: ["Secciones ilimitadas", "Animaciones premium", "Catálogo de productos", "Pagos online", "Agenda de reservas", "Panel administrativo", "Integraciones avanzadas", "SEO avanzado"],
    excluded: [],
  },
];

export default function Presupuesto() {
  const [selected, setSelected] = useState(1);

  return (
    <main className="budget-page">
      <section className="budget-hero" aria-labelledby="budget-title">
        <div className="budget-hero-content">
          <div className="budget-hero-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="5" width="30" height="38" rx="4"/><path d="M16 15h16M16 23h16M16 31h8m5 1 3 3 6-7"/></svg>
          </div>
          <h1 id="budget-title">Ve nuestro trabajo.<br /><span>Entérate.</span></h1>
          <p className="m-5">Pedí tu presupuesto sin costo alguno y descubrí la página que podría tener tu negocio.</p>
        </div>
        <a className="budget-scroll" href="#planes" aria-label="Bajar a los planes"><span>EXPLORÁ LOS PLANES</span><span aria-hidden="true">↓</span></a>
      </section>

      <section className="budget-plans" id="planes" aria-labelledby="plans-title">
        <header className="budget-plans-heading">
          <div><span className="budget-eyebrow">NUESTROS PLANES</span><h2 id="plans-title">Elegí cómo empezar</h2></div>
          <p>Ve y experimenta lo que ofrecemos con estas páginas de ejemplo. El presupuesto final se ajusta a tu negocio.</p>
        </header>
        <div className="budget-selector" aria-label="Elegir plan">
          {plans.map((plan, index) => <button key={plan.name} type="button" aria-pressed={selected === index} aria-controls={`plan-${index}`} onClick={() => setSelected(index)}>{plan.name}</button>)}
        </div>
        <div className="budget-grid">
          {plans.map((plan, index) => (
            <article id={`plan-${index}`} key={plan.name} aria-labelledby={`plan-title-${index}`} className={`budget-card ${selected === index ? "is-selected" : ""} ${selected === index ? "is-selected" : ""}`}>
              <div className="budget-card-top"><span>{plan.label}</span></div>
              <div className="budget-card-title"><h3 id={`plan-title-${index}`}>{plan.name}</h3><div><span>Desde</span><strong>{plan.price}</strong></div></div>
              <p className="budget-description m-3">{plan.description}</p>
              <a className="budget-preview" href={plan.link} target="_blank" rel="noreferrer" aria-label={`Ver sitio de ejemplo del plan ${plan.name}`}><img src={plan.image} alt={`Vista del sitio de ejemplo del plan ${plan.name}`} loading="lazy" /><span>Explorá un ejemplo <span aria-hidden="true">↗</span></span></a>
              <ul className="budget-features">{plan.included.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
              {plan.excluded.length > 0 ? <details className="budget-exclusions"><summary>Qué no incluye <span aria-hidden="true">+</span></summary><p>{plan.excluded.join(" · ")}</p></details> : <p className="budget-scope">Funcionalidades según el alcance acordado.</p>}
              <a className="budget-card-link" href={plan.link} target="_blank" rel="noreferrer">Ver ejemplo {plan.name.toLowerCase()} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
