import { IMG_URL } from "../constant/constant";

export const RestroCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={IMG_URL + restaurant.data?.cloudinaryImageId} />
      <h4>{restaurant.data?.name}</h4>
      <h6>{restaurant.data?.cuisines.join(", ")}</h6>
      <h5>{restaurant.data?.lastMileTravelString} minute</h5>
      <h5 className="restro-rating">{restaurant.data?.avgRating} Stars</h5>
    </div>
  );
};
