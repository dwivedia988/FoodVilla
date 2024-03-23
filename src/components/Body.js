import { useContext, useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { RESTAURANT_DATA } from "../mocks/restaurantCardData";

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  function getRestaurants() {
    const restaurant_data = RESTAURANT_DATA;

    setFilteredRestaurants(
      restaurant_data?.data?.success?.cards[4].gridWidget?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      restaurant_data?.data?.success?.cards[4].gridWidget?.gridElements
        ?.infoWithStyle?.restaurants
    );
  }

  // async function getRestaurants() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/mapi/homepage/getCards?lat=22.7339272&lng=75.88671710000001"
  //   );
  //   const json = await data.json();
  //   setFilteredRestaurants(
  //     // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     json?.data?.success?.cards[4].gridWidget?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  //   setAllRestaurants(
  //     // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     json?.data?.success?.cards[4].gridWidget?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  // }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline , please check your internet connection.</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 mt-4 bg-pink-50 text-center">
        <input
          data-testid="search-input"
          type="text"
          className="p-2 m-2 rounded-md focus:bg-green-200 focus:text-white"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input
            value={user.name}
            onChange={(e) =>
              setUser({
              ...user,
              name: e.target.value,
              })
            }
          ></input>
          <input
            value={user.email}
            onChange={(e) =>
              setUser({
              ...user,
              email: e.target.value,
              })
            }
          ></input> */}
      </div>
      <div className="max-w-7xl mx-auto" data-testid="res-id">
        <div>
          <h1 className="font-bold text-3xl text-center">Restaurant List</h1>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant, index) => {
            return (
              <Link to={"/restaurant/" + index} key={restaurant.info.id}>
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
