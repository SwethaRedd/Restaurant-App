import { CDN_URL } from "../../utils/constant";

const styleCard = {
  backgroundColor: "lightgray",
};
// console.log("CDN_URL", CDN_URL);
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("props===>", resData);

  // console.log("props", props.resData.info);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info || resData?.data;
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
      <h4>₹{costForTwo} FOR TWO</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

/**
 * Higher Order Component
 * input - RestaurantCard => RestaurantCardPromoted
 *
 */
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
