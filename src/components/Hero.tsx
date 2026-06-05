import ScrollArrow from "./ScrollArrow";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logoblanco.png";
import supabaselogo from "../assets/supabaselogo.svg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // delay entre hijos
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0,
        transition: {
      duration: 0.8,
      ease: "easeInOut",
    }, },
   };

const item2: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0,
        transition: {
      duration: 0.8,
      ease: "easeInOut",
    }, },
   };

const item3: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0,
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

export default function Hero() {
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
                    className="w-25 h-20 lg:w-40 lg:h-40"
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
                <motion.div className="flex justify-center mt-10" variants={item}>
                    <ScrollArrow/>
                </motion.div>
            </motion.div>
            
            <motion.div variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 1 }}>
              <motion.h3 className="justify-self-center text-2xl font-semibold mb-5 pt-20 lg:pt-35"
                        variants={item4}>Nuestros servicios</motion.h3>
              <motion.p className="justify-self-center text-center mx-15 mb-25"
                        variants={item4}>Creamos una página web a la medida de tu negocio y acorde a sus necesidades. Cualquier idea es realizable.</motion.p>
            </motion.div>


            <motion.dl className="grid grid-cols-2 grid-rows-2 gap-6 space-y-18 lg:mx-12"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}>
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
                        viewport={{ once: true, amount: 1 }}>
              <motion.h3 className="justify-self-center text-2xl mb-5 font-semibold pt-20 lg:pt-35"
                        variants={item2}>Herramientas utilizadas</motion.h3>
              <motion.p className="justify-self-center text-center mx-15 mb-25"
                        variants={item2}>Trabajamos siguiendo los estándares de la industria del desarrollo web para garantizar resultados profesionales.</motion.p>
            </motion.div>

         <motion.dl
          className="lg:grid lg:grid-cols-4 lg:grid-rows-1 space-y-18 lg:mx-12 pb-32"
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
            <dd className="text-center mx-10 text-xs lg:mx-20">
              Usado para planificar el diseño, para realizar logos, botones o secciones, y para edición y manipulación de imágenes/fotografías.
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
            <dd className="text-center mx-10 text-xs lg:mx-20">
              Entorno de programación web basado en varios lenguajes como HTML, CSS y TypeScript, usado para optimización automática de recursos, 
              desarrollo ágil, animaciones fluidas, etc.
            </dd>
          </motion.div>

          <motion.div
            variants={item4}
            className="col-start-3 col-end-3 justify-items-center"
          >
            <dt className="font-semibold justify-items-center my-4 mt-15">
              <img
                src={supabaselogo}
                className="w-9 h-9 mb-2"
              />
              Supabase
            </dt>
            <dd className="text-center mx-10 text-xs lg:mx-20">
              Base de datos que permite almacenar y gestionar información de forma segura, implementar formularios, 
              autenticación de usuarios y funcionalidades dinámicas, asegurando escalabilidad y facilidad de mantenimiento a largo plazo.
            </dd>
          </motion.div>

          <motion.div
            variants={item4}
            className="col-start-4 col-end-4 justify-items-center"
          >
            <dt className="font-semibold justify-items-center my-4">
              <img
                src="https://img.icons8.com/?size=100&id=eXVvv0ElyhQy&format=png&color=ffffff"
                className="w-10 h-10 mb-2"
              />
              Vercel
            </dt>
            <dd className="text-center mx-10 text-xs lg:mx-20">
              Plataforma de desarrollo donde publicamos la página de forma privada a medida que se realiza, pudiendo el cliente supervisar el proceso desde su dispositivo en cualquier momento. 
              También permite comprar el dominio para la página una vez publicada (por ejemplo, jlan.com.uy) y hacer análisis de estadísticas de uso.
            </dd>
          </motion.div>
        </motion.dl>
      </div> 

      <motion.div className="overflow-hidden pb-20"
          variants={item4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}>
            <h3 className="justify-self-center text-2xl mb-5 font-semibold">Nuestra forma de trabajo</h3>
            <p className="justify-self-center text-base">
              Pida un presupuesto inicial sin costo alguno para ver diseños preliminares de lo que podría llegar a ser la página de su negocio.

            </p>
            
          <div className="mt-15 flex justify-center">
              <Link
                  to="/Presupuesto"
                  className="bg-black text-white">
                  <button className="group relative border-2 justify-items-center border-white/50 text-white tracking-wide overflow-hidden transition-all duration-300 lg:text-xl lg:py-3 lg:px-15">

                    <span className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                    <span className="hidden absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />

                    <span className="relative text-sm flex items-center gap-2 py-2 px-3 lg:px-0 lg:py-0">
                            Pedir presupuesto
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14m0 0l-4-4m4 4l-4 4"
                          />
                        </svg>
                    </span>

                    <span className="hidden absolute inset-0 border border-white/10 group-hover:border-white/30 transition" />
                  </button>
              </Link>
          </div>
          </motion.div>

    </div>
  </div>
  </>
  );
}