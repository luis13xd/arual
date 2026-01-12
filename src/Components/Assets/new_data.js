
import setbabyblue1 from "./sets/setbabyblue1.jpeg";
import setmarazul1 from "./sets/setmarazul1.jpeg";
import setpink1 from "./sets/setpink1.jpeg";
import enterizoflexazulcielolargo1 from "./enterizos/enterixoflexazulcielo1.jpeg";

let new_data = [
  {
    id: 408,
    name: "ENTERIZO PINK - TONO ROSADO",
    image: setpink1,
    new_price: 80000,
    old_price: 120000,
  },
  {
    id: 402,
    name: "SET BABY - TONO AZUL",
    image: setbabyblue1,
    new_price: 100000,
    old_price: 130000,
  },
{
    id: 119,
    name: "ENTERIZO FLEX - TONO AZUL",
    category: "enterizos",
    description: "Tela suave con acabados de la mejor calidad",
    image: enterizoflexazulcielo1,
    image2: enterizoflexazulcielo2,
    image3: enterizoflexazulcielo3,
    image4: enterizoflexazulcielo4,
    new_price: 130000,
    old_price: 140000,
    sizes: {
      XS: false,
      S: true,
      M: true,
      L: false,
      XL: false,
    },
  },
  {
    id: 406,
    name: "SET MAR - TONO AZUL",
    image: setmarazul1,
    new_price: 60000,
    old_price: 100000,
  },

  
];

export default new_data;