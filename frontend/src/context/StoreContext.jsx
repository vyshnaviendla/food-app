import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
const [cartItems,setCartItems]=useState({});
const assToCart=(itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))//if item is added first time to cart new entry for food
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))//if product is already available
    }
}

const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))//decrease value
}

useEffect(()=>{
    console.log(cartItems);
},[cartItems])


    const contextValue = {
        //object any element can be accesed using nanem
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart


    }

    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )


}
export default StoreContextProvider;