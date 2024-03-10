import { useSelector } from "react-redux"
import ItemList from "./ItemList"
import { useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    
    return (
        <>
            <div className="text-center m-4 p-4">
                <div className="text-xl font-bold">Cart</div>
                <div className="w-6/12 m-auto">
                    <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                    { cartItems.length === 0 && <h1>Cart items are empty</h1> }
                        <ItemList item={cartItems}/>
                </div>
            </div>
            
        </>
    )
}

export default Cart