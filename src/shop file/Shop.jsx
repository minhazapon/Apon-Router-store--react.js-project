import { useEffect, useState } from "react"
import Cart from "./Cart"
import Items from "./Items"

function Shop() {

    const [product, setProduct] = useState([])

    const getCart = () => {
        const saveCart = localStorage.getItem("cart")
        return saveCart ? JSON.parse(saveCart) : []
    }

    const [cart, setCart] = useState(getCart())

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addCart = (allProducts) => {
        setCart([...cart, allProducts])
    }

    const handleClear = () => {
        setCart("")
    }

    return (
        <div>
            <Items addCart={addCart} product={product} setProduct={setProduct}></Items>
            <Cart handleClear={handleClear} cart={cart}></Cart>
        </div>
    )
}

export default Shop
