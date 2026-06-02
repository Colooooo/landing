import ScrollArrow from "./ScrollArrow";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logoblanco.png";
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

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0,
        transition: {
      duration: 0.8,
      ease: "easeInOut",
    }, },
   };

const item2 = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0,
        transition: {
      duration: 0.8,
      ease: "easeInOut",
    }, },
   };

const item3 = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0,
        transition: {
      duration: 0.8,
      ease: "easeInOut",
    }, },
   };

const item4 = {
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
    description: "Página básica, sin animaciones, de visualización de contenido.",
  },
  {
    name: "Profesional",
    price: "$4000",
    description: "Página de varias secciones, con animaciones sencillas y funcionalidades simples.",
  },
  {
    name: "Premium",
    price: "$7000",
    description: "Página con secciones ilimitadas, optimizada siguiendo estándares de industria, con animaciones avanzadas y funcionalidades completas como catálogo de compras, registro de órdenes, pagos online, agendas, etc.",
  },
];

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
            className="justify-items-center mt-18 h-[calc(100dvh-72px)]">           
                <motion.h2 className="text-base/7 font-semibold" variants={item}></motion.h2>
                <motion.div className="flex items-center py-10" variants={item}>
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
                  <div className="flex flex-col items-center mt-35">
                  <div className="absolute w-25 h-25 bg-white/30 blur-2xl rounded-full lg:w-35 lg:h-50" />
                    <img
                    src={logo}
                    className="w-25 h-25 lg:w-40 lg:h-40"
                    />
                  </div>
                </motion.div>
                </AnimatePresence>
                  <h1 className="hidden text-3xl font-bold ml-3 lg:text-5xl">JLan</h1>
                </motion.div>
                <motion.div className="pb-10" variants={item} >
                  <motion.p className="mt-10 text-md text-center lg:text-xl lg:mt-25" variants={item}>Impulsá tu negocio. Con nosotros es fácil.</motion.p>
                </motion.div>
                <motion.div className="flex justify-center mt-5" variants={item} >
                  <Link to="/agenda">
                  </Link>
                </motion.div>
                <motion.div className="flex justify-center mt-15" variants={item}>
                    <ScrollArrow/>
                </motion.div>
            </motion.div>
            
            <motion.div variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}>
              <motion.h3 className="justify-self-center text-2xl font-semibold mb-5 pt-20 lg:pt-35"
                        variants={item4}>Nuestros servicios</motion.h3>
              <motion.p className="justify-self-center text-center mx-15 mb-25"
                        variants={item4}>Creamos una página web a la medida de tu negocio y acorde a sus necesidades, cualquier idea es realizable.</motion.p>
            </motion.div>


            <motion.dl className="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-6 space-y-18 lg:mx-12"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}>
              <motion.div className="col-start-1 col-end-1 row-start-1 row-end-1 justify-items-center"
                          variants={item3}>
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=25991&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Diseño
                  </dt>
                  <dd className="text-center mx-10 text-xs lg:mx-50">Realizamos el diseño de la página a partir de la estética e imagen del negocio.</dd>
              </motion.div>
              <motion.div className="col-start-2 col-end-2 row-start-1 row-end-1 justify-items-center"
                          variants={item2}>
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=2778&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Programación
                  </dt>
                  <dd className="text-center mx-10 text-xs lg:mx-50">Programamos la página siguiendo estándares de industria y buenas prácticas, logrando páginas que cargan rápido, se sienten fluidas
                    y están optimizadas para aparecer en búsquedas de Google.
                  </dd>
              </motion.div>
              <motion.div className="col-start-1 col-end-1 row-start-2 row-end-2 justify-items-center"
                          variants={item3}>
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=364&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Mantenimiento
                  </dt>
                  <dd className="text-center mx-10 text-xs lg:mx-50">Ofrecemos mantenimiento permanente una vez publicada la página, garantizando su correcto funcionamiento y permitiendo hacerle cualquier cambio que se desee.</dd>
              </motion.div>
              <motion.div className="col-start-2 col-end-2 row-start-2 row-end-2 justify-items-center"
                          variants={item2}>
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=6470&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Resultados
                  </dt>
                  <dd className="text-center mx-10 text-xs lg:mx-50">Tu página va a ser una gran herramienta a la hora de atrapar nuevos clientes y mantener a los que ya tienes, expandiendo tu negocio y tus ganancias.</dd>
              </motion.div>
            </motion.dl>

            <motion.div variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}>
              <motion.h3 className="justify-self-center text-2xl mb-5 font-semibold pt-20 lg:pt-35"
                        variants={item2}>Herramientas utilizadas</motion.h3>
              <motion.p className="justify-self-center text-center mx-15 mb-25"
                        variants={item2}>Trabajamos siguiendo los estándares de la industria del desarrollo web para garantizar resultados profesionales.</motion.p>
            </motion.div>

         <motion.dl
          className="lg:grid lg:grid-cols-3 lg:grid-rows-1 gap-6 space-y-18 lg:mx-12 pb-32"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={item4}
            className="col-start-1 col-end-1 row-start-1 row-end-1 justify-items-center"
          >
            <dt className="font-semibold justify-items-center my-4">
              <img
                src="https://img.icons8.com/?size=100&id=2916&format=png&color=ffffff"
                className="w-10 h-10 mb-2"
              />
              Photoshop
            </dt>
            <dd className="text-center mx-10 text-xs lg:mx-50">Usado para planificar el diseño, para realizar logos, botones o secciones, y para edición y manipulación de imágenes/fotografías.
            </dd>
          </motion.div>

          <motion.div
            variants={item4}
            className="col-start-2 col-end-2 justify-items-center"
          >
            <dt className="font-semibold justify-items-center my-4 mt-15">
              <img
                src="https://img.icons8.com/?size=100&id=58811&format=png&color=ffffff"
                className="w-10 h-10 mb-2"
              />
              React
            </dt>
            <dd className="text-center mx-10 text-xs lg:mx-50">Entorno de programación web basado en HTML, CSS y TypeScript, usado para optimización automática de recursos, 
                desarrollo ágil, animaciones fluidas, etc.
            </dd>
          </motion.div>

          <motion.div
            variants={item4}
            className="col-start-3 col-end-3 justify-items-center"
          >
            <dt className="font-semibold justify-items-center my-4">
              <img
                src="https://img.icons8.com/?size=100&id=eXVvv0ElyhQy&format=png&color=ffffff"
                className="w-10 h-10 mb-2"
              />
              Vercel
            </dt>
            <dd className="text-center mx-10 text-xs lg:mx-50">Plataforma de desarrollo donde publicamos la página a medida que se realiza. 
                También permite comprar el dominio para la página (por ejemplo, jlan.com.uy) y hacer análisis de estadísticas de uso.
            </dd>
          </motion.div>
        </motion.dl>
      </div> 

      <h3 className="justify-self-center text-2xl mb-15 font-semibold">Planes</h3>

      <motion.div ref={emblaRef} className="overflow-hidden mb-35"
          variants={item4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}>
        <div className="flex">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="flex-[0_0_85%] md:flex-[0_0_55%] px-4"
            >
              <motion.div
                animate={{
                  scale: selectedIndex === index ? 1 : 0.82,
                  opacity: selectedIndex === index ? 1 : 0.35,
                  y: selectedIndex === index ? 0 : 20,
                }}
                transition={{
                  duration: 0.4,
                }}
                className={`
                  rounded-3xl p-8 h-100
                  ${
                    selectedIndex === index
                      ? "border-2"
                      : "border border-white/10"
                  }
                  bg-zinc-900
                `}
              >
                <h3 className="text-2xl font-semibold text-center">
                  {plan.name}
                </h3>

                <p className="text-xl font-semibold mt-6 text-center">
                  {plan.price}
                </p>

                <p className="text-zinc-400 mt-6 text-center">
                  {plan.description}
                </p>
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