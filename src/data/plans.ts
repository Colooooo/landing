import cafe from "../assets/optimized/cafe-1200.webp";
import cafeSmall from "../assets/optimized/cafe-640.webp";
import barberia from "../assets/optimized/barberia-1200.webp";
import barberiaSmall from "../assets/optimized/barberia-640.webp";
import ferreteria from "../assets/optimized/ferreteria-1200.webp";
import ferreteriaSmall from "../assets/optimized/ferreteria-640.webp";
import tarjetaCafe from "../assets/tarjetas/cafe-aurora.webp";
import tarjetaBarberia from "../assets/tarjetas/king-barber-v2.webp";
import tarjetaFerreteria from "../assets/tarjetas/el-galpon-v2.webp";

export const whatsapp = (plan?: string) =>
  `https://wa.me/59892204234?text=${encodeURIComponent(plan ? `¡Hola! Me interesa el plan ${plan}. Quisiera un presupuesto para mi negocio.` : "¡Hola! Vi su página y me gustaría un presupuesto para mi negocio.")}`;
export const plans = [
  {
    name: "Básico",
    price: "$1.500",
    purpose: "Para que te encuentren.",
    business: "Café Aurora",
    category: "Cafetería · Web de presentación",
    image: cafe,
    imageSmall: cafeSmall,
    cardImage: tarjetaCafe,
    link: "https://cafeteria-sage-three.vercel.app/",
    description:
      "Una página informativa, con detalles como qué ofrece tu negocio, dónde está y qué horarios se manejan.",
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
    price: "$3.000",
    purpose: "Para mostrar todo tu potencial.",
    business: "King Barber Studio",
    category: "Barbería · Web con más secciones",
    image: barberia,
    imageSmall: barberiaSmall,
    cardImage: tarjetaBarberia,
    link: "https://barberia-ruddy.vercel.app/",
    description:
      "Dale espacio a tus servicios y a tu identidad, con más secciones e integraciones.",
    included: [
      "Múltiples secciones",
      "Diseño adaptable a celular",
      "Animaciones intermedias",
      "Formulario de contacto",
      "Integraciones básicas",
    ],
    excluded: ["Pagos online", "Agenda de reservas", "Panel administrativo"],
  },
  {
    name: "Completo",
    price: "$5.000",
    purpose: "Para llevar tu negocio más lejos.",
    business: "El Galpón Ferretería",
    category: "Ferretería · Una web como herramienta.",
    image: ferreteria,
    imageSmall: ferreteriaSmall,
    cardImage: tarjetaFerreteria,
    link: "https://paginas-sepia.vercel.app/",
    description:
      "Una página que te servirá como herramienta para manejar tu negocio: catálogo de productos, recepción de pedidos, pagos online, y cualquier otra función necesaria.",
    included: [
      "Secciones ilimitadas",
      "Animaciones avanzadas",
      "Catálogo de productos",
      "Pagos online",
      "Agenda de reservas",
      "Panel administrativo",
    ],
    excluded: [],
  },
];
