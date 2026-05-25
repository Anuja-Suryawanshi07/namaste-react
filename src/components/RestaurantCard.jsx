const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, rating, deliveryTime, image } = resData;
  //console.log(props);
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image} />
      <div className="description">
        <h2>{resName}</h2>
        <h4>{cuisine}</h4>
        <h4>Avg Rating: {rating}</h4>
        <h4>Deliver in: {deliveryTime}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;