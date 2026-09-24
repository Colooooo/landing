import { m, useReducedMotion } from "framer-motion";
import ArrowIcon from "./ArrowIcon";

export default function ScrollArrow() {
  const reduceMotion = useReducedMotion();

  return (
    <m.a
      className="scroll-arrow-link"
      href="#planes"
      aria-label="Bajar para explorar los planes"
      initial={reduceMotion ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <ArrowIcon direction="down" className="scroll-arrow-icon" />
      <span className="scroll-arrow-caption">BAJÁ Y EXPLORÁ</span>
    </m.a>
  );
}
