import { useState } from "react"
import Cart from "./Cart"
import Items from "./Items"

function Shop() {

    const [cart, setCart] = useState([])

    const addCart = (allProducts) => {

        setItem([...Cart, allProducts])

    }

    return (
        <div>
            <Items></Items>
            <Cart></Cart>
        </div>
    )
}

export default Shop
