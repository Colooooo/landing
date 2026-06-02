import ScrollArrow from "./ScrollArrow";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logoblanco.png";
import captura1 from "../assets/captura1.png";

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

            <h3 className="justify-self-center text-3xl pt-35 mb-15 font-semibold">Nuestros servicios</h3>

            <dl className="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-6 space-y-18 lg:mx-12 pb-45">
              <div className="col-start-1 col-end-1 row-start-1 row-end-1 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=25991&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Diseño
                  </dt>
                  <dd className="text-center mx-10 lg:mx-50">Realizamos el diseño de la página a partir de la estética e imagen del negocio.</dd>
              </div>
              <div className="col-start-2 col-end-2 row-start-1 row-end-1 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=2778&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Programación
                  </dt>
                  <dd className="text-center mx-10 lg:mx-50">Programamos la página siguiendo estándares de industria y buenas prácticas, logrando páginas que cargan rápido, se sienten fluidas
                    y están optimizadas para aparecer en búsquedas de Google.
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
                  <dd className="text-center mx-10 lg:mx-50">Ofrecemos mantenimiento permanente una vez publicada la página, garantizando su correcto funcionamiento y permitiendo hacerle cualquier cambio que se desee.</dd>
              </div>    
              <div className="col-start-2 col-end-2 row-start-2 row-end-2 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=6470&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Resultados
                  </dt>
                  <dd className="text-center mx-10 lg:mx-50">Tu página va a ser una gran herramienta a la hora de atrapar nuevos clientes y mantener a los que ya tienes, expandiendo tu negocio y tus ganancias.</dd>
              </div>   
         </dl>

         <h3 className="justify-self-center text-3xl mb-15 font-semibold">Herramientas utilizadas</h3>

            <dl className="lg:grid lg:grid-cols-3 lg:grid-rows-1 gap-6 space-y-18 lg:mx-12 pb-32">
              <div className="col-start-1 col-end-1 row-start-1 row-end-1 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=2916&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Photoshop
                  </dt>
                  <dd className="text-center mx-10 lg:mx-50">Usado para planificar el diseño, realizar logos, botones, secciones, etc.</dd>
              </div>
              <div className="col-start-2 col-end-2 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4 mt-10">
                  <img
                    src="https://img.icons8.com/?size=100&id=58811&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    React
                  </dt>
                  <dd className="text-center mx-10 lg:mx-50">Entorno de programación web basado en HTML, CSS y TypeScript, usado para optimización automática de recursos, desarrollo ágil, animaciones fluidas, etc.
                  </dd>
              </div>    
              <div className="col-start-3 col-end-3 justify-items-center">
                  <dt className="font-semibold justify-items-center my-4">
                  <img
                    src="https://img.icons8.com/?size=100&id=eXVvv0ElyhQy&format=png&color=ffffff"
                    className="w-10 h-10 mb-2"
                  />
                    Vercel
                  </dt>
                  <dd className="text-center mx-10 lg:mx-50">Plataforma de desarrollo donde publicamos la página a medida que se realiza. También permite comprar el dominio para la página (por ejemplo, jlan.com.uy) y hacer análisis de estadísticas de uso.
                  </dd>
              </div>    
         </dl>

      </div> 
    </div>
  </div>
  </>
  );
}