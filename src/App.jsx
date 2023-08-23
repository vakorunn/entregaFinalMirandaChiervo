import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from "./context/CartContext"

import Navbar from "./components/Navbar/Navbar"
import ProductListContainer from "./components/ProductListContainer/ProductListContainer"
import Cart from "./components/Cart/Cart"
import CheckOut from "./components/Checkout/Checkout"
import ProductDetailContainer from "./components/ProductDetail/ProductDetail"

const App = () => {
  document.title = 'Belleza Oculta'
  return (
    <>
    
      <BrowserRouter>
        <CarritoProvider>
          <Navbar>
            <Routes>
              <Route path="/" element={<ProductListContainer />} />
              <Route path="/categoria/:idCategoria" element={ProductListContainer} />
              <Route path="/product/:idProduct" element={<ProductDetailContainer/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<CheckOut/>} /> 
            </Routes>
          </Navbar>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App