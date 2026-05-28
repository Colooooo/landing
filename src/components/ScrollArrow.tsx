import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollArrow() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: 1,
            y: [0, 40, 0],
          }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            opacity: { duration: 0.6 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative z-10 lg:mt-15"
        >
          <div className="flex flex-col items-center gap-1">
            {/* glow suave */}
            <div className="absolute w-15 h-15 bg-white/30 blur-xl rounded-full" />

            {/* flecha */}
            <svg
              className="w-9 h-9 text-white/80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 10l-7 7-7-7"
              />
            </svg>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}