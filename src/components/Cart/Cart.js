import React, { useContext } from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";
const Cart=(props)=>{
    const CartCtx=useContext(CartContext)
    const CartItems= (<ul className={classes["cart-items"]}>
        {CartCtx.items.map((item)=>(
            <CartItem key={item.id} name={item.name} price={item.price} amount={item.quantity}/>
        ))}
    </ul>
    );

    let totalAmount=0;
    CartCtx.items.map((item)=>{
        totalAmount=totalAmount+ item.price*item.quantity;
    })
    return(
        <Modal onCloseCart={props.onCloseCart}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount </span>
                <span>{totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )

}

export default Cart;