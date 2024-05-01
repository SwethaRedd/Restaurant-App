import RestaurantCard from "../Restaurant/RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import Banner from "../Pages/Banner";
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/77b13d58799f70f670be31e6fe53374e

const Body = () => {
  // State Variable - Super Powerful Variable
  // Hook is normal JS function, given by react , function has logic behind the scenes.

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // Whenever the state variable is updating, react will trigger the reconcilation cycle(re-renders the component), this makes the react faster.

  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    /* If my CORS plugin is not activated on my browser: 
    https://corsproxy.io/
    This cors proxy has some limit / min, so we can use this for dev purposes.
    */
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log("json", json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // Optional Chaining
  };

  const handleSearch = () => {
    // Filter the restaurant cards and update the UI

    // console.log("I am clicked", searchText);
    const filteredSearch = listOfRestaurants.filter((res) =>
      // console.log(
      //   "res==>",
      //   res.info.name.toLowerCase().includes(searchText.toLowerCase()),
      //   searchText.toLowerCase()
      // )
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredSearch);
  };

  const filterTopRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurant(filteredList);
  };

  /*
  conditional rendering:
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  adding this logic below with ternary operation:
  if listOfRestaurants.length === 0 load Shimmer Component
  else the res of the code
*/

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button onClick={filterTopRestaurants} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      {/* add logic for banner show - config-driven data */}
      <Banner />
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <>
            {/* {console.log("restaurant card", res)} */}
            <RestaurantCard key={res?.info?.id} resData={res} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Body;
