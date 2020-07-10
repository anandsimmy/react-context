import { createContext } from 'react'

const CartContext= createContext({
    hidden: true,
    toggleCartHidden: ()=>{}
})

export default CartContext