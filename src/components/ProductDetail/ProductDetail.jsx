import React from 'react'

import CountProduct from '../CountProduct/CountProduct'
import { useState } from 'react'
import { CarritoContext } from '../../context/CartContext'
import { useContext } from 'react'

const ProductDetail = () => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)
    const {agregarProducto} = useContext(CarritoContext)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = {id, nombre, precio}
        agregarProducto(item, cantidad)
    }

    return(
        <div className="product-container">
            <h2>Nombre:{nombre}</h2>
            <p>Precio:{precio}</p>
            <p>ID del Producto:{id}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quaerat!</p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to='/cart'> Finalizar Compra </Link>) : (<CountProduct inicio={1} stock={stock} funcionAgregar={manejadorCantidad}  />)
            }
        </div>
    )
}

export default ProductDetail