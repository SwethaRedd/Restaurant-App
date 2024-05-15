import { CDN_URL } from "../../utils/constant";

const styleCard = {
  backgroundColor: "#f0f0f0",
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
    <div
      className="m-4 p-4 w-[250px] h-[450px] rounded-lg bg-gray-100 hover:bg-gray-200 h-50"
      // style={styleCard}
    >
      <img
        className="rounded-lg w-52 h-48"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} FOR TWO</h4>
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
