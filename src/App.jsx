import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer";
import LogInPopup from "./components/logIn popup/LogInPopup";

function App() {
  // State to control the visibility of the login popup
  // This state is used to toggle the login popup on and off
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LogInPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="w-full h-screen mx-auto scroll-smooth">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
