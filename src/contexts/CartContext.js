import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [productosCarrito, setProductosCarrito] = useState([]);

    //verifica si el producto ya existe
    const isInCart = (id) => {
        const productExists = productosCarrito.some((elemento) => elemento.id === id);
        return productExists;
    }

    const addProduct = (item, quantity) => {
        const productosCarritoCopy = [...productosCarrito];
        //si el producto ya existe, modifico la propiedad quantity de ese objeto
        if (isInCart(item.id)){
            const posProduct = productosCarritoCopy.findIndex((elemento)=>elemento.id === item.id);
            productosCarritoCopy[posProduct].quantity = productosCarritoCopy[posProduct].quantity + quantity;
            setProductosCarrito(productosCarritoCopy);
        } else{
            //sino agrego el nuevo producto al array
            const newProduct = {
                ...item,
                quantity: quantity,
                quantityPrice:quantity*item.price,
            };

            productosCarritoCopy.push(newProduct);
            setProductosCarrito(productosCarritoCopy);
        }
    }
    return (
        <CartContext.Provider value={{ productosCarrito, addProduct }}>
            {children}
        </CartContext.Provider>
    )


}