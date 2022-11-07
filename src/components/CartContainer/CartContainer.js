import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"


export const CartContainer = ()=>{
    const value = useContext(CartContext);
    const  {productosCarrito} = value;
    return(
        <div>
            <p>página del carrito</p>
            <div>
                {
                    productosCarrito.map((producto)=>(
                        <div>
                            <h3>{producto.title}</h3>
                            <p>{producto.price}</p>
                            <p>{producto.quantity}</p>
                            <p>Precio total {producto.quantityPrice}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}