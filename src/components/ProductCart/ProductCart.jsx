import { useContext } from "react";
import { CarritoContext } from "../../context/CartContext"

const ProductCart = (product, quantity) => {
    const { eliminarProducto } = useContext(CarritoContext)
    return (
        <div>
            <h3 className="product-cart-name">{product.nombre}</h3>
            <p className="product-cart-quantity">Cantidad:{quantity}</p>
            <p className="product-cart-price">Precio:{product.precio}</p>
            <button className="product-cart-delete-btn" onClick={() => eliminarProducto(product.id)}> Eliminar </button>
            <hr className="separator" />
        </div>
    )
}

export default ProductCart
