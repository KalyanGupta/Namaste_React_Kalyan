import RestaurantCard from "./RestaurantCard";
//import ResList from "../utils/MockData";
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";


 const Body = () =>{

    //State variable using useState()
    //let [listofrestaurants, setListOfRestaurants] = useState(ResList)
    const [listofrestaurants, setListOfRestaurants] = useState([])            
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


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
            
            <div className='search-filter'>
              
              <div className="search">
                
                <input type="text" className="search-box" value={searchText}
                onChange={(e)=>{
                  console.log(e.target.value)
                  setSearchText(e.target.value)
                }}

                />
                <button
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
                
              <button 
                className="filter-btn" 
                onClick={()=>{
                  const filteredList = listofrestaurants.filter(
                      (res) => res.info.avgRating > 4.1
                  )
                  //setListOfRestaurants(filteredList);
                  setFilteredRestaurants(filteredList)
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
                  filteredRestaurants.map((restaurant) =>
                   <Link to={"/restaurants/"+ restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant}/></Link>
                   )
                }      
            </div>
        </div>
              
    )
}
export default Body;