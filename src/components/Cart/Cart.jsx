import React, { useContext } from "react"
import { CarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ProductCart from '../ProductCart/ProductCart'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>El carrito se encuentra vacío</h2>
                <Link to="/">Volver a la tienda</Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => (
                <ProductCart key={producto.id} {...producto} />
            ))}
            <p>TOTAL: ${total}</p>
            <p>Total de productos: {cantidadTotal}</p>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to="/checkout"><button>Finalizar Compra</button></Link>
        </div>
    )
}

export default Cart
