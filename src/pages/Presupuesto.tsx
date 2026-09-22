import Plans from "../components/Plans";
import ClosingSections from "../components/ClosingSections";
import Reveal from "../components/Reveal";
export default function Presupuesto() {
  return (
    <main id="contenido" className="budget-page">
      <Reveal className="budget-intro shell">
        <p className="label">DISEÑO A MEDIDA / PLANES</p>
        <h1>
          Encontrá tu punto
          <br />
          de partida.
        </h1>
      </Reveal>
      <Plans />
      <ClosingSections />
    </main>
  );
}
