import { useState } from "react";
import ItemsList from "./ItemsList";
const RestaurantCategory = (props) =>{
    // console.log(props)
    const {data, arrow, setShowIndex} = props;

    const handleClick = () =>{
        setShowIndex();
    }
   
    return(
        <div>
            {/* Acccordian Header */}

            <div className="w-6/12 bg-gray-200 my-4 mx-auto shadow-lg p-4 cursor-pointer">

                <div className="flex justify-between">
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span  onClick={handleClick}>{arrow}</span>
                </div>

                {/* Accordian Body */}

                {arrow== "⬆️" ? <ItemsList items={data.itemCards}></ItemsList>: ""}

            </div>
                
            

            

        </div>
        
    )
}
export default RestaurantCategory;