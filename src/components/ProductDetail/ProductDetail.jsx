import React from 'react'

import CountProduct from '../CountProduct/CountProduct'
import { useState } from 'react'
import { CarritoContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ProductDetail = (id, idCategory, img, price, productName, stock) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)
    const {agregarProducto} = useContext(CarritoContext)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = {id, productName, price}
        agregarProducto(item, cantidad)
    }

    return(
        <div className="product-container">
            <h2>Nombre:{productName}</h2>
            <p>Precio:{price}</p>
            <p>ID del Producto:{id}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quaerat!</p>
            <img src={img} alt={productName} />
            {
                agregarCantidad > 0 ? (<Link to='/cart'> Finalizar Compra </Link>) : (<CountProduct inicio={1} stock={stock} funcionAgregar={manejadorCantidad}  />)
            }
        </div>
    )
}

export default ProductDetail