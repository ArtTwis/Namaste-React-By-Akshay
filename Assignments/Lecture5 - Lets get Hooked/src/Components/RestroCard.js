import { useContext } from "react";
import { IMG_URL } from "../constant/constant";
import UserContext from "../utils/UserContext";

export const RestroCard = ({ restaurant }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-96 w-80 mx-4 my-4 bg-gray-100 border-solid border-1 border-gray-400 rounded-lg shadow-lg flex flex-col justify-center items-center hover:bg-orange-100">
      <img
        className="h-56 w-72 my-3 rounded-lg border-solid border-1 border-gray-400"
        src={IMG_URL + restaurant.info?.cloudinaryImageId}
      />
      <div className="w-full h-full flex flex-col justify-start items-start">
        <h4 className="mx-3 my-1 text-black text-xl font-bold">
          {restaurant.info?.name}
        </h4>
        <h6 className="mx-3 my-0 text-gray-500 text-xs">
          {restaurant.info?.cuisines.join(", ")}
        </h6>
        <h5 className="mx-3 my-1 text-black text-sm">
          {restaurant.info?.lastMileTravelString} minute
        </h5>
        <h5 className="mx-3 my-0 text-green-600 text-sm font-bold">
          {restaurant.info?.avgRating} Stars
        </h5>
        <h5 className="mx-3 my-0 text-gray-400 text-sm">
          {user.name} - {user.email}
        </h5>
      </div>
    </div>
  );
};
