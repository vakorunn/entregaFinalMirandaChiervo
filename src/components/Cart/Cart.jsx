import { useContext } from "react"
import { CarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { ProductCart } from "../ProductCart/ProductCart.jsx"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)
    
    if (cantidadTotal === 0) {
        return (
            <>
                <h2>El carrito se encuentra vacio</h2>
                <Link to="/"> Volver a la tienda </Link>
            </>
        )
    } else {
        <div>
            {carrito.map(producto => <ProductCart key={producto.id} {...producto}/>)}
            <p>TOTAL:${total}</p>
            <p>Total de productos:{cantidadTotal}</p>
            <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <button> <Link to="/checkout"> Finalizar Compra </Link> </button>
        </div>
    }
}

export default Cart