import { CDN_URL, LOGO_URL } from "../utils/constants"
const ItemsList = (props) =>{
    const {items} = props
   // console.log(items)
    return(
        <div>
           {
            // items.map((item)=> (item.card.info.name))
            items.map((item)=> (
                <div 
                  key={item.card.info.id}
                  className="m-2 p-2  border-gray-400 border-b-2 text-left flex justify-between"
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
                            font-bold">
                            Add +
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
export default ItemsList;