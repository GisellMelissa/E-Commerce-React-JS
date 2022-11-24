import './App.css';
import { Home } from './ui/views/home';
import { Products } from './ui/views/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './ui/components/navbar/navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
        <Route path='/ejemplo' element={<Products />}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
