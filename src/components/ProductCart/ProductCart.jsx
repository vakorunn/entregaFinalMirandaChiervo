import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CartContext"

const ProductCart = ({producto}) => {
    const { eliminarProducto } = useContext(CarritoContext)
    return (
        <div>
            <h3 className="product-cart-name">{producto.item.productName}</h3>
            <p className="product-cart-quantity">Cantidad:{producto.item.quantity}</p>
            <p className="product-cart-price">Precio:{producto.item.price}</p>
            <button className="product-cart-delete-btn" onClick={() => eliminarProducto(producto.item.id)}> Eliminar </button>
            <hr className="separator" />
        </div>
    )
}

export default ProductCart
