import React from "react";
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"
const MealItemForm=()=>{
    return(
        <div className={classes.form}>
            <Input label="Amount" input={{
                id:"amount",
                type:"number",
                min:1,
                max:5,
                step:1,
                defaultValue:1,
            }}/>
            <button>+ Add</button>
        </div>
    )
}

export default MealItemForm;