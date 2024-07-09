
const RestaurantCard = (props)=> {
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    console.log(resData);
    return(
      <div className="border border-gray-600 shadow-lg w-80 p-4 m-5 h-80  ">
        <img className="res-img" alt="cardImg" src="https:\/\/b.zmtcdn.com\/data\/pictures\/2\/20854122\/b0ea0b66d9b78a1b4a0d14fd8193c73d_featured_v2.jpg"/>
        <h3 className="font-bold">{name}</h3>
        <h4 className="font-extralight text-sm">{cuisines.join(" , ")}</h4>
        <h5>{costForTwo}</h5>
        <h5 className="text-yellow-500">{avgRating} &#9733;</h5>
        <h5>Delivery Time : {sla.slaString}</h5>
      </div>
    )
  }

  export const withPromotedLabel = (RestaurantCard)=>{
    return (props) =>{
      return (
        <div>
          <label className="absolute border border-r-black bg-slate-700 text-white font-semibold p-1 text-xs">New Restaurant</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }

  }

  //  export const isOpenTag = (RestaurantCard) =>{
  //   return(props) =>{
  //     return (
  //       <div>
          
  //         <RestaurantCard {...props}/>
  //       </div>
  //     )
  //   }

  // }

  export default RestaurantCard;