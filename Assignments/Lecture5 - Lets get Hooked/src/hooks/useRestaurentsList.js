import { useEffect, useState } from "react";
import { GET_RESTAURENTS_API_URL } from "../constant/constant";

const useRestaurentsList = () => {
  const [restros, setRestros] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);

  const getRestaurents = async () => {
    const data = await fetch(GET_RESTAURENTS_API_URL);
    const json = await data.json();
    // console.log('data :', json)

    const filterRestaurentResponse = json.data.cards.filter((obj) =>
      obj?.card?.card?.hasOwnProperty("id")
        ? obj?.card?.card?.id === "restaurant_grid_listing"
          ? true
          : false
        : false
    );

    // Optional Chaining
    setRestros(
      filterRestaurentResponse[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestros(
      filterRestaurentResponse[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    getRestaurents();
  }, []);

  return { restros, filteredRestros, setFilteredRestros };
};

export default useRestaurentsList;
