import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    const Params = useParams();
    console.log(Params.resId)

    const fetchMenu = async() =>{
        //const SwiggyURL =`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5879534&lng=73.7372559&restaurantId=${Params.resId}&catalog_qa=undefined&submitAction=ENTER`;
        const SwiggyURL =`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5879534&lng=73.7372559&restaurantId=${Params.resId}&catalog_qa=undefined&submitAction=ENTER`;
        console.log(SwiggyURL);
        
        const data= await fetch(`https:corsproxy.io/?${SwiggyURL}`);
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    }

    if (resInfo === null) 
        return <Shimmer></Shimmer>

    else
    {
    console.log(resInfo)
    console.log(resInfo?.data)
    console.log(resInfo?.data?.cards[0]?.card?.card?.info?.name)

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {itemCards: ["abc", "def"]};
    //const {itemCards} = {itemCards: ["abc", "def"]};
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
}
export default RestaurantMenu;