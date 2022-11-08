import { ItemCount } from '../ItemCount/ItemCount';
import {useContext} from "react";
import { CartContext } from '../../contexts/CartContext';
import React from 'react';
import { Item } from '../Item/Item';

export const ItemDetail = ({Producto})=>{
    const {addProduct} = useContext(CartContext);

    const agregarProducto = (quantity)=>{
        // console.log(quantity);
        addProduct(Producto,quantity);
    }

    return(
        <div>
            <p>item detail</p>
            <div>
                <img src={Item.pictureUrl} alt={Item.title}/>
            </div>
            <div>
                <h4>{Item.title}</h4>
                <h5>$ {Item.price}</h5>
            </div>
            <ItemCount stock={5} initial={1} onAdd={agregarProducto}/>
        </div>
    )
}