import { useEffect, useState } from "react"; 
import { ItemList } from "../ItemList/itemList";
import { useParams } from "react-router-dom";
import { bd } from "../../Utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from 'react';

export const ItemListContainer = ()=>{
    console.log(useParams()); // {categoryName:""}
    // const categoryName = useParams().categoryName;
    const {categoryId} = useParams();
    // console.log(categoryId);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    // const promesa = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve(arregloProductos);
    //     }, 2000);
    // })

    useEffect(()=>{
        // promesa.then((response)=>{
        //     if(categoryId){
        //         //vamos a filtrar por categoria
        //         const productsFiltered = response.filter(elm=>elm.categoria === categoryId);
        //         setProductos(productsFiltered);
        //     } else{
        //         //mostrar todos los productos
        //         setProductos(response)
        //     }
        // })
        const queryRef = categoryId ? query(collection(bd,"Productos"), where("category","==",categoryId)) : collection(bd,"Productos");
        getDocs(queryRef).then((response)=>{
            const results = response.docs;
            const docs = results.map(doc=>{
                return{
                    ...doc.data(),
                    id:doc.id
                }
            });
            // console.log(docs);
            setProductos(docs);
            setLoading(false);
        });
    },[categoryId])

    // console.log("productos", productos);
    return(
        <div className="item-list-container">
            <p>item list container</p>
            {
                loading ?
                <p>cargando</p>
                :
                <ItemList items={productos} otraPropiedad={123}/>
            }
        </div>
    )
}