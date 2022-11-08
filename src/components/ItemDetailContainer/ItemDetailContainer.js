import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {bd} from "../../Utils/firebase";
import {doc, getDoc} from "firebase/firestore" ;
import React from 'react';

// /item/id
export const ItemDetailContainer = ()=>{
    const {id} = useParams(); //{id:"8"}
    const [itemProduct, setItemProduct] = useState({});

    // const promesa = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve(arregloProductos);
    //     }, 2000);
    // })

    useEffect(()=>{
        const getProducto = async()=>{
            // const productos = await promesa;
            // // console.log('productos', productos);
            // const producto = productos.find(elemento=>elemento.id === parseInt(id));
            // // console.log("producto", producto)
            // setItemProduct(producto);

            //creamos la referencia del documento que vamos a consultar
            const queryRef = doc(bd,"Productos",id)
            //hacemos la consulta
            const response = await getDoc(queryRef);
            console.log(response)
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            // console.log(newDoc)
            setItemProduct(newDoc)
        }
        getProducto();
    },[id])

    return(
        <div>
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={itemProduct}/>
        </div>
    )
}