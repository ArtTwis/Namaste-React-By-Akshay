import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RestaurentInfo from "./Components/RestaurentInfo";
import { constant } from "../../Constant/constant.js";
import RestaurentMenuContainer from "./Components/RestaurentMenuCard";

const RestaurentMenu = () => {
  const { pathname } = useLocation();
  const restaurentID = pathname.split("/restaurent/")[1];
  const [restaurentMenu, setRestaurentMenu] = useState([]);
  const [restaurentDetail, setRestaurentDetail] = useState(null);

  console.log("restaurentMenu :>> ", restaurentMenu);

  const fetchData = async () => {
    const data = await fetch(constant.Restaurent_Menu_URL + restaurentID);
    const response = await data.json();
    setRestaurentDetail(response?.data?.cards?.[2].card?.card?.info);
    setRestaurentMenu(
      response?.data?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  useEffect(() => {
    fetchData();

    return () => {
      //
    };
  }, []);

  return (
    <div id="restuarent_menu_container" className="poppins-regular">
      {restaurentDetail ? (
        <RestaurentInfo
          restaurentDetail={restaurentDetail}
          restaurentID={restaurentID}
        />
      ) : null}
      {restaurentMenu.length ? <RestaurentMenuContainer /> : null}
    </div>
  );
};

export default RestaurentMenu;
