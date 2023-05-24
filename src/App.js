import React,{useState} from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Menu from "../src/Components/Layout/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../src/Components/About/About";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
    <Router>
          <Menu />
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
    
      </>
  );
}

export default App;
