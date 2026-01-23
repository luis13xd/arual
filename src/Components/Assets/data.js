import enterizoalmabeige1 from "./enterizos/enterizoalmabeige2.jpeg";
import enterizomagnusrojo1 from "./enterizos/enterizomagnusrojo1.jpeg";
import enterizoflexazul1 from "./enterizos/enterizoflexazul1.jpeg";
import enterizoflowerrosado1 from "./enterizos/enterizoflowerrosado1.jpeg";

let data_product = [
  {
    id: 101,
    name: "ENTERIZO ALMA - TONO BEIGE",
    category: "enterizos",
    image: enterizoalmabeige1,
    new_price: 90000,
    old_price: 100000,
  },
  {
    id: 107,
    name: "ENTERIZO EVA - VINO TINTO",
    category: "enterizos",
    description: "Tela suave con acabados de la mejor calidad",
    image: enterizoevavinotinto1,
    image2: enterizoevavinotinto2,
    image3: enterizoevavinotinto3,
    image4: enterizoevavinotinto4,
    new_price: 140000,
    old_price: 150000,
    sizes: {
      XS: false,
      S: true,
      M: true,
      L: false,
      XL: false,
    },
  },
  {
    id: 106,
    name: "ENTERIZO FLEX - TONO AZUL",
    category: "enterizos",
    image: enterizoflexazul1,
    new_price: 140000,
    old_price: 150000,
  },
  {
    id: 120,
    name: "ENTERIZO MAGNUS - TONO ROJO",
    category: "enterizos",
    image: enterizomagnusrojo1,
    new_price: 110000,
    old_price: 120000,
  },
];

export default data_product;
