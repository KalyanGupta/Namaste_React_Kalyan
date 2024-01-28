import { CDN_URL, LOGO_URL } from "../utils/constants"
//import { addItem } from "../utils/cartSlice"
import {removeItem} from "../utils/cartSlice";
import {useDispatch} from 'react-redux';
const CartList = (props) =>{
    const {items} = props
   // console.log(items)
   const dispatch = useDispatch();

   const handleRemoveItem = (item) =>{
    dispatch(removeItem(item));
   }
    return(
        <div>
           {
            // items.map((item)=> (item.card.info.name))
            items.map((item)=> (
                <div 
                  key={item.card.info.id}
                  className="m-2 p-2  border-gray-400 border-b-2 text-left flex justify-between"
                  data-testid= "cartItems"
                >       
                    <div className="w-9/12">
                        <div className="py-2">
                            <span> {item.card.info.name} </span>

                            <span>
                                - ₹ 
                                {item.card.info.price
                                ? item.card.info.price/100: 
                                item.card.info.defaultPrice/100 }
                            </span>
                        </div>

                         <p className="text-xs">
                            {item.card.info.description
                            ? item.card.info.description: 
                            "Welcome to our Restaurant"}
                        </p>
                    </div>

                    <div className="w-3/12 pl-4">

                        <button 
                            className=" bg-black text-white shadow-lg absolute mx-1 rounded-lg
                            font-bold"
                            onClick={() => handleRemoveItem(item)}>
                            remove -
                        </button>



                        <img 
                            className="rounded-lg"
                            src={item.card.info.imageId
                                ? CDN_URL + item.card.info.imageId
                                : LOGO_URL} alt="item-img" 
                            // className="w-14 pr-4"
                        />
                       
                    </div>   
                </div>
            )
            )
           }

        </div>
    )
}
export default CartList;