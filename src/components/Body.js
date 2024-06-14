import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";



const Body =()=> {
const [filteredRestraunts, setFilteredRestraunts]= useState(resList);


    return(
      <div className="body">
        <div><button
        onClick={()=>{
            const filteredList = filteredRestraunts.filter((res)=>res.data.avgRating >4.2);
            setFilteredRestraunts(filteredList)
            console.log(filteredList)
        }}
         className="button-filter">Top Rated Restaurant</button></div>
        <div className="res-container">
          {
            filteredRestraunts.map(res=> <RestaurantCard key={res.data.id} resData={res}/>)
          }
        </div>
      </div>
    )
  }

export default Body;