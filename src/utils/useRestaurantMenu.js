import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425"
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
