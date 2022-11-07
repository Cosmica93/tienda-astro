import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { arregloProductos } from "../../database/database";
import { ItemList } from "../ItemList/itemList";

export const ItemListContainer = ()=>{
    console.log(useParams()); // {categoryName:""}
    // const categoryName = useParams().categoryName;
    const {categoryId} = useParams();
    // console.log(categoryName);
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then((response)=>{
            if(categoryId){
                //vamos a filtrar por categoria
                const productsFiltered = response.filter(elm=>elm.categoria === categoryId);
                setProductos(productsFiltered);
            } else{
                //mostrar todos los productos
                setProductos(response)
            }
        })
    },[categoryId])

    console.log("productos", productos);
    return(
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={productos} otraPropiedad={123}/>
        </div>
    )
}