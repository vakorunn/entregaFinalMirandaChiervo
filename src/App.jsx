import React from 'react'

import Navbar from './components/Navbar/Navbar'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CartContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ProductListContainer />}></Route>
            <Route path='/categoria/:idCategoria' element={<ProductListContainer />}></Route>
            <Route path='/product/:idProducto' element={<ProductDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App