import { useState, useEffect } from "react";
import { GET_RESTAURENT_MENU_API_URL } from "../constant/constant";

const useRestaurent = (restaurentid) => {
  const [restaurentDetail, setRestaurentDetail] = useState(null);
  const [restaurentMenu, setRestaurentMenu] = useState(null);

  const getRestaurentInfo = async () => {
    const data = await fetch(GET_RESTAURENT_MENU_API_URL + restaurentid);
    const response = await data.json();
    setRestaurentDetail(response?.data?.cards[0]?.card?.card?.info);
    setRestaurentMenu(
      response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  };

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  return {
    restaurentDetail,
    restaurentMenu,
  };
};

export default useRestaurent;
