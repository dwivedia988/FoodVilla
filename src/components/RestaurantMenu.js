import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const restaurant = useRestaurant(resid);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="max-w-3xl mx-auto pt-32">
      <div className="flex justify-between mt-8">
        <div className="pt-4">
          {/* <h1>Restaurant Id : {resid}</h1> */}
          <h1 className="font-bold text-xl">
            {restaurant?.cards[2]?.card?.card.info?.name}
          </h1>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.city}</h3>
          <h3>
            {restaurant?.cards[2]?.card?.card?.info?.areaName} ,{" "}
            {restaurant?.cards[2]?.card?.card?.info?.sla?.lastMileTravelString}
          </h3>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.avgRating} Rating </h3>
        </div>
        <div>
          <img
            className="w-96 h-44"
            src={
              IMG_CDN_URL +
              restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
          />
        </div>
      </div>
      <hr className="mt-6" />
      <div className="py-4">
        <h1 className="text-center font-bold text-xl">
          {restaurant?.cards[2]?.card?.card?.info?.sla?.slaString}{" "}
          {restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}
        </h1>
      </div>
      <hr className="mt-4" />
      <div className="p-8">
        <h1 className="font-bold text-xl pb-8 text-center">Menu</h1>
        <ul data-testid="menu">
          {Object.values(
            restaurant?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.itemCards
          ).map((item) => (
            <div key={item?.card?.info?.id}>
              <div className="flex justify-between">
                <li key={item?.card?.info?.id}>
                  <h3>{item?.card?.info?.name}</h3>
                  <h3> ₹ {item?.card?.info?.price / 100}</h3>
                  <h3 className="text-gray-400 w-[500px]">
                    {item?.card?.info?.description}
                  </h3>
                </li>
                <div>
                  <img
                    className="w-24 h-20 rounded-lg"
                    src={IMG_CDN_URL + item?.card?.info?.imageId}
                  />
                  <button
                    data-testid="addBtn"
                    className="bg-green-100 w-20 h-7 mt-2 ml-2 font-bold rounded-lg"
                    onClick={() => addFoodItem(item)}
                  >
                    ADD
                  </button>
                </div>
              </div>
              <hr className="mt-5 mb-3" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
