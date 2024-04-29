import RestaurantCard from "./Restaurant/RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/77b13d58799f70f670be31e6fe53374e

const Body = () => {
  // State Variable - Super Powerful Variable
  // Hook is normal JS function, given by react , function has logic behind the scenes.

  // const [state, setstate] = useState(initialState);
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) =>
                //  console.log('res', res)
                res?.data?.avgRating > 3
            );
            setListOfRestaurants(filteredList);
            // setListOfRestaurants(
            //   (filteredList = listOfRestaurants.filter(
            //     (res) => res.data.avgRating > 4.1
            //   ))
            // );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <>
            {console.log("restaurant", restaurant)}
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Body;

{
  /* {console.log("restaurant===>", restaurant.data.filter(if(avgRating>3.5)=>name))} */
}
{
  /* <div className="res-container">
{resList.map((restaurant) => (
  
  <> 
    <RestaurantCard
      key={restaurant.data.id}
      resData={restaurant?.data}
    />
  </>
))}
</div> */
}

/**
 * export default function Sale() {
  const noSaleMessage = "No on-going sales, check back later";
  const [saleBanner, setSaleBanner] = useState(noSaleMessage);
  const [isOnGoingSale, setIsOnGoingSale] = useState(false);

  const handleOnClick = (label, duration) => {
    console.log("label", label);
    setSaleBanner(label);
    setIsOnGoingSale(true);

    setTimeout(() => {
      setSaleBanner(noSaleMessage);
      setIsOnGoingSale(false);
    }, duration * 1000);
  };

  return (
    <div>
      <h1>{saleBanner}</h1>
      {products.map((product) => (
        <Controls
          isDisabled={isOnGoingSale}
          key={product.id}
          handleOnClick={handleOnClick}
          duration={product.duration}
          item={`${product.item} for ${product.duration} seconds`}
        />
      ))}
    </div>
  );
}

const Controls = (props) => {
  console.log("props", props);
  const { item, handleOnClick, duration, isDisabled } = props;
  const handleOnProductClick = () => {
    handleOnClick(item, duration);
  };
  return (
    <button disabled={isDisabled} onClick={handleOnProductClick}>
      {item}{" "}
    </button>
  );
};
 */
