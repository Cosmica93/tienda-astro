import React from "react";
import {Link} from "react-router-dom";

export const ProductsList = ({products}) => {

  return (
    <div>
      <h1>Listado de productos</h1>
      {products?.length === 0
        ? (
          <div>
            No se encontraron productos
          </div>
        ) : (
          <ul>
            {products?.map((product) => {
              return (
                <li key={product.id}>
                  <Link to={`/item/${product.id}`}>
                    <p>{product?.title}</p>
                  </Link>
                  <Link to={`/category/${product.category}`}>
                    <p>{product?.category}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        )
      }
    </div>
  )
}