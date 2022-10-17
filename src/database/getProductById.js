import {getProducts} from "./getProducts"

export const getProductById = async (id) => {
  const products = await getProducts()
  return products.find(p => p.id === id)
}
