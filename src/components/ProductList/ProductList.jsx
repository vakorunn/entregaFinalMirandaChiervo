import React from 'react'

import Product from '../Product/Product'

const ProductList = ({productos}) => {
  return (
    <>
      <div className="product-container">
        {
          productos.map(product => <Product key={product.id} {...product} />)
        }
      </div>
    </>
  )
}

export default ProductList