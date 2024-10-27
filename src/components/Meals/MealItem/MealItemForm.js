import React, { useContext, useRef } from "react";
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"
import CartContext from "../../../store/Cart-context";
const MealItemForm=(props)=>{
    const cartcntx=useContext(CartContext)
    const quantityInputRef=useRef();
    const addItemToCart=(event)=>{
        event.preventDefault();
        const quantity = +quantityInputRef.current.value;
        cartcntx.addItem({...props.item, quantity:quantity})
    }
    return(
        <div className={classes.form}>
            <Input label="Amount" 
                ref={quantityInputRef}
                input={{
                id:"amount_" +props.id,
                type:"number",
                min:1,
                max:5,
                step:1,
                defaultValue:1,
            }}/>
            <button onClick={addItemToCart}>+ Add</button>
        </div>
    )
}

export default MealItemForm;