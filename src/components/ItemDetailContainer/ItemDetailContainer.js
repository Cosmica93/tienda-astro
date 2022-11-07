import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from "../../baseDatos/baseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const [item, setItem] =useState({});

    const getItem =(id)=>{
      return new Promise((resolve, reject) => {
        const item = arregloProductos.find(item=>item.id === parse(id));
        resolve(item)
      })
    }

    useEffect(()=>{
      const getProducto = async()=>{
          const productos = await promesa;
          console.log('productos', productos);
          const producto = productos.find(elemento=>elemento.id === parseInt(id));
          console.log("producto", producto)
          setItemProduct(producto);
      }
      getProducto();
  },[id])

  return(
      <div className="item-detail-container">
          <p style={{width:"100%", color: "white"}}>item detail container</p>
          <ItemDetail item={itemProduct}/>
      </div>
  )
}