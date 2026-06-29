
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Home/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from "./context/CartContext";
import Cart from './pages/Cart'
import { Toaster } from "react-hot-toast";
import { WishProvider } from './context/wishContext'
import Wish from './pages/Wish'
import Order from './components/Home/Order'
import { OrderProvider } from './context/OrderContext'
import Orders from './pages/Orders'
function App() {

  return (
    <>
      <CartProvider>
        <WishProvider>
          <OrderProvider>
          <Toaster position="top-right" />

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Wish" element={<Wish />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Orders" element={<Orders />} />
          </Routes>
          </OrderProvider>
        </WishProvider>
      </CartProvider>


    </>
  )
}

export default App
