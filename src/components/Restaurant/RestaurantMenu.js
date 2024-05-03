import React, { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    //"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425"
    const data = await fetch(`${MENU_API}` + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

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
