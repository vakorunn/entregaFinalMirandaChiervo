import { useContext } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CartContext"
import './CartWidget.css'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div>
      <Link>
        <img className="cartImg" src="../../img/carrito-de-compras.png" alt="carrito de compras" />
        {cantidadTotal > 0 && <strong> {cantidadTotal} </strong>}
      </Link>
    </div>
  )
}

export default CartWidget