import topemmanegro1 from "./body/topemmanegro1.jpeg";
import bodybambienegro1 from "./body/bodybambienegro1.jpeg";
import topsamalia1 from "./body/topsamalia1.jpeg";
import topzaharaazulmorado1 from "./body/topzaharaazulmorado1.jpeg";

let new_collections = [
{
    id: 304,
    name: "TOPS EMMA - TONO NEGRO",
    image: topemmanegro1,
    new_price: 40000,
    old_price: 50000,
  },
{
    id: 305,
    name: "TOPS EMMA - TONO BLANCO",
    category: "bodysytops",
    description: "Tela completamente acanalada",
    image: topemmablanco1,
    image2: topemmablanco2,
    image3: topemmablanco3,
    image4: topemmablanco4,
    new_price: 40000,
    old_price: 50000,
    sizes: {
      XS: false,
      S: true,
      M: true,
      L: false,
      XL: false,
    },
  },
  {
    id: 306,
    name: "TOPS AMALIA - TONO BLANCO-NEGRO-CAFÉ",
    image: topsamalia1,
    new_price: 30000,
    old_price: 40000,
  },
  {
    id: 307,
    name: "TOPS ZAHARA - TONO AZUL-MORADO",
    image: topzaharaazulmorado1,
    new_price: 25000,
    old_price: 40000,
  },

];

export default new_collections;
