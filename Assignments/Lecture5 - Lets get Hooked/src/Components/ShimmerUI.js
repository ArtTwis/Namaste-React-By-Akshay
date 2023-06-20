import { useId } from "react";
import { shimmer_card_unit } from "../constant/constant";

// Shimmer card to display with animation
const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

const ShimmerUI = () => {
  return (
    <div className="resturantList">
      {new Array(shimmer_card_unit).fill(0).map(() => {
        return <ShimmerCard key={"ShimmerCard-" + useId()} />;
      })}
    </div>
  );
};

export default ShimmerUI;
