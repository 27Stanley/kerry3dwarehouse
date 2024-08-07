import "./App.css";
import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

//Routes
import Landing from "./screensClient/Landing";
import About from "./screensClient/About";
import Basket from "./screensClient/Basket";
import CustomQuotes from "./screensClient/CustomQuotes";
import Catalogue from "./screensClient/Catalogue";
import ShoppingCart from "./screensClient/ShoppingCart";
import EachProduct from "./screensClient/EachProduct";
import Login from "./screensClient/Login";

//User Routes
import Account from "./screensUser/Account";
import Logout from "./screensUser/Logout";
import Profile from "./screensUser/Profile";

//Admin Routes
import AdminDashboard from "./screensAdmin/Dashboard";

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
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="Login" element={<Login />} />

          <Route path="/Catalogue/:productId" element={<EachProduct />} />

          <Route path="/ShoppingCart" element={<ShoppingCart />} />

          <Route path="Account" element={<Account />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Logout" element={<Logout />} />

          <Route path="adminDashboardSuper" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
