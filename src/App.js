import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import HeaderCartButton from "./components/Layout/HeaderCartButton";
function App() {

  const [CartIsVisilble, setCartIsVisible]=useState(false)

  const showCartHandler=()=>{
    setCartIsVisible(true);
  }

  const hideCartHandler=()=>{
    setCartIsVisible(false)
  }
  return (
    <React.Fragment>
      {CartIsVisilble && <Cart  onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}
export default App;
