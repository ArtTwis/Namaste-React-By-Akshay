import { IMG_URL } from "../constant/constant";
import { cartActions } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

export const RestaurentMenuItem = ({ menuitem }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(cartActions.addItem(menuitem?.card?.info));
  }

  return (
    <div className="w-[800px] my-3 rounded-lg bg-gray-100 border-1 border-solid border-gray-500 flex items-center justify-between hover:bg-orange-100">
      <img
        className="h-40 mx-3 my-3 rounded-lg border-1 border-solid border-gray-300"
        src={IMG_URL + menuitem.card.info.imageId}
      />
      <div className="w-full flex flex-col items-start">
        <h2 className="m-0 mb-2 text-black text-xl font-bold">
          {menuitem.card.info.name}
        </h2>
        <h4 className="m-0 mb-1 text-black text-sm">
          {menuitem.card.info.category}
        </h4>
        <p className="m-0 mb-0 text-gray-500 text-sm">
          {menuitem.card.info.description}
        </p>
      </div>
      <h2 className="mx-2 my-0 w-48 text-black text-2xl">{menuitem?.card?.info?.defaultPrice ? menuitem?.card?.info?.defaultPrice / 100 : menuitem?.card?.info?.price / 100}</h2>
      <button className="mx-3 px-3 py-2 rounded-lg bg-green-700 text-white border-1 border-transparent border-solid hover:bg-green-900" onClick={handleAddItem}>
        Select
      </button>
    </div>
  );
};
