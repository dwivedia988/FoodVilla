import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  sla,
  aggregatedDiscountInfoV3,
}) => {
  return (
    <div className="w-56 p-2 m-4 shadow-lg bg-pink-50 rounded-lg">
      <img
        className="rounded-lg h-48 w-52"
        src={IMG_CDN_URL + cloudinaryImageId}
      >
        {/* <h3 className="font-bold text-white">{aggregatedDiscountInfoV3}</h3> */}
      </img>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="font-bold">
        {avgRating} . {sla.slaString}
      </h3>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
