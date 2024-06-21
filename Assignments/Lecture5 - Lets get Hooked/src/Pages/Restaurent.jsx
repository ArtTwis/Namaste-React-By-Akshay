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
    <div className="text-xl font-bold m-4">Fetching Details</div>
  ) : (
    <div className="flex flex-col my-5 mx-48">
      <label className="text-lg text-gray-600">
        {makeFirstCharacterUppercase([
          restaurentDetail.city.toLowerCase(),
          restaurentDetail.areaName.toLowerCase(),
          restaurentDetail.locality.toLowerCase(),
          restaurentDetail.name.toLowerCase(),
        ])}
      </label>
      <div className="mt-5 mb-8 flex">
        <img
          className="h-48 mr-5 rounded-lg"
          src={IMG_URL + restaurentDetail.cloudinaryImageId}
          alt="Restaurent Image"
        />
        <div className="flex flex-col">
          <h2 className="mb-3 text-black text-4xl font-bold">
            {restaurentDetail.name}
          </h2>
          <label className="mb-1 text-black text-xl">
            Restaurent Id : {restaurentid}
          </label>
          <label className="mb-2 text-gray-600 text-sm">
            {restaurentDetail.cuisines.join(" , ")}
          </label>
          <label className="mb-1 text-green-700 text-xl font-bold">
            Rating : {restaurentDetail.avgRatingString} ★
          </label>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl my-3">Resturent Menu</h1>
        {!restaurentMenu ? (
          <h3 className="text-lg m-4">No Item in restro menu!</h3>
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
