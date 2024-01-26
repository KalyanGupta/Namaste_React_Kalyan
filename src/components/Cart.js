import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { UseDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import CartList from "./CartList";

const Cart = () =>{
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <div className="font-bold">
                Cart
            </div>

            <div className=" w-6/12 m-auto">
                {/* <ItemsList items={cartItems}></ItemsList> */}
                <CartList items={cartItems}></CartList>
            </div>

            {cartItems.length >= 1 ?
                 <div>
                    <button className="font-bold bg-red-400 rounded-lg text-white"
                    onClick={handleClearCart}>
                    Clear Cart</button>
                </div> :

                <div className="font-bold m-4 p-4">
                    <h1>Please add items to your cart and come here😄</h1>
                </div>

            }

            {
                cartItems.length >= 1 && <Link  to="/checkout"> 
                    <button className="font-bold bg-green-500 text-white rounded-lg m-10">Checkout</button> 
                </Link>
            }  

        </div>
        
    )
}
export default Cart;