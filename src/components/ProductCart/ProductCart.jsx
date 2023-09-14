import React from "react";

const ProductCart = ({item, cantidad}) => {
    return (
        <div>
            <h3 className="product-cart-name">{item.productName}</h3>
            <p className="product-cart-quantity">Cantidad:{cantidad}</p>
            <p className="product-cart-price">Precio:{item.price}</p>
            <button className="product-cart-delete-btn" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
            <hr className="separator" />
        </div>
    )
}


export default ProductCart
