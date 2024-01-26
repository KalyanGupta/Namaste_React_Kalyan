import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useSelector } from "react-redux";
import {clearCart} from '../utils/cartSlice';
const Checkout = () =>{
    
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);
    
    const sum = cartItems.reduce((total, item) => {
        //const itemPrice = parseInt(item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice/100)
        const itemPrice = parseFloat(item.card.info.price/100) || parseFloat(item.card.info.defaultPrice/100) || 0;
        console.log("Item Price:", itemPrice);
        console.log("Total So Far:", total);
        return total + itemPrice;
    }, 0)

    const names = cartItems.map((item) => {        
        return item.card.info.name
    })

    //console.log(names);



    useEffect(() => {
        // This effect will run when the component mounts
    
        // Show a message to the user for 5 seconds
        const messageTimeout = setTimeout(() => {
          // Perform any cleanup or additional actions here
          //console.log('Ordered items displayed for 7 seconds');
    
          // After 5 seconds, clear the cart
          dispatch(clearCart());
        }, 7000);
    
        // The cleanup function will clear the timeout if the component unmounts
        return () => clearTimeout(messageTimeout);
      }, []); // The empty dependency array ensures that the effect runs only once

    
    
    return(
        <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">

            {cartItems.length > 0 &&
            <>
            <h1 className="text-3xl font-bold mb-4">Your Order Details</h1>

            <div className="bg-white p-4 shadow-md rounded-md w-96 mb-4">
                <h2 className="text-xl font-bold mb-2">Ordered Items:</h2>
                <ul className="list-disc pl-4">
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>

            <div className="bg-white p-4 shadow-md rounded-md w-96">
                <h2 className="text-xl font-bold mb-2">Payment Information:</h2>
                <p className="text-lg">
                    Your order has been successfully placed. Please pay the sum of {sum} at your doorstep.
                </p>
            </div>
            </>
            }
            
            {cartItems.length === 0 && 
                <div className="bg-white p-4 shadow-md rounded-md w-96">
                    <h2 className="text-xl font-bold mb-2">Thanks for Ordering with Us!</h2>
                        <p className="text-lg">
                            Your cart is empty. Start adding items to place an order.
                        </p>
                </div> 
            }
           
        </div>
    )
}
export default Checkout;