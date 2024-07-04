import "./App.css";
import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

//Routes
import Landing from "./screens/Landing";
import About from "./screens/About";
import Basket from "./screens/Basket";
import CustomQuotes from "./screens/CustomQuotes";
import Product from "./screens/Product";
import ShoppingCart from "./screens/ShoppingCart";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="About" element={<About />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="CustomQuotes" element={<CustomQuotes />} />
          <Route path="Product" element={<Product />} />
          <Route path="ShoppingCart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
