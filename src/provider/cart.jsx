import React, { createContext, useState, useEffect } from 'react'
import { addItemToCart, removeItemFromCart, clearItemFromCart, cartItemCount, cartItemTotal } from './cart.utils'

export const CartContext =createContext({
    hidden: true,
    cartItems: [],
    cartItemsCount: 0,
    total: 0,
    toggleCartHidden: ()=>{},
    addItem: ()=>{},
    removeItem: ()=>{},
    clearItem: ()=>{}
})

const CartProvider= ({ children }) => {
    const [hidden, setHidden]= useState(true)
    const [cartItems, setCartItems]= useState([])
    const [cartItemsCount, setCartItemsCount]= useState(0)
    const [total, setCartTotal]= useState(0)

    const toggleCartHidden= ()=>setHidden(!hidden)
    const addItem= (item) => setCartItems(addItemToCart(cartItems, item))
    const removeItem= (item)=> setCartItems(removeItemFromCart(cartItems, item))
    const clearItem= (item)=> setCartItems(clearItemFromCart(cartItems, item))

    useEffect(() =>
        {
            setCartItemsCount(cartItemCount(cartItems))
            setCartTotal(cartItemTotal(cartItems))
        }, [cartItems])

    return (
    <CartContext.Provider value={{
        hidden,
        cartItems,
        cartItemsCount,
        total,
        toggleCartHidden,
        addItem,
        removeItem,
        clearItem
        }}
    >
        {children}
    </CartContext.Provider>)
}

export default CartProvider