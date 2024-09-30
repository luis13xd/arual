
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Category } from './Pages/Category';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';

import banner1 from './Components/Assets/bannerdesc.png';
import banner2 from './Components/Assets/bannerdesc2.png';
import banner3 from './Components/Assets/bannerdesc3.png';
import banner4 from './Components/Assets/bannerdesc4.png';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/hombre' element={<Category  banners={[banner1, banner2, banner3, banner4]} category="men"/>} />
          <Route path='/mujer' element={<Category banners={[banner1, banner2, banner3, banner4]} category="women"/>} />
          <Route path='/niños' element={<Category banners={[banner1, banner2, banner3, banner4]} category="kid"/>} />

          <Route path="/product" element={<Product/>} >
            <Route path=':productId' element={<Product/>} />
          </Route>

          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />

        </Routes>

        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
