"use client"

import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

interface CartProduct extends Product {
    quantity: number;
}

interface ICartContext {
    products: CartProduct[]
    cartTotalPrice: number
    cartBasePrice: number
    cartTotalDiscount: number
    addProductsToCart: (product: CartProduct) => void
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    addProductsToCart: () => {}
})

const CartProvider = ({children}: {children: ReactNode}) => {
    const [products, setProducts] = useState<CartProduct[]>([])

    const addProductsToCart = (products: CartProduct) => {
        setProducts((prev) => [...prev, products])
    }

    return (
        <CartContext.Provider 
            value={{
                products,
                addProductsToCart,
                cartTotalPrice: 0,
                cartBasePrice: 0,
                cartTotalDiscount: 0
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider