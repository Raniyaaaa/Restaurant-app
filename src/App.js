import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {

  const [CartIsVisilble, setCartIsVisible]=useState(false)

  const showCartHandler=()=>{
    setCartIsVisible(true);
  }

  const hideCartHandler=()=>{
    setCartIsVisible(false)
  }
  return (
    <CartProvider>
      {CartIsVisilble && <Cart  onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}
export default App;
