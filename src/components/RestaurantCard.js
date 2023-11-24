import { CDN_URL } from "../utils/constants";

const StyleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) =>{
    const {resData} = props
    const {cloudinaryImageId,name, avgRating, cuisines, costForTwo} = resData?.info
    //const {cloudinaryImageId,name, avgRating, cuisines, costForTwo} = resData
    const {deliveryTime} = resData?.info?.sla
    //console.log(resData)
    return(
      
        <div className='res-card' style={StyleCard}>
            <img 
            className='res-logo'
            alt="res-logo"
            src={CDN_URL+ cloudinaryImageId}/>
            <h3>{name}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h3>{deliveryTime} minutes</h3>

        </div>  
    )
}
export default RestaurantCard;

