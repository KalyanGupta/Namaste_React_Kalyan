import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{
    // debugger;
    const [showIndex, setShowIndex] = useState(null);
    console.log("RestaurantMenu");
    const Params = useParams();
    const resInfo = useRestaurantMenu(Params.resId);
    console.log("Test order");

    const setShowIndexProps = (index) => {
        if(index === showIndex)
        {
          setShowIndex(null);
        }
        else{
          setShowIndex(index);
        }
      }

    if (resInfo === null) 
        return <Shimmer></Shimmer>

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    console.log(categories)
    
    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>

            <p className="font-bold text-lg">
                {cuisines.join(", ")} {costForTwoMessage}
            </p>

            {/* Categories Accordions */}
            
            {
                
                categories.map((category, index)=> 
                (
                    // Controlled component
                    <RestaurantCategory key={category?.card?.card.title} 
                    
                        data={category?.card?.card} 
                        arrow={index === showIndex? "⬆️" : "⬇️"}
                        setShowIndex={()=> setShowIndexProps(index)}
                    >

                    </RestaurantCategory>
                ))
            }

            
        </div>
    )
}
export default RestaurantMenu;