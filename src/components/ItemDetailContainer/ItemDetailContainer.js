import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getProductById} from "../../database/getProductById";
import {Layout} from "../Layout/Layout";

export const ItemDetailContainer = () => {

  const {itemId} = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);
    setProduct(null);

    getProductById(itemId)
      .then((product) => {
        if (product) {
          setProduct(product)
        }
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
      })
  }, [])
  return (
    <Layout>
      {loading && <p>Cargando...</p>}
      {product &&
        <>
          <h1>Detalle del producto</h1>
          {product &&
            <div>
              {product?.title}
            </div>
          }
        </>
      }
    </Layout>
  )
}