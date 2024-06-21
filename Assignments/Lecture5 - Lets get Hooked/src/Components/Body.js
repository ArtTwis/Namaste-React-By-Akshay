import { useState, useContext } from "react";
import { RestroCard } from "./RestroCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterRestros } from "../utils/helper";
import useConnection from "../hooks/useConnection";
import useRestaurentsList from "../hooks/useRestaurentsList";
import UserContext from "../utils/UserContext";

export const BodyComponent = () => {
  const { user, setUser } = useContext(UserContext);

  const [searchText, setSearchText] = useState(""); // To create state variable we use useState hook and it return the Array

  const { restros, filteredRestros, setFilteredRestros } = useRestaurentsList();

  const connection = useConnection();

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
      <div className="input-field">
        <input
          type="text"
          className="w-96 ml-7 mt-4 p-2 text-lg border-solid border-2 border-gray-400 rounded-lg outline-none focus:ring focus:ring-orange-500 focus:border-transparent"
          value={searchText}
          placeholder="Filter restro"
          onChange={(e) => {
            setSearchText(e.target.value);
            let filteredData = filterRestros(e.target.value, restros);
            setFilteredRestros(filteredData);
          }}
        />
        <input
          type="text"
          className="w-96 ml-7 mt-4 p-2 text-lg border-solid border-2 border-gray-400 rounded-lg outline-none focus:ring focus:ring-orange-500 focus:border-transparent"
          value={user.name}
          placeholder="Enter Username"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          type="text"
          className="w-96 ml-7 mt-4 p-2 text-lg border-solid border-2 border-gray-400 rounded-lg outline-none focus:ring focus:ring-orange-500 focus:border-transparent"
          value={user.email}
          placeholder="Enter UserEmail"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>

      {/* Conditional Rendering */}
      {restros.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="flex flex-wrap">
          {filteredRestros.length === 0 ? (
            <h3 className="text-lg m-4">No restaurent match your filter!!</h3>
          ) : (
            filteredRestros.map((restro, index) => {
              return (
                <Link
                  className="no-underline"
                  to={"/restaurent/" + restro.info.id}
                  key={restro.info.uuid + "-" + index}>
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
