import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/MockData";
import {useState} from 'react';


 const Body = () =>{

    //State variable using useState()
    let [listofrestaurants, setListOfRestaurants] = useState(ResList)


    //Normal JavaScript variable
    // let listofrestaurants =[
    //     {
    //     "info":{
    //             "id":"78036",
    //             "name":"Burger King",
    //             "cloudinaryImageId":"e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "costForTwo":"₹350 for two",
    //             "cuisines":[ "Burgers", "American", "Mexico","Italian" ],
    //             "avgRating":3.9,
    //             "sla":{
    //                 "deliveryTime":22,
    //             }
    //         }
    //     },
        
    //     {
    //     "info": {
    //             "id":"78037",
    //             "name":"Burger King",
    //             "cloudinaryImageId":"e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "costForTwo":"₹350 for two",
    //             "cuisines":[ "Burgers", "American", "Mexico","Italian" ],
    //             "avgRating":4.2,
    //             "sla":{
    //                 "deliveryTime":22,
    //             }
    //         }
    //     },

    //     {
    //     "info": {
    //             "id":"78038",
    //             "name":"Burger King",
    //             "cloudinaryImageId":"e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "costForTwo":"₹350 for two",
    //             "cuisines":[ "Burgers", "American", "Mexico","Italian" ],
    //             "avgRating":3.8,
    //             "sla":{
    //                 "deliveryTime":22,
    //             }
    //         }
    //     }
    // ]
    
    console.log(listofrestaurants);
    
    return(
        <div className='body'>
            <div className='filter'>
                <button 
                  className="filter-btn" 
                  onClick={()=>{
                    const filteredList = listofrestaurants.filter(
                        (res) => res.info.avgRating > 4.1
                    )
                    setListOfRestaurants(filteredList);
                  }}
                >
                Top Rated Restaurants greater than 4.1
                </button>
            </div>
            
            <div className='res-container'>
                {/* Restaurant Cards */}
                {
                /* <RestaurantCard resData={ResList[0]}/>
                <RestaurantCard resData={ResList[1]}/>
                <RestaurantCard resData={ResList[2]}/>
                 */
                // Instead of manually displaying each RestaurantCard we can iterate them using map. 
                }

                {
                  listofrestaurants.map((restaurant) =>
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }      
            </div>
        </div>
    )
}
export default Body;