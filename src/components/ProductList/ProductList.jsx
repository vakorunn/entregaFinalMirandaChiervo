import React from 'react'

import Product from '../Product/Product'
import './ProductList.css'

const ProductList = ({products}) => {
  return (
    <>
      <div className="product-container">
        {
          products.map(product => <Product key={product.id} {...product} />)
        }
      </div>
    </>
  )
}

export default ProductList