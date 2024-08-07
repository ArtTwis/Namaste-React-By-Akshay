import FoodWidget from "../FoodWidget";
import RestaurentCard from "../RestaurentCard";
import { FoodWidgets } from "../../Constant/data.js";
import { useEffect, useState } from "react";
import { constant } from "../../Constant/constant.js";
import HomepageShimmerUI from "../HomePageShimmerUI/index.jsx";

const Body = () => {
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [restroList, setRestroList] = useState([]);
  const [ratingButtonState, setRatingButtonState] = useState(false);
  const [inputFields, setInputFields] = useState({
    searchText: "",
  });

  const getValue = (event) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  };

  const performFilterOperation = (event) => {
    if (event.target.id === "ratingFilterButton") {
      let filterRestro;
      if (!ratingButtonState) {
        filterRestro = filteredRestaurent.filter((restaurent) => {
          if (restaurent?.info?.avgRating) {
            return restaurent?.info?.avgRating >= 4 ? restaurent : false;
          }

          return false;
        });

        setFilteredRestaurent(filterRestro);
        setRatingButtonState(!ratingButtonState);
      } else {
        fetchData();
      }
    }

    if (event.target.id === "searchButton") {
      let { searchText } = inputFields;
      if (searchText === "") {
        setFilteredRestaurent(restroList);
        return;
      }

      let filterRestro = restroList.filter((restaurent) => {
        let restroName = restaurent.info.name.toLowerCase();
        return restroName.includes(searchText.toLowerCase());
      });
      setFilteredRestaurent(filterRestro);
    }
  };

  const fetchData = async () => {
    const data = await fetch(constant.Reataurent_List_URL);
    const result = await data.json();
    setFilteredRestaurent(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestroList(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRatingButtonState(false);
  };

  useEffect(() => {
    fetchData();

    return () => {
      //
    };
  }, []);

  return (
    <div className="body">
      <div id="food_Widget_Container">
        {FoodWidgets.map((foodWidget, index) => (
          <FoodWidget data={foodWidget} key={foodWidget.id} />
        ))}
      </div>
      <hr className="sc-hLwbiq hWwzWd"></hr>
      <div id="search_Container">
        <input
          type="text"
          id="searchInput"
          name="searchText"
          value={inputFields.searchText}
          onChange={getValue}
          placeholder="Search for restaurents and foods"
        />
        <button
          type="button"
          id="searchButton"
          onClick={performFilterOperation}
        >
          Search
        </button>
        <button
          type="button"
          className={ratingButtonState ? "activeButton" : ""}
          id="ratingFilterButton"
          onClick={performFilterOperation}
        >
          Rating 4.0+
        </button>
      </div>
      <div id="restro_Container">
        {!filteredRestaurent.length ? (
          <HomepageShimmerUI />
        ) : (
          filteredRestaurent.map((restaurent, index) => (
            <RestaurentCard data={restaurent} key={restaurent.info.id} />
          ))
        )}
      </div>
      <hr className="sc-hLwbiq hWwzWd"></hr>
    </div>
  );
};

export default Body;
