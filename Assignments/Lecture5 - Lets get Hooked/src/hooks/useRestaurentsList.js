import { useEffect, useState } from "react";
import { GET_RESTAURENTS_API_URL } from "../constant/constant";

const useRestaurentsList = () => {
  const [restros, setRestros] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);

  const getRestaurents = async () => {
    const data = await fetch(GET_RESTAURENTS_API_URL);
    const json = await data.json();
    // Optional Chaining
    setRestros(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestros(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    getRestaurents();
  }, []);

  return { restros, filteredRestros, setFilteredRestros };
};

export default useRestaurentsList;
