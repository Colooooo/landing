import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollArrow from "./ScrollArrow";
import logo from "../assets/logoblanco.png";
import supabaselogo from "../assets/supabaselogo.svg";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.42 } },
};

const services = [
  {
    title: "Diseño",
    icon: "https://img.icons8.com/?size=100&id=25991&format=png&color=ffffff",
    description:
      "Realizamos el diseño de la página a partir de la estética e imagen del negocio, y diseñamos tarjetas con código QR para fácil acceso y promoción.",
  },
  {
    title: "Programación",
    icon: "https://img.icons8.com/?size=100&id=2778&format=png&color=ffffff",
    description:
      "Programamos la página siguiendo estándares de industria y buenas prácticas, logrando páginas rápidas, fluidas y optimizadas para aparecer en búsquedas de Google.",
  },
  {
    title: "Mantenimiento",
    icon: "https://img.icons8.com/?size=100&id=364&format=png&color=ffffff",
    description:
      "Ofrecemos mantenimiento permanente una vez publicada la página, garantizando su correcto funcionamiento y permitiendo realizar cambios deseados.",
  },
  {
    title: "Resultados",
    icon: "https://img.icons8.com/?size=100&id=6470&format=png&color=ffffff",
    description:
      "Tu página será una gran herramienta para atraer nuevos clientes, mantener a los actuales y hacer crecer tu negocio.",
  },
];

const tools = [
  {
    title: "Photoshop",
    icon: "https://img.icons8.com/?size=100&id=2916&format=png&color=ffffff",
    description:
      "Lo usamos para planificar el diseño, crear logos o piezas visuales, y editar imágenes y fotografías.",
  },
  {
    title: "React",
    icon: "https://img.icons8.com/?size=100&id=58811&format=png&color=ffffff",
    description:
      "El lenguaje de programación que usamos. Permite construir interfaces y animaciones fluidas, y programar la estética de la página a medida.",
  },
  {
    title: "Supabase",
    icon: supabaselogo,
    description:
      "Plataforma para almacenar y gestionar datos de forma segura, para que clientes puedan enviar mensajes o pedidos, gestionar inventarios o turnos.",
  },
  {
    title: "Vercel",
    icon: "https://img.icons8.com/?size=100&id=eXVvv0ElyhQy&format=png&color=ffffff",
    description:
      "Publicamos versiones privadas de la página durante el desarrollo para que puedas supervisar el progreso desde cualquier dispositivo.",
  },
];

type ExpandableCardProps = {
  title: string;
  icon: string;
  description: string;
  open?: boolean;
};

function ExpandableCard({ title, icon, description, open = false }: ExpandableCardProps) {
  return (
    <details
      open={open}
      className="group overflow-hidden border border-white/10 bg-white/[0.035] transition-colors open:border-zinc-500/80 open:bg-white/[0.06]"
    >
      <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-black/30">
          <img src={icon} alt="" className="h-6 w-6 object-contain" />
        </span>
        <span className="min-w-0 flex-1 text-left font-semibold">{title}</span>
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center border border-white/15 text-lg leading-none transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="border-t border-white/10 px-5 py-4">
        <p className="text-sm leading-6 text-white/70">{description}</p>
      </div>
    </details>
  );
}

function DesktopColumns({ items }: { items: Omit<ExpandableCardProps, "open">[] }) {
  return (
    <motion.dl
      className="hidden grid-cols-4 gap-8 lg:grid [&>div:nth-child(2)]:mt-12 [&>div:nth-child(3)]:mt-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.5 } } }}
    >
      {items.map(({ title, icon, description }) => (
        <motion.div
          key={title}
          className="min-w-0 text-center"
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            },
          }}
        >
          <dt className="my-4 flex flex-col items-center gap-2 font-semibold">
            <img src={icon} alt="" className="h-10 w-10 object-contain" />
            {title}
          </dt>
          <dd className="mx-auto max-w-64 text-sm leading-6 text-white/70">
            {description}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}

export default function Hero() {
  return (
    <main className="overflow-x-clip bg-black text-white">
      <section className="min-h-[calc(100svh-72px)] bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,1)),url('https://images.unsplash.com/photo-1652717249447-293e8205c000?q=80&w=3000&auto=format&fit=cover')] bg-cover bg-center pt-18">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mx-auto flex min-h-[calc(100svh-72px)] max-w-3xl flex-col items-center justify-center px-6 pb-16 text-center"
        >
          <motion.div 
          variants={reveal} className="relative mb-12 mt-[33%]">
            <div className="absolute inset-0 scale-125 rounded-full bg-white/20 blur-2xl" />
            <img src={logo} alt="JL Marketing" className="relative h-30 w-30 object-contain md:h-44 md:w-44" />
          </motion.div>
          <motion.p variants={reveal} className="max-w-xl text-sm leading-8 text-white/90 sm:text-xl">
            Impulsá tu negocio. Con nosotros es fácil.
          </motion.p>
          <motion.div variants={reveal} className="mt-[30%] md:mt-[25%]">
            <ScrollArrow />
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div variants={reveal} className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="mb-3 text-sm font-medium">LO QUE OFRECEMOS</h2>
            <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
              Desarrollamos páginas web para negocios, acorde a cualquier necesidad. Toda idea es realizable.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid gap-3 md:grid-cols-2 lg:hidden">
            {services.map((service, index) => (
              <motion.div key={service.title} variants={reveal}>
                <ExpandableCard {...service} open={index === 0} />
              </motion.div>
            ))}
          </motion.div>
          <DesktopColumns items={services} />
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.div variants={reveal} className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="mb-3 text-sm font-medium">HERRAMIENTAS UTILIZADAS</h2>
              <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
                Trabajamos con herramientas de la industria para entregar resultados profesionales y fáciles de mantener.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid gap-3 md:grid-cols-2 lg:hidden">
              {tools.map((tool, index) => (
                <motion.div key={tool.title} variants={reveal}>
                  <ExpandableCard {...tool} open={index === 0} />
                </motion.div>
              ))}
            </motion.div>
            <DesktopColumns items={tools} />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
          <motion.h2 variants={reveal} className="text-2xl font-semibold">
            ¡Revisá nuestro trabajo!
          </motion.h2>
          <motion.p variants={reveal} className="my-5 text-sm mx-2 text-white/70 sm:text-base">
            Conocé nuestras páginas de ejemplo para conocer lo que podemos hacer por ti. Pedí tu presupuesto sin costo alguno.
          </motion.p>
          <motion.div variants={reveal} className="mt-10">
            <Link
              to="/Presupuesto"
              className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm font-medium transition-colors hover:border-white/80 hover:bg-white/20"
            >
              Ver planes
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
