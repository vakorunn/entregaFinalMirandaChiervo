import React from 'react'
import { Link } from "react-router-dom"
import './Product.css'

const Product = ({id,nombre,precio,img,stock}) => {
  return (
    <div className="product-card">
        <img className="product-img" src={img} alt={nombre} />
        <h2 className="product-name">{nombre}</h2>
        <p className="product-price">${precio}</p>
        <p className="product-quantity">Disponible:{stock}</p>
        <button className="show-more-info"> <Link to={`/product/${id}`}> Mas info </Link> </button>
    </div>
  )
}

export default Product