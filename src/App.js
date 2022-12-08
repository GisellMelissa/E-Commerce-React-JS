import './App.css';
import { Home } from './ui/views/home';
import { Products } from './ui/views/products';
import { ProductDetails } from './ui/views/product-details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './ui/components/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
			<Routes>
				<Route exact path='/' element={<Home />}/>
        <Route exact path='/catalogo' element={<Products />}/>
        <Route exact path='/product/:id' element={<ProductDetails />}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
