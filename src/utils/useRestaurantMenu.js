import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    //console.log(resInfo);
    //console.log("useRestaurantMenuu");

    useEffect(()=>{
      //  console.log("useEffect called");
        fetchMenu();
    }, [])

    const fetchMenu = async() =>{
        const SwiggyURL =`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5879534&lng=73.7372559&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
        //const data= await fetch(`https:corsproxy.io/?${SwiggyURL}`);
        const data= await fetch(`${SwiggyURL}`); // Works with CORS allow extension
        const json = await data.json();
        setResInfo(json);
    }

    const sum = (a,b) =>{
        return a+b;
    }

    const summ= sum(1,2);
    //console.log(summ);

    return resInfo;

}
export default useRestaurantMenu;
