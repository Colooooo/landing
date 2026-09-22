import Plans from "../components/Plans";
import ClosingSections from "../components/ClosingSections";
export default function Presupuesto() {
  return (
    <main id="contenido" className="budget-page">
      <div className="budget-intro shell">
        <p className="eyebrow">MENOS IMAGINAR. MÁS EXPLORAR.</p>
        <h1>
          Elegí tu próximo paso<span className="accent">.</span>
        </h1>
        <p>Tres puntos de partida. Una web con la identidad de tu negocio.</p>
      </div>
      <Plans />
      <ClosingSections />
    </main>
  );
}
