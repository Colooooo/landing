import { useState } from "react";
import { motion } from "framer-motion";
import cafe from "../assets/cafeauroradesktop.jpg";
import barberia from "../assets/barberia.jpg";
import ferreteria from "../assets/ferreteria.jpg";
import logo from "../assets/presupuesto.svg";
import ScrollArrow from "../components/ScrollArrow";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const plans = [
  {
    name: "Básico", price: "$3000", label: "Página de presentación", image: cafe,
    description: "Una página simple para presentar tu negocio, casi sin funcionalidades.",
    link: "https://cafeteria-sage-three.vercel.app/",
    included: ["1 sección principal", "Diseño responsive", "Formulario de contacto", "Animaciones básicas", "Optimización SEO básica"],
    excluded: ["Catálogo de productos", "Pagos online", "Agenda de reservas", "Panel administrativo", "Integraciones avanzadas"],
  },
  {
    name: "Avanzado", price: "$5000", label: "Página avanzada", image: barberia,
    description: "Más secciones, movimiento e integraciones.",
    link: "https://barberia-ruddy.vercel.app/",
    included: ["Múltiples secciones", "Diseño responsive", "Animaciones avanzadas", "Formulario de contacto", "SEO optimizado", "Integraciones básicas"],
    excluded: ["Pagos online", "Agenda de reservas", "Panel administrativo"],
  },
  {
    name: "Completo", price: "$9000", label: "Página completa", image: ferreteria,
    description: "Una web con herramientas para vender, recibir reservas y gestionar tu negocio.",
    link: "https://ferreteria-9kgk4zxjm-colooooos-projects.vercel.app/",
    included: ["Secciones ilimitadas", "Animaciones premium", "Catálogo de productos", "Pagos online", "Agenda de reservas", "Panel administrativo", "Integraciones avanzadas", "SEO avanzado"],
    excluded: [],
  },
];

export default function Presupuesto() {
  const [selected, setSelected] = useState(1);

  return (
    <main className="relative isolate overflow-x-clip bg-black text-white [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_summary:focus-visible]:outline-2 [&_summary:focus-visible]:outline-offset-4">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.85)_50%,#000_100%),url('https://images.unsplash.com/photo-1652717249447-293e8205c000?q=80&w=3000&auto=format&fit=cover')] bg-cover bg-top" />

      <section className="min-h-[calc(100svh-72px)] bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,1)),url('https://images.unsplash.com/photo-1652717249447-293e8205c000?q=80&w=3000&auto=format&fit=cover')] bg-cover bg-center pt-18">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mx-auto flex min-h-[calc(100svh-72px)] max-w-3xl flex-col items-center justify-center px-6 pb-16 text-center"
        >
          <motion.div variants={reveal} className="relative mb-12 mt-[33%]">
            <div className="absolute inset-0 scale-125 rounded-full bg-white/20 blur-2xl" />
            <img src={logo} alt="JL Marketing" className="relative h-20 w-20 object-contain md:h-32 md:w-32" />
            
          </motion.div>
          <motion.p variants={reveal} className="max-w-xl text-sm leading-8 text-white/90 sm:text-xl">
            Ve nuestras páginas de ejemplo y pide tu presupuesto sin costo alguno.
          </motion.p>
          <motion.div variants={reveal} className="mt-[30%] md:mt-[25%]">
            <ScrollArrow />
          </motion.div>
        </motion.div>
      </section>

      

      <section id="planes" aria-labelledby="plans-title" className="mx-auto flex min-h-svh max-w-screen-2xl flex-col justify-center gap-4 px-4 pb-6 md:gap-5 md:px-[clamp(24px,4vw,64px)] [@media(max-height:740px)]:gap-2 [@media(max-height:740px)]:pb-2 [@media(max-height:740px)]:pt-20">
        <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <span className="text-[10px] font-medium tracking-[0.19em] text-white/60">NUESTROS PLANES</span>
            <h2 id="plans-title" className="mt-1 md:mt-2 text-[clamp(26px,3vw,42px)] font-medium leading-tight tracking-[-0.045em]">Elegí cómo empezar</h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-white/60 md:text-sm">Ve y experimenta lo que ofrecemos con estas páginas de ejemplo. Nuestro presupuesto final se ajusta a tu negocio.</p>
        </header>

        <div className="grid grid-cols-3 gap-1 rounded-lg border border-white/15 bg-white/5 p-1 md:hidden" aria-label="Elegir plan">
          {plans.map((plan, index) => (
            <button key={plan.name} type="button" aria-pressed={selected === index} aria-controls={`plan-${index}`} onClick={() => setSelected(index)} className="min-h-11 cursor-pointer rounded-md border border-transparent px-1 py-2 text-xs text-white/60 transition-colors aria-pressed:border-white/25 aria-pressed:bg-white/10 aria-pressed:text-white motion-reduce:transition-none">
              {plan.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-[clamp(12px,1.8vw,24px)] md:grid-cols-3">
          {plans.map((plan, index) => (
            <article id={`plan-${index}`} key={plan.name} aria-labelledby={`plan-title-${index}`} className={`${selected === index ? "flex" : "hidden"} min-w-0 flex-col gap-2.5 rounded-xl border border-white/20 bg-black/40 p-4 backdrop-blur-sm md:flex xl:p-6 [@media(max-height:850px)]:p-4 [@media(max-height:740px)]:gap-2 [@media(max-height:740px)]:p-3`}>
              <p className="text-[11px] text-white/55">{plan.label}</p>
              <div className="flex items-center justify-between gap-2">
                <h3 id={`plan-title-${index}`} className="text-[clamp(24px,2.3vw,32px)] font-medium tracking-[-0.04em]">{plan.name}</h3>
                <div className="text-right"><span className="block text-[10px] text-white/55">Desde</span><strong className="text-[clamp(23px,2.2vw,30px)] font-medium tracking-[-0.04em]">{plan.price}</strong></div>
              </div>
              <p className="text-xs leading-relaxed text-white/65 md:min-h-[3.2em]">{plan.description}</p>
              <a className="group relative block h-[clamp(66px,12svh,115px)] shrink-0 overflow-hidden rounded-md border border-white/15 bg-black/30 md:h-[clamp(80px,14svh,160px)] [@media(max-height:850px)]:md:h-20 [@media(max-height:740px)]:h-14" href={plan.link} target="_blank" rel="noreferrer" aria-label={`Ver sitio de ejemplo del plan ${plan.name}`}>
                <img src={plan.image} alt={`Vista del sitio de ejemplo del plan ${plan.name}`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none" />
                <span className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/95 to-transparent px-3 pb-2 pt-5 text-[11px]">Explorá un ejemplo <span aria-hidden="true">↗</span></span>
              </a>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 md:grid-cols-1 md:gap-y-1">
                {plan.included.map(feature => <li key={feature} className="flex gap-2 text-[11px] leading-snug text-white/80 md:text-xs"><span aria-hidden="true" className="text-white/60">✓</span>{feature}</li>)}
              </ul>
              {plan.excluded.length > 0 ? (
                <details className="group mt-auto pt-1 text-[11px] leading-relaxed text-white/55">
                  <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">Qué no incluye <span aria-hidden="true" className="group-open:rotate-45">+</span></summary>
                  <p className="my-2">{plan.excluded.join(" · ")}</p>
                </details>
              ) : <p className="mt-auto py-2 text-[11px] leading-relaxed text-white/55">Funcionalidades según el alcance acordado.</p>}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
