import mazo from '../assets/mazo.jpg';

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products?.length >= 1) {
        resolve(products)
      } else {
        reject("error")
      }
    }, 2000);
  })
}

export const arregloProductos = [
  {
    id: 1,
    title: "Mazo Magas Ilustradas",
    brand: "AstroMatch",
    description:
      "Mazo para realizar tiradas del tarot",
    price: 1500,
    stock: 100,
    category: "Magia",
    pictureUrl: mazo,
  },
  {
    id: 2,
    title: "Mazo Tarot",
    brand: "AstroMatch",
    description: "Mazo para realizar tiradas del tarot",
    price: 1500,
    stock: 100,
    category: "Magia",
    pictureUrl: mazo,
  },
  {
    id: 3,
    title: "Curso Tarot",
    brand: "AstroMatch",
    description: "Clase para aprender tarot",
    price: 1500,
    stock: 100,
    category: "Magia",
    pictureUrl: mazo,
  },
  {
    id: 4,
    title: "Vela Intenciones",
    brand: "AstroMatch",
    description: "Una vela, una intención",
    price: 1500,
    stock: 100,
    category: "Magia",
    pictureUrl: mazo,
  },
  {
    id: 5,
    title: "Libro Tarot",
    brand: "AstroMatch",
    description: "Aprende el significado de cada carta",
    price: 1500,
    stock: 100,
    category: "Magia",
    pictureUrl: mazo,
  },
  {
    id: 6,
    title: "Remera astrologica",
    brand: "AstroMatch",
    description: "Remera con motivos astrologicos",
    price: 1500,
    stock: 100,
    category: "Astros",
    pictureUrl: mazo,
  },

];