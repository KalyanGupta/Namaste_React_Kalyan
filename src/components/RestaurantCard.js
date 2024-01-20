import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props
    const {cloudinaryImageId,name, avgRating, cuisines, costForTwo} = resData?.info
    //const {cloudinaryImageId,name, avgRating, cuisines, costForTwo} = resData
    const {deliveryTime} = resData?.info?.sla
    //console.log(resData)

    //Displaying same number of cusinies(2) for all restaurant cards
    const maxCuisines = 2; // Set the desired number of cuisines
    const truncatedCuisines = cuisines.slice(0, maxCuisines);

    const maxTitleLength =21;
    let displayTitle;

    if(name.length > maxTitleLength)
    {
        displayTitle = name.slice(0,maxTitleLength-1) + "*";
    }
    else
    {
        displayTitle=name;
    }

    return(
      
        <div className=
        "p-4 m-4 w-[220px] bg-gray-100 rounded-lg hover:border border-solid border-black">
            <img 
            className="rounded w-56 h-48"
            alt="res-logo"
            src={CDN_URL+ cloudinaryImageId}/>
            <h3 className="font-bold py-1">{displayTitle}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{truncatedCuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h3>{deliveryTime} minutes</h3>

        </div>  
    )
}
export default RestaurantCard;

//Higher Order component

//Input: RestaurantCard; Output: Promoted RestaurantCard


export const withRecommendedLabel = (RestauarantCard) =>{
    return(props) =>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Recommended
                </label>
               
                    <RestauarantCard {...props}></RestauarantCard>
                
                
            </div>
        )
    }
}