import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {getProducts} from "../../database/getProducts";
import {ProductsList} from "../ProductsList/ProductsList";
import {Layout} from "../Layout/Layout";

export const ItemListContainer = () => {

  // Se obtiene el parametro categoryId de la url
  const params = useParams();

  // Se inicializa el array de productos con su estado inicial como null
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true)
    setProducts(null)
    // Obtenemos los productos
    getProducts()
      .then((products) => {
        // Verificamos si existe el parametro categoryId
        if (params?.categoryId) {
          // Filtramos el array de productos por el id de la categoria obtenida por el parametro categoryId de la url
          const productsFiltered = products.filter(product => product.category === params?.categoryId);
          // Guardamos el array de productos filtrados por la categoria actual
          setProducts(productsFiltered);
          setLoading(false)
        } else {
          // Guardamos el array de productos
          setProducts(products);
          setLoading(false)
        }
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
      })


  }, [params])

  return (
    <Layout>
      {loading && <p>Cargando...</p>}

      {products &&
        <ProductsList products={products}/>
      }
    </Layout>
  )
}