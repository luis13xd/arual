//import img_1 from './img1.webp';
//import img_2 from './img2.webp';
import img_3 from './img3.webp';
import img_4 from './img4.webp';
//import img_1_1 from './img1-1.webp';
import img_1_2 from './img1-2.webp';
import img_1_3 from './img1-3.webp';
import img_1_4 from './img1-4.webp';
//import img_2_1 from './img2-1.webp';
import img_2_2 from './img2-2.webp';
import img_2_3 from './img2-3.webp';
import img_2_4 from './img2-4.webp';
import img_3_1 from './img3-1.webp';
import img_3_2 from './img3-2.webp';
import img_3_3 from './img3-3.webp';
import img_3_4 from './img3-4.webp';

import blanca1 from './blanca.jpg';
import blanca2 from './blanca2.jpg';
import negra from './blusanegra1.webp';
import sin from './blusamangas.webp';
import malla from './blusamalla1.webp';

let new_data = [
  {
    id: 37,
    name: "Blusa Deportiva Blanca",
    image: blanca1,
    image2: blanca2,
    image3: img_3,
    image4: img_4,
    new_price: 50000,
    old_price: 80000,
    sizes: {
      XS: true,
      S: true,
      M: false,
      L: true,
      XL: true
    }
  },
  {
    id: 38,
    name: "Blusa Deportiva Negra",
    image: negra,
    image2: img_1_2,
    image3: img_1_3,
    image4: img_1_4,
    new_price: 85000,
    old_price: 125000,
    sizes: {
      XS: true,
      S: true,
      M: false,
      L: true,
      XL: false,
    }
  },
  {
    id: 39,
    name: "Blusa Deportiva sin mangas",
    image: sin,
    image2: img_2_2,
    image3: img_2_3,
    image4: img_2_4,
    new_price: 60000,
    old_price: 105000,
    sizes: {
      XS: false,
      S: true,
      M: false,
      L: true,
      XL: true
    }
  },
  {
    id: 40,
    name: "Blusa deportiva Malla Blanca",
    image: malla,
    image2: img_3_2,
    image3: img_3_3,
    image4: img_3_4,
    new_price: 100000,
    old_price: 150000,
    sizes: {
      XS: true,
      S: true,
      M: false,
      L: true,
      XL: true
    }
  },
];

export default new_data;