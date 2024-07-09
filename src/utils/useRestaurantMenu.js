import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () =>{
    const [resData, setResData] = useState(null)
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu()
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6161&lng=73.7286&restaurantId="+
        resId +
        "&catalog_qa=undefined&submitAction=ENTER");
    
        const json = await data.json()
        console.log(json)
        setResData(json.data)
    };



    return resData;
}

export default useRestaurantMenu;