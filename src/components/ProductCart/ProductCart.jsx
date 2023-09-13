import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CartContext"

const ProductCart = ({ id, productName, quantity, price }) => {
    console.log("id:", id);
    console.log("productName:", productName);
    console.log("quantity:", quantity);
    console.log("price", price);
    // ...otros logs
    return (
        <div>
            <h3 className="product-cart-name">{productName}</h3>
            <p className="product-cart-quantity">Cantidad:{quantity}</p>
            <p className="product-cart-price">Precio:{price}</p>
            <button className="product-cart-delete-btn" onClick={() => eliminarProducto(id)}> Eliminar </button>
            <hr className="separator" />
        </div>
    )
}


export default ProductCart
