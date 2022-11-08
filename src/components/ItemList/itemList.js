import { Item } from "../Item/Item";
import React from 'react';


export const ItemList = ({items, otraPropiedad})=>{
    // console.log(props);
    // console.log(items);
    // const {items, otraPropiedad} = props;

    return(
        <div className="estilos-listado">
            <div>item list</div>
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
    )
}