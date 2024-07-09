import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const {resId} = useParams();

    const resData = useRestaurantMenu(resId)

if (resData === null) return <Shimmer/>


const {name, costForTwoMessage, cuisines} = resData?.cards[2]?.card?.card?.info;
const {itemCards} = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="text-center py-4">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="font-extralight">{cuisines.join(" , ")} {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;