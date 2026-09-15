// Productos del catálogo Ventas KCI.
// Para agregar un producto, copia un bloque { ... } y edítalo.
// - image: nombre de la foto subida al repo (ej. "arroz.png"),
//   o un enlace de imagen que empiece con https://
const PRODUCTS = [
  {
    id: 1,
    name: "Jarrito",
    category: "Fiestas Patrias",
    price: 1500,
    image: "Jarrito.png",
    description:
      "Jarrito de 500ml para utilizar en diferentes bebidas estas Fiestas Patrias.",
  },

  // --- Bebidas ---
  {
    id: 2,
    name: "Coca-Cola Original",
    category: "Bebidas",
    price: 3300,
    image: "Cocacola original.png",
    description: "Bebida 3 litros.",
  },
  {
    id: 3,
    name: "Coca-Cola Sin Azúcar",
    category: "Bebidas",
    price: 3300,
    image: "cocacola sin azucar.png",
    description: "Bebida 3L.",
  },
  {
    id: 4,
    name: "Kem",
    category: "Bebidas",
    price: 3000,
    image: "Kem.png",
    description: "Bebida 3L.",
  },
  {
    id: 5,
    name: "Bilz",
    category: "Bebidas",
    price: 3000,
    image: "Bilz.png",
    description: "Bebida 3L.",
  },

  // --- Quesos, cecinas y vienesas ---
  {
    id: 6,
    name: "Queso La Vaquita",
    category: "Quesos, cecinas y vienesas",
    price: 4000,
    image: "Queso La vaquita.png",
    description: "Queso gauda laminado 400g.",
  },
  {
    id: 7,
    name: "Soprole Gauda Rallado",
    category: "Quesos, cecinas y vienesas",
    price: 3900,
    image: "Soprole gauda rallado.png",
    description: "Queso gauda en hebras 400g.",
  },
  {
    id: 8,
    name: "Salame Italiano PF",
    category: "Quesos, cecinas y vienesas",
    price: 2200,
    image: "Salame italiano pf.png",
    description: "Salame tipo italiano PF 100g.",
  },

  // --- Congelados ---
  {
    id: 9,
    name: "Papas Prefritas",
    category: "Congelados",
    price: 5500,
    image: "papa prefritas.png",
    description: "Papas prefritas McCain corte fino 7x7, 2,25kg.",
  },
  {
    id: 10,
    name: "Nuggets de Pollo Receta del Abuelo",
    category: "Congelados",
    price: 3750,
    image: "nuggets de pollo.png",
    description: "Nuggets de pollo Receta del Abuelo 400g.",
  },
  {
    id: 11,
    name: "Camarones",
    category: "Congelados",
    price: 5500,
    image: "camarones.png",
    description: "Camarones 1kg.",
  },
  {
    id: 12,
    name: "Carne Molida",
    category: "Congelados",
    price: 1500,
    image: "carne molida.png",
    description: "Carne molida especial 250g.",
  },
  {
    id: 13,
    name: "Nuggets de Pollo Montina",
    category: "Congelados",
    price: 2000,
    image: "nuggets de pollo montina.png",
    description: "Nuggets de pollo 300g.",
  },

  // --- Snacks ---
  {
    id: 14,
    name: "Chocolate Vizzio",
    category: "Snacks",
    price: 2200,
    image: "vizzio.png",
    description: "Chocolate Vizzio 120g.",
  },
  {
    id: 15,
    name: "Suflés de Queso Chitopo",
    category: "Snacks",
    price: 1500,
    image: "sufles de queso.png",
    description: "Suflés de queso Chitopo 150gr.",
  },
  {
    id: 16,
    name: "Papas Fritas Tim",
    category: "Snacks",
    price: 1500,
    image: "papas fritas.png",
    description: "Papas fritas Tim 150gr.",
  },

  // --- Masas ---
  {
    id: 17,
    name: "Empanadas de Queso",
    category: "Masas",
    price: 3800,
    image: "empanadas de queso.png",
    description: "Empanadas de queso, bandeja de 10 unidades.",
  },
  {
    id: 18,
    name: "Masa de Sopaipilla",
    category: "Masas",
    price: 2000,
    image: "masa sopaipilla.png",
    description: "Masa de sopaipilla, 10 unidades.",
  },

  // --- Abarrotes ---
  {
    id: 19,
    name: "Arroz Tucapel",
    category: "Abarrotes",
    price: 1500,
    image: "arroz.png",
    description: "Arroz Tucapel 900gr.",
  },
  {
    id: 20,
    name: "Tallarines Parma",
    category: "Abarrotes",
    price: 900,
    image: "tallarines.png",
    description: "Tallarines Parma 97.",
  },
  {
    id: 21,
    name: "Salsa de Tomate San Remo",
    category: "Abarrotes",
    price: 500,
    image: "salsa de tomate.png",
    description: "Salsa de tomate San Remo, Parma, 200gr.",
  },

  // --- Luces ---
  {
    id: 22,
    name: "Foco LED",
    category: "Luces",
    price: 7000,
    image: "foco.png",
    description:
      "Foco LED, duración de la carga 9hrs, 3 niveles de iluminación.",
  },
];
