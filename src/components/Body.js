import RestaurantCard, {withRecommendedLabel} from "./RestaurantCard";
//import ResList from "../utils/MockData";
import {useState, useEffect, useContext} from 'react';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


 const Body = () =>{
    //State variable using useState()
    //let [listofrestaurants, setListOfRestaurants] = useState(ResList)
    const [listofrestaurants, setListOfRestaurants] = useState([])            
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const RestaurantCardRecommended = withRecommendedLabel(RestaurantCard);
    const data = useContext(UserContext);
    const {loggedInUserName, setUserName} = data;



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

    console.log("Body rendered123")
    useEffect(()=>{
      //console.log("UseEffect Hook called");
      fetchData();
    }, []);

    const fetchData = async () =>{
      const SwiggyApiURL = 
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5879534&lng=73.7372559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      try{
        // const data = await fetch( `https://corsproxy.io/?${SwiggyApiURL}`);
        const data = await fetch(SwiggyApiURL);
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listofrestaurants);
      } catch(error){
        console.log(error);
      }
      
    }

    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);
    if(onlineStatus === false)
    return (
      <h1>Oops!! you lost your internet connection, please check your internet connection</h1>
    )
       
    //Conditional Rendering
    // if(listofrestaurants.length === 0)
    // {
    //   return <Shimmer></Shimmer>
    // }

    //We can do using the ternary operator also: 

    return !listofrestaurants || listofrestaurants.length === 0? (
    <Shimmer></Shimmer>
    ) : (
        <div className='body'>
            
            <div className='search-filter flex'>
              
              <div className="m-4 p-4">
               
                <input type="text" className="border border-solid border-black" value={searchText}
                onChange={(e)=>{
                  console.log(e.target.value)
                  setSearchText(e.target.value)
                }}

                />
                <button className="bg-green-200 px-4 m-2 rounded-lg"
                onClick={()=>{
                  //Filter the listofrestaurants and update the UI.
                  console.log(searchText)
                  
                  const filteredList = listofrestaurants.filter(
                  (res)=> {return res.info.name.toLowerCase().includes(searchText.toLowerCase())}
                  );
                  
                  console.log(filteredList)
                  setFilteredRestaurants(filteredList);

                }}>Search</button>
              
              </div>
                
              <div className="m-4 p-4 flex items-center" >
                <button 
                      className="px-4 m-2 bg-green-200 rounded-lg" 
                      onClick={()=>{
                        const filteredList = listofrestaurants.filter(
                            (res) => res.info.avgRating > 4.0
                        )
                        //setListOfRestaurants(filteredList);
                        setFilteredRestaurants(filteredList)
                      }}
                    >
                      Top Rated Restaurants
                </button>
              </div>


              <div className="m-4 p-4 flex items-center" >
                <label className="font-bold">UserName: </label>
                <input type="text" className="border border-black m-2"
                value={loggedInUserName}
                onChange={(e)=> setUserName(e.target.value)}
                />
              </div>


              
            </div>
            
            <div className="flex flex-wrap">
                {/* Restaurant Cards */}
                {
                /* <RestaurantCard resData={ResList[0]}/>
                <RestaurantCard resData={ResList[1]}/>
                <RestaurantCard resData={ResList[2]}/>
                 */
                // Instead of manually displaying each RestaurantCard we can iterate them using map. 
                }
                
                {
                filteredRestaurants.length==0 ? 
                
                <h1 className="font-bold text-center">No results found 😢 please search for other restaurants</h1> 
                
                
                : filteredRestaurants.map((restaurant) =>
                    <Link to={"/restaurants/"+ restaurant.info.id} key={ restaurant.info.id}> 
                      {
        restaurant.info.avgRating>=4.5?<RestaurantCardRecommended resData={restaurant}/> : <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                      }
                      
                    </Link>
                   )
                }      
            </div>
        </div>
              
    )
}
export default Body;