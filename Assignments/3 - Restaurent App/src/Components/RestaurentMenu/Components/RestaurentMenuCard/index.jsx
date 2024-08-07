import React from "react";
import { MenuItems } from "../../../../Constant/data";
import { constant } from "../../../../Constant/constant";
import Food from "../../../../Assets/food-menu-item.jpg";
import RatingIcon from "../../../../Assets/rating.png";

const MenuItemCard = ({ item }) => {
  return (
    <div className="menu-item-card-container">
      {item?.imageId ? (
        <img src={constant.Restro_Image_URL + item.imageId} alt="MenuItem" />
      ) : (
        <img src={Food} />
      )}
      <div className="item-info-container">
        <p className="menu-item-name">{item.name}</p>
        <p className="menu-item-labels">₹ {item.price / 100}</p>
        <div className="menu-item-rating-wrapper">
          <img src={RatingIcon} alt="Rating" srcSet={RatingIcon} />
          <p>{item?.ratings?.aggregatedRating?.rating}</p>
        </div>
      </div>
    </div>
  );
};

const RestaurentMenuContainer = () => {
  return (
    <div id="restro-menu-container">
      <p id="restro-menu-container-heading">Menu Items</p>

      <div>
        {MenuItems.map((item, index) => (
          <MenuItemCard key={item.card.info.id} item={item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenuContainer;
