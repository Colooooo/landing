import ScrollArrow from "./ScrollArrow";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logoblanco.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // delay entre hijos
    },
  },
};

const item = {
  hidden: { opacity: 0, x:-30 },
  show: { opacity: 1, x: 0 },
};

export default function Hero() {
  return (
  <>
  <div className="overflow-hidden bg-black text-white">
    <div className="mx-auto grid grid-cols-1 lg:mx-0 lg:max-w-none">
          <div className="min-h-svh py-32 px-14 lg:bg-cover bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,1)),url('https://images.unsplash.com/photo-1652717249447-293e8205c000?q=80&w=627&auto=format&fit=crop')]">
            <motion.div
            initial="hidden"
            animate="show"
            transition={ {duration: 3} }
            variants={container}
            className="justify-items-center lg:mt-60">           
                <motion.h2 className="text-base/7 font-semibold" variants={item}></motion.h2>
                <motion.p className="hidden text-l tracking-tight m:text-5xl text-left lg:text-2xl lg:mr-140" variants={item}>Andá siempre fino</motion.p>
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
                  <div className="flex flex-col pt-10 items-center">
                  <div className="absolute w-25 h-25 bg-white/20 blur-xl rounded-full lg:w-35 lg:h-40 lg:mr-10 lg:mb-5" />
                    <img
                    src={logo}
                    className="w-25 h-25 lg:w-30 lg:h-30 lg:mb-15 lg:mr-10"
                    />
                  </div>
                </motion.div>
                </AnimatePresence>
                  <h1 className="hidden text-3xl font-bold ml-3 lg:text-5xl">JLan</h1>
                </motion.div>
                <motion.div className="pb-10" variants={item} >
                  <motion.p className="mt-10 text-md text-center lg:text-xl" variants={item}>Impulsá tu negocio. Con nosotros es fácil.</motion.p>
                </motion.div>
                <motion.div className="flex justify-center mt-5" variants={item} >
                  <Link to="/agenda">
                  </Link>
                </motion.div>
                <motion.div className="flex justify-center mt-25" variants={item}>
                    <ScrollArrow/>
                </motion.div>
            </motion.div>
          </div>

         <dl className="grid grid-cols-2 grid-rows-2 gap-6 space-y-18 mx-6">
              <div className="col-start-1 col-end-1 row-start-1 row-end-1 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=25991&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Diseño
                  </dt>
                  <dd className="text-center mx-4">Realizamos el diseño de tu página a partir de la estética e imagen de tu negocio.</dd>
              </div>
              <div className="col-start-2 col-end-2 row-start-1 row-end-1 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=2778&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Programación
                  </dt>
                  <dd className="text-center mx-4">Programamos tu página siguiendo estándares de industria y buenas prácticas, logrando páginas que cargan rápido, se sienten fluidas
                    y optimizadas para búsquedas en Google.
                  </dd>
              </div>    
              <div className="col-start-1 col-end-1 row-start-2 row-end-2 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=364&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Mantenimiento
                  </dt>
                  <dd className="text-center mx-4">Ofrecemos mantenimiento permanente una vez publicada la página, garantizando su correcto funcionamiento y permitiendo hacerle cualquier cambio que usted desee.</dd>
              </div>    
              <div className="col-start-2 col-end-2 row-start-2 row-end-2 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=6470&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Resultados
                  </dt>
                  <dd className="text-center mx-4">Tu página va a ser una gran herramienta a la hora de atrapar nuevos clientes y mantener contigo a los que ya tienes, expandiendo tu negocio y tus ganancias.</dd>
              </div>   
         </dl>
    </div>
  </div>
  </>
  );
}