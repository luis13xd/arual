
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Category } from './Pages/Category';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/hombre' element={<Category categories="hombre"/>} />
          <Route path='/mujer' element={<Category categories="mujer"/>} />
          <Route path='/niños' element={<Category categories="niños"/>} />

          <Route path='/product' element={<Product/>} >
            <Route path=':productId' element={<Product/>} />
          </Route>

          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
