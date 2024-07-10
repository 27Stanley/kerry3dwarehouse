import "./App.css";
import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

//Routes
import Landing from "./screens/Landing";
import About from "./screens/About";
import Basket from "./screens/Basket";
import CustomQuotes from "./screens/CustomQuotes";
import Products from "./screens/Products";
import ShoppingCart from "./screens/ShoppingCart";
import EachProduct from "./screens/EachProduct";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/CustomQuotes" element={<CustomQuotes />} />
          <Route path="/Products" element={<Products />} />

          <Route path="/Products/:productId" element = {<EachProduct />} />

          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
