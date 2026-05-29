const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, sla, } = resData?.info;
  //console.log(props);

   const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <div className="description">
        <h2>{name}</h2>
        <h4>{cuisines.join(",")}</h4>
        <h4>⭐ {avgRating}</h4>
        <h4>{sla?.deliveryTime} mins</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;