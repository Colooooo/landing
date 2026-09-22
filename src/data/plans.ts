import cafe from "../assets/cafeauroradesktop.jpg";
import barberia from "../assets/barberia.jpg";
import ferreteria from "../assets/ferreteria.jpg";
import tarjetaCafe from "../assets/tarjetas/cafe-aurora.webp";
import tarjetaBarberia from "../assets/tarjetas/king-barber-v2.webp";
import tarjetaFerreteria from "../assets/tarjetas/el-galpon-v2.webp";

export const whatsapp = (plan?: string) =>
  `https://wa.me/59892204234?text=${encodeURIComponent(plan ? `¡Hola! Me interesa el plan ${plan}. Quisiera un presupuesto para mi negocio.` : "¡Hola! Vi su página y me gustaría un presupuesto para mi negocio.")}`;
export const plans = [
  {
    name: "Básico",
    price: "$3.000",
    purpose: "Para que te encuentren.",
    business: "Café Aurora",
    category: "Cafetería · Web de presentación",
    image: cafe,
    cardImage: tarjetaCafe,
    link: "https://cafeteria-sage-three.vercel.app/",
    description:
      "Tu negocio, tus horarios y una forma fácil de contactarte. Todo en un mismo lugar.",
    included: [
      "1 sección principal",
      "Diseño adaptable a celular",
      "Formulario de contacto",
      "Animaciones básicas",
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
    price: "$5.000",
    purpose: "Para mostrar todo tu potencial.",
    business: "King Barber",
    category: "Barbería · Web con más secciones",
    image: barberia,
    cardImage: tarjetaBarberia,
    link: "https://barberia-ruddy.vercel.app/",
    description:
      "Dale espacio a tus servicios y a tu identidad, con más secciones e integraciones.",
    included: [
      "Múltiples secciones",
      "Diseño adaptable a celular",
      "Animaciones avanzadas",
      "Formulario de contacto",
      "Integraciones básicas",
    ],
    excluded: ["Pagos online", "Agenda de reservas", "Panel administrativo"],
  },
  {
    name: "Completo",
    price: "$9.000",
    purpose: "Para llevar tu negocio más lejos.",
    business: "El Galpón",
    category: "Ferretería · Web con catálogo",
    image: ferreteria,
    cardImage: tarjetaFerreteria,
    link: "https://ferreteria-9kgk4zxjm-colooooos-projects.vercel.app/",
    description:
      "Una web que también trabaja: catálogo, pagos, reservas y herramientas de gestión.",
    included: [
      "Secciones ilimitadas",
      "Animaciones premium",
      "Catálogo de productos",
      "Pagos online",
      "Agenda de reservas",
      "Panel administrativo",
    ],
    excluded: [],
  },
];
