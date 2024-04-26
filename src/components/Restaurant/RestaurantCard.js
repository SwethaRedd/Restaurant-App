import { CDN_URL } from "../../utils/constant";

const styleCard = {
  backgroundColor: "lightgray",
};
// console.log("CDN_URL", CDN_URL);
const RestaurantCard = (props) => {
  // console.log("props", props);
  const { resData } = props;
  //   console.log("resData", resData);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;
  // obj destructuring
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};
export default RestaurantCard;
