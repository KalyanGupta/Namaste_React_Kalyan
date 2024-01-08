import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    // debugger;
    console.log("RestaurantMenu");
    const Params = useParams();
    //console.log(Params.resId)
    const resInfo = useRestaurantMenu(Params.resId);
    console.log("Testt order");

    if (resInfo === null) 
        return <Shimmer></Shimmer>

    //console.log(resInfo)
    //console.log(resInfo?.data)
    //console.log(resInfo?.data?.cards[0]?.card?.card?.info?.name)

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return  (
        <div className="Menu">
            <h1>{name}</h1>

            <p>
                {cuisines.join(", ")} {costForTwoMessage}
            </p>

            <h2>Menu</h2>
            <ul>
                {itemCards.map((items)=>(
                    <li key={items.card.info.id}>
                        {items.card.info.name}
                        <h1>

                        </h1>
                        RS {items.card.info.price/100}
                        <h1>

                        </h1>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;