import { IMG_URL } from "../constant/constant";

export const RestaurentMenuItem = ({ menuitem }) => {
  return (
    <div className="menu-item-card">
      <img src={IMG_URL + menuitem.card.info.imageId} />
      <div className="item-detail">
        <h2>{menuitem.card.info.name}</h2>
        <h4>{menuitem.card.info.category}</h4>
        <p>{menuitem.card.info.description}</p>
      </div>
      <h2>₹ 252</h2>
      <button className="menu-item-button">Select</button>
    </div>
  );
};
