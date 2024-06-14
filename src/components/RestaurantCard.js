const RestaurantCard = (props)=> {
    const {resData} = props
    const {imgURL,name, cuisines, avgRating, costForTwoString, deliveryTime} = resData?.data;
    console.log(resData);
    return(
      <div className="res-card">
        <img className="res-img" alt="cardImg" src={imgURL}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h5>{costForTwoString}</h5>
        <h5>{avgRating} &#9733;</h5>
        <h5>{deliveryTime} minutes</h5>
      </div>
    )
  }

  export default RestaurantCard;