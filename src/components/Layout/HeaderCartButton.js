import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/Cart-context";

const HeaderCartButton =(props)=>{

    const cartCntx=useContext(CartContext)
    console.log(cartCntx.items)
    let quantity=0
    cartCntx.items.forEach(item=>{
        quantity= quantity + Number(item.quantity)
    })
    
    return (
        <button className={classes.button} onClick={props.onClick}>
        <div className={classes.icon}>
            <CartIcon/>
        </div>
        <div>
            Your Cart
        </div>
        <div className={classes.badge}>
            {quantity}
        </div>
    </button>
    )
}


export default HeaderCartButton;