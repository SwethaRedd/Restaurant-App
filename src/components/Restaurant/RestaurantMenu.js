import React from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  console.log("useParams()===>", useParams());
  const { resId } = useParams();
  /* you can use the useParams() hook to access the route parameters defined in the route path. For example: const { userId } = useParams();
  The useParams() hook returns an object containing the parameters parsed from the current route. 
  You can destructure specific parameters from this object and use them in your component logic. 
  In the example above, we destructure userId from the returned object to access the userId parameter from the route path (/users/:userId). 
  */
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  //   console.log("resInfo", resInfo.cards[2].card.card.info);

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  /*
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info;
    console.log("itemCards", itemCards);

    console.log(
      "resData==>",
      resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards[0].card.info
    );
    const { name } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info;
    console.log(
      "menu data",
      resInfo.cards[4].card.card.info.groupedCard.cardGroupMap.REGULAR.cards[1]
        .card.card.itemCards[0].card.info
    );
    */
  return (
    <div className="menu">
      <h1> {name}</h1>
      <img src={cloudinaryImageId} alt="image" />
      <p>
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          // console.log(item.card.info.name)
          <li key={item.card.info.id}>
            {item.card.info.name} - Price Rs.
            {item.card.info.price / 100 ||
              item.card.info.deafultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
