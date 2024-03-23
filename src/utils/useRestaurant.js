import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";
import { MENU_DATA } from "../mocks/restaurantMenuData";

const useRestaurant = (resid) => {
  const [restaurant, setRestaurant] = useState(null);

  const restaurant_menu = MENU_DATA;
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //   async function getRestaurantInfo() {
  //     const data = await fetch(
  //       FETCH_MENU_URL + resid + "&isMenuUx4=true&submitAction=ENTER"
  //     );
  //     const json = await data.json();
  //     setRestaurant(json?.data);
  //   }

  function getRestaurantInfo() {
    setRestaurant(restaurant_menu?.data[resid]);
  }

  return restaurant;
};

export default useRestaurant;
