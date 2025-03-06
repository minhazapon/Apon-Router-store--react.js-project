import { useState } from "react"
import Cart from "./Cart"
import Items from "./Items"

function Shop() {

    const [cart, setCart] = useState([])

    const addCart = (allProducts) => {
        setCart([...Cart, allProducts])
    }

    return (
        <div>
            <Items addCart={addCart}></Items>
            <Cart cart={cart}></Cart>
        </div>
    )
}

export default Shop
