import React, { useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // console.log("useParams()===>", useParams());
  const { resId } = useParams();
  /* you can use the useParams() hook to access the route parameters defined in the route path. For example: const { userId } = useParams();
  The useParams() hook returns an object containing the parameters parsed from the current route. 
  You can destructure specific parameters from this object and use them in your component logic. 
  In the example above, we destructure userId from the returned object to access the userId parameter from the route path (/users/:userId). 
  */
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  //   console.log("resInfo", resInfo.cards[2].card.card.info);

  const { name, cuisines, costForTwoMessage } =
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
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl"> {name}</h1>
      {/* <img src={cloudinaryImageId} alt="image" /> */}
      <p className="font-bold text-lg">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      {/*  categories accordions
       */}
      {categories.map((category, index) => (
        // controlled Component - the parent is controlling this Restaurant Category component.
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
