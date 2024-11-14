import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Category } from "./Pages/Category";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footer/Footer";
import HeaderSend from "./Components/HeaderSend/HeaderSend";

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <HeaderSend />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route
            path="/enterizos"
            element={<Category category="enterizos" />}
          />
          <Route
            path="/legginsyfaldas"
            element={<Category category="legginsyfaldas" />}
          />
          <Route
            path="/bodysytops"
            element={<Category category="bodysytops" />}
          />
          <Route path="/sets" element={<Category category="sets" />} />
          <Route
            path="/accesorios"
            element={<Category category="accesorios" />}
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
