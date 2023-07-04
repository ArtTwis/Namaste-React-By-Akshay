import { useParams } from "react-router-dom";
import { IMG_URL } from "../constant/constant";
import { makeFirstCharacterUppercase } from "../utils/helper";
import { RestaurentMenuItem } from "../Components/RestaurentMenu";
import useRestaurent from "../hooks/useRestaurent";

const RestaurentDetail = () => {
  // How to read dynamic url params
  const { restaurentid } = useParams();

  const { restaurentDetail, restaurentMenu } = useRestaurent(restaurentid);

  return !restaurentDetail ? (
    <div>Fetching Details</div>
  ) : (
    <div className="restaurentDetail-container">
      <label className="route-to-restaurent">
        {makeFirstCharacterUppercase([
          restaurentDetail.city.toLowerCase(),
          restaurentDetail.areaName.toLowerCase(),
          restaurentDetail.locality.toLowerCase(),
          restaurentDetail.name.toLowerCase(),
        ])}
      </label>
      <div className="restaurent-basic-detail-container">
        <img
          src={IMG_URL + restaurentDetail.cloudinaryImageId}
          alt="Restaurent Image"
        />
        <div>
          <h2>{restaurentDetail.name}</h2>
          <label>Restaurent Id : {restaurentid}</label>
          <label>{restaurentDetail.cuisines.join(" , ")}</label>
          <label>Rating : {restaurentDetail.avgRatingString} ★</label>
        </div>
      </div>
      <div className="restaurentMenu-container">
        <h1>Resturent Menu</h1>
        {!restaurentMenu ? (
          <h3>No Item in restro menu!</h3>
        ) : (
          restaurentMenu.map((menuItem) => {
            return (
              <RestaurentMenuItem
                key={menuItem.card.info.id}
                menuitem={menuItem}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default RestaurentDetail;
