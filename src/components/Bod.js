import RestaurantCard from "./Restaurant/RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Bod = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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
      (res) => res.info.avgRating > 4.2
    );
    setFilteredRestaurant(filteredList);
  };

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
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <>
            <RestaurantCard key={res?.info?.id} resData={res} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Bod;
