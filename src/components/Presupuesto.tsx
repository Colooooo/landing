import ScrollArrow from "./ScrollArrow";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import cafeauroradesktop from "../assets/cafeauroradesktop.jpg";
import ferreteria from "../assets/ferreteria.jpg";
import barberia from "../assets/barberia.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // delay entre hijos
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0,
        transition: {
      duration: 0.8,
      ease: "easeInOut",
    }, },
   };

const item4: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0,     
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    }, },
};

const plans = [
  {
    name: "Básico",
    price: "$2500",
    desktopImage: cafeauroradesktop,
    mobileImage: cafeauroradesktop,
    description: "Página de una sola sección, con animaciones simples, para visualización de contenido sin funcionalidades.",
    link: "https://cafeaurorauy.netlify.app/",

    included: [
      "1 sección principal",
      "Diseño responsive",
      "Formulario de contacto",
      "Animaciones básicas",
      "Optimización SEO básica",
    ],

    excluded: [
      "Catálogo de productos",
      "Pagos online",
      "Agenda de reservas",
      "Panel administrativo",
      "Integraciones avanzadas",
    ],
  },

  {
    name: "Avanzado",
    price: "$4000",
    desktopImage: barberia,
    mobileImage: barberia,
    description:
      "Página de varias secciones, con animaciones complejas y funcionalidades simples.",
    link: "https://barberia-ruddy.vercel.app/",

    included: [
      "Múltiples secciones",
      "Diseño responsive",
      "Animaciones avanzadas",
      "Formulario de contacto",
      "SEO optimizado",
      "Integraciones básicas",
    ],

    excluded: [
      "Pagos online",
      "Agenda de reservas",
      "Panel administrativo",
    ],
  },

  {
    name: "Completo",
    price: "$7000",
    desktopImage: ferreteria,
    mobileImage: ferreteria,
    description:
      "Página con secciones ilimitadas, optimizada con varias herramientas, con animaciones avanzadas y funcionalidades completas como catálogos de compra, registro de órdenes, pagos online, agendas, etc.",
    link: "https://paginas-sepia.vercel.app/",

    included: [
      "Secciones ilimitadas",
      "Animaciones premium",
      "Catálogo de productos",
      "Pagos online",
      "Agenda de reservas",
      "Panel administrativo",
      "Integraciones avanzadas",
      "SEO avanzado",
    ],

    excluded: [],
  },
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/35" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
    </svg>
  );
}

export default function Hero() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  onSelect();

  emblaApi.on("select", onSelect);

  return () => {
    emblaApi.off("select", onSelect);
  };
}, [emblaApi]);

  return (
  <>
  <div className="overflow-hidden bg-black text-white">
    <div className="mx-auto grid grid-cols-1 lg:mx-0 lg:max-w-none">
          <div className="lg:bg-cover bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,1)),url('https://images.unsplash.com/photo-1652717249447-293e8205c000?q=80&w=3000&auto=format&fit=cover')]">
            <motion.div
            initial="hidden"
            animate="show"
            transition={ {duration: 3} }
            variants={container}
            className="mt-18 flex h-[calc(100dvh-72px)] flex-col items-center">
                <motion.h2 className="text-base/7 font-semibold" variants={item}></motion.h2>
                <motion.div className="flex items-center justify-center py-10" variants={item}>
                <AnimatePresence>
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{
                      opacity: 1,
                      y: [0, 20, 0],
                    }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{
                      opacity: { duration: 1.5 },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="relative z-10">
                  <div className="flex flex-col items-center mt-[33%]">
                  <div className="absolute w-25 h-25 bg-white/30 blur-2xl rounded-full lg:w-30 lg:h-40" />
                    <img
                    src="https://img.icons8.com/?size=100&id=114490&format=png&color=ffffff"
                    className="w-20 h-20 lg:w-30 lg:h-30"
                    />
                  </div>
                </motion.div>
                </AnimatePresence>
                  <h1 className="hidden text-3xl font-bold ml-3 lg:text-5xl">JLan</h1>
                </motion.div>
                <motion.div className="pb-10" variants={item} >
                  <motion.p className="mt-15 mx-10 text-sm text-center lg:text-xl lg:mt-25" variants={item}>Pide tu presupuesto sin compromiso y entérate de la página que podría tener tu negocio.</motion.p>
                </motion.div>
                <motion.div className="flex justify-center mt-[50%]" variants={item}>
                    <ScrollArrow/>
                </motion.div>
            </motion.div>
      </div> 


      <motion.div className="flex flex-col items-center overflow-hidden px-6"
          variants={item4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}>
            <h3 className="text-center text-2xl mb-2 font-semibold">Planes</h3>
            <p className="max-w-2xl text-center text-base mb-10">Nuestros precios se ajustan a tu negocio, consulte por su presupuesto sin compromiso.</p>
          </motion.div>

      <motion.div ref={emblaRef} className="overflow-hidden"
          variants={item4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}>
        <div className="flex pb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="flex-[0_0_92%] px-3 md:flex-[0_0_72%] lg:flex-[0_0_54%] xl:flex-[0_0_46%]"
            >
              <motion.div
                animate={{
                  scale: selectedIndex === index ? 1 : 0.9,
                  opacity: selectedIndex === index ? 1 : 0.38,
                  y: selectedIndex === index ? 0 : 18,
                }}
                transition={{
                  duration: 0.4,
                }}
                className={`
                  h-full rounded-lg p-4 sm:p-5
                  ${
                    selectedIndex === index
                      ? "border border-red-500/70 shadow-[0_0_40px_rgba(239,68,68,0.16)]"
                      : "border border-white/10"
                  }
                  bg-zinc-950/95
                `}
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-[0.22em] text-red-300/80">Plan</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{plan.name}</h3>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-white/50">Desde</p>
                      <p className="text-xl font-semibold text-white sm:text-2xl">{plan.price}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-white/70">{plan.description}</p>

                  <div className="grid items-end gap-4 lg:grid-cols-[minmax(0,1fr)_150px]">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs text-white/50">
                        <span>Captura desktop</span>
                        <span>16:10</span>
                      </div>
                      <div className="overflow-hidden rounded-md border border-white/15 bg-black">
                        <div className="flex h-6 items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3">
                          <span className="h-2 w-2 rounded-full bg-red-400" />
                          <span className="h-2 w-2 rounded-full bg-yellow-300" />
                          <span className="h-2 w-2 rounded-full bg-green-400" />
                        </div>
                        <img
                          src={plan.desktopImage}
                          alt={`Ejemplo desktop del plan ${plan.name}`}
                          className="aspect-[16/10] w-full object-cover object-top"
                        />
                      </div>
                    </div>

                    <div className="mx-auto w-32 sm:w-36 lg:w-full">
                      <div className="mb-2 flex items-center justify-between text-xs text-white/50">
                        <span>Mobile</span>
                        <span>9:16</span>
                      </div>
                      <div className="overflow-hidden rounded-md border border-white/15 bg-black p-1.5">
                        <div className="mx-auto mb-1.5 h-1 w-10 rounded-full bg-white/20" />
                        <img
                          src={plan.mobileImage}
                          alt={`Ejemplo mobile del plan ${plan.name}`}
                          className="aspect-[9/16] w-full rounded-[4px] object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Incluye</p>
                      <ul className="space-y-2 text-sm text-white/75">
                        {plan.included.map((feature) => (
                          <li key={feature} className="flex gap-2">
                            <CheckIcon />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">No incluye</p>
                      {plan.excluded.length > 0 ? (
                        <ul className="space-y-2 text-sm text-white/45">
                          {plan.excluded.map((feature) => (
                            <li key={feature} className="flex gap-2">
                              <MinusIcon />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm leading-6 text-white/60">Pensado para cubrir el proyecto completo según alcance acordado.</p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center pt-2">
                    <a
                      href={plan.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-flex overflow-hidden border border-white/40 text-white transition-colors duration-300 hover:border-red-400 hover:bg-red-600"
                    >
                      <span className="absolute inset-0 origin-left scale-x-0 bg-white/10 transition-transform duration-300 group-hover:scale-x-100" />
                      <span className="relative flex items-center gap-2 px-5 py-3 text-sm font-medium">
                        Ver ejemplo
                        <svg
                          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
  </>
  );
}
