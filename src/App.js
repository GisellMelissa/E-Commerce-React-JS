import './App.css';
import { Home } from './ui/views/home';
import { Products } from './ui/views/products';
import { ProductDetails } from './ui/views/product-details';
import { BrowserRouter, Route, Routes, UNSAFE_NavigationContext } from 'react-router-dom';
import { Navbar } from './ui/components/navbar/navbar';
import { Cart } from './ui/views/cart';
import CartContext from './ui/components/cart-context/cart-context';

function App() {
  return (
    <CartContext.Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/catalogo' element={<Products />}/>
          <Route exact path='/product/:id' element={<ProductDetails />}/>
          <Route exact path='/category/:category' element={<Products />}/>
          <Route exact path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
