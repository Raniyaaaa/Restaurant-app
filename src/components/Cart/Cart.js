import React from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
const Cart=(props)=>{
    const CartItems= (<ul className={classes["cart-items"]}>
        {[{id:"m1",name:"sushi",amount:2,price:12.99}]
        .map((item)=>
        (<li>{item.name}</li>
    ))}
    </ul>
    );
    return(
        <Modal onCloseCart={props.onCloseCart}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount </span>
                <span>35.90</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )

}

export default Cart;