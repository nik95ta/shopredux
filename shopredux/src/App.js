import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MaiHeader from "./components/Layout/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import Products from "./components/Shop/Products";
import CartList from "./components/Cart/CartItem";
import Cart from "./components/Cart/Cart";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <div className="App">
      <MaiHeader />
      {showCart && <Cart />}
      <Products />
    </div>
  );
}

export default App;
