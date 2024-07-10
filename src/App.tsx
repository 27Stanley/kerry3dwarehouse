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

//User Routes
//profile, account, logout
import Account from "./screensUser/Account";
import Logout from "./screensUser/Logout";
import Profile from "./screensUser/Profile";



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

          <Route path="Account" element={<Account/>}/>
          <Route path="Profile" element={<Profile/>}/>
          <Route path="Logout" element={<Logout/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
