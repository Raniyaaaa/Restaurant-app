import React, { useState } from "react";
import CartContext from "./Cart-context";

const CartProvider=(props)=>{
    const [items,updateitems]=useState([])
    const addItemToCartHandler=(item)=>{
        //updateitems([...items,item])
        updateitems((prevItems)=>{
            const existingIndex=prevItems.findIndex((prevItem)=>prevItem.name===item.name)
            const existingItem=prevItems[existingIndex]
            let updatedItems;
            if(existingItem){
                const updatedItem={...existingItem,quantity:item.quantity}
                updatedItems=[...prevItems]
                updatedItems[existingIndex]=updatedItem;
            }
            else{
                updatedItems = [...prevItems, { ...item, quantity: item.quantity }];
            }
            return updatedItems;
        })
    }

    const removeItemFromCartHandler=()=>{

    }

    const cartContext={
        items:items,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
        }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;