import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body =()=> {
const [filteredRestraunts, setFilteredRestraunts]= useState([]);
const [filterBySearch,setFilterBySearch]= useState([])
const [searchData, setSearchData] = useState("")

const {loggedInUser, setUserName} = useContext(UserContext)

const RestaurantCardNewlyOpened = withPromotedLabel(RestaurantCard);


console.log(filteredRestraunts)
useEffect(()=>{
  fetchData();
},[])

const fetchData = async ()=> {
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6161&lng=73.7286&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

  const json = await data.json()
  // console.log(json)

  setFilteredRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilterBySearch(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  console.group(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

}

    return(
      <div className="">
        <div className="flex">
        <div className="p-6"><button
        onClick={()=>{
            const filteredList = filteredRestraunts.filter((res)=>res.info.avgRating >4);
            setFilteredRestraunts(filteredList)
            console.log(filteredList)
        }}
         className=" text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">Top Rated Restaurant</button></div>
         <div className="p-7">
          <input type="text" placeholder="Search here" className="border border-gray-300 rounded-lg w-50 outline-none p-1" value={searchData} onChange={(e)=>{setSearchData(e.target.value)}} />
          <button
          onClick={()=> {
            const filterBySearchData= filteredRestraunts.filter((res)=>
              res.info.name.toLowerCase().includes((searchData.toLowerCase()))
            );
            setFilterBySearch(filterBySearchData)
          }}
           className="ml-4 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none rounded-full text-sm px-4 py-2 font-medium ">Search</button>
         </div>
         <div className="p-7">
         <input type="text" placeholder="Enter Username" className="border border-gray-300 rounded-lg w-80 outline-none p-1" onChange={(e)=> setUserName(e.target.value)} value={loggedInUser}/>
         </div>
        </div>
        <div className="flex flex-wrap ">
          {
            filterBySearch.map(res=> <Link key={res.info.id} className="link" to={"/restaurants/" + res.info.id}>
              {res.info.isNewlyOnboarded ? <RestaurantCardNewlyOpened resData={res} /> : <RestaurantCard resData={res}/>}
              {/* {res.info.isOpen ? (<IsOpenTagStatus resData={res}/>) : (<RestaurantCard resData={res}/>)} */}
              </Link>)
          }
        </div>
      </div>
    )
  }

export default Body;