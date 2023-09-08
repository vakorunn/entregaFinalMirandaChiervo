import React from 'react'

import Navbar from './components/Navbar/Navbar'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Product from './components/Product/Product'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path='/' element={<ProductListContainer />}></Route>
            <Route path='/categoria/:idCategoria' element={<ProductListContainer />}></Route>
            <Route path='/product/:idProducto' element={<ProductDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  )
}

export default App