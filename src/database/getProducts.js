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

const products = [
  {
    id: "mazo-tarot-1",
    title: "Mazo Tarot",
    brand: "AstroMatch",
    description:
      "Mazo para realizar tiradas del tarot",
    price: 1500,
    stock: 100,
    category: "Magia",
    img: "https://http2.mlstatic.com/D_NQ_NP_839685-MLA46495171618_062021-O.webp",
  },
  {
    id: "mazo-tarot-2",
    title: "Mazo Tarot",
    brand: "AstroMatch",
    description:
      "Mazo para realizar tiradas del tarot",
    price: 1500,
    stock: 100,
    category: "Magia",
    img: "https://http2.mlstatic.com/D_NQ_NP_839685-MLA46495171618_062021-O.webp",
  },
  {
    id: "mazo-tarot-3",
    title: "Mazo Tarot",
    brand: "AstroMatch",
    description:
      "Mazo para realizar tiradas del tarot",
    price: 1500,
    stock: 100,
    category: "Magia",
    img: "https://http2.mlstatic.com/D_NQ_NP_839685-MLA46495171618_062021-O.webp",
  },
  {
    id: "mazo-tarot-4",
    title: "Mazo Tarot",
    brand: "AstroMatch",
    description:
      "Mazo para realizar tiradas del tarot",
    price: 1500,
    stock: 100,
    category: "Magia",
    img: "https://http2.mlstatic.com/D_NQ_NP_839685-MLA46495171618_062021-O.webp",
  },
  {
    id: "mazo-tarot-5",
    title: "Mazo Tarot",
    brand: "AstroMatch",
    description:
      "Mazo para realizar tiradas del tarot",
    price: 1500,
    stock: 100,
    category: "Magia",
    img: "https://http2.mlstatic.com/D_NQ_NP_839685-MLA46495171618_062021-O.webp",
  },
  {
    id: "remera-astrologica",
    title: "Remera astrologica",
    brand: "AstroMatch",
    description:
      "Mazo para realizar tiradas del tarot",
    price: 1500,
    stock: 100,
    category: "Astros",
    img: "https://http2.mlstatic.com/D_NQ_NP_839685-MLA46495171618_062021-O.webp",
  },

];