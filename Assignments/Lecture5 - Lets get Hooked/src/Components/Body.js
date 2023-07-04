import { useEffect, useState } from "react";
import { GET_RESTAURENTS_API_URL } from "../constant/constant";
import { RestroCard } from "./RestroCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterRestros } from "../utils/helper";
import useConnection from "../hooks/useConnection";
import useLocalStorage from "../hooks/useLocalStorage";

export const BodyComponent = () => {
  const [searchText, setSearchText] = useState(""); // To create state variable we use useState hook and it return the Array
  const [restros, setRestros] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);

  const connection = useConnection();

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

  if (!connection)
    return (
      <label className="connection_label">
        🔴 Offline, Please check your internet connection!
      </label>
    );

  // not render component ( Early Return )
  if (!restros) return null;

  return (
    <div className="Body">
      <div className="search-container">
        <input
          type="text"
          id="search-input"
          value={searchText}
          placeholder="Filter restro"
          onChange={(e) => {
            setSearchText(e.target.value);
            let filteredData = filterRestros(e.target.value, restros);
            setFilteredRestros(filteredData);
          }}
        />
      </div>

      {/* Conditional Rendering */}
      {restros.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="resturantList">
          {filteredRestros.length === 0 ? (
            <h3>No restaurent match your filter!!</h3>
          ) : (
            filteredRestros.map((restro, index) => {
              return (
                <Link
                  to={"/restaurent/" + restro.data.id}
                  key={restro.data.uuid + "-" + index}
                >
                  <RestroCard restaurant={restro} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
