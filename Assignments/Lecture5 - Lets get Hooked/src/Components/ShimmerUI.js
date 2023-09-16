import { useId } from "react";
import { shimmer_card_unit } from "../constant/constant";
import "../shimmer-animate.css";

const ShimmerCard = () => {
  return (
    <div className="h-96 w-80 mx-4 my-4 bg-gray-100 border-solid border-1 border-gray-400 rounded-lg flex flex-col justify-center items-center">
      <div className="h-96 w-72 mt-3 mb-2 rounded-lg bg-gray-400 border-solid border-1 border-gray-400 stroke-img animate"></div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="h-8 w-60 my-2 rounded-lg bg-gray-400 border-solid border-0 border-gray-400 stroke-text animate"></div>
        <div className="h-8 w-60 my-2 rounded-lg bg-gray-400 border-solid border-0 border-gray-400 stroke-text animate"></div>
        <div className="h-8 w-60 my-2 rounded-lg bg-gray-400 border-solid border-0 border-gray-400 stroke-text animate"></div>
        <div className="h-8 w-60 my-2 rounded-lg bg-gray-400 border-solid border-0 border-gray-400 stroke-text animate"></div>
      </div>
    </div>
  );
};

const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap">
      {new Array(shimmer_card_unit).fill(0).map(() => {
        return <ShimmerCard key={"ShimmerCard-" + useId()} />;
      })}
    </div>
  );
};

export default ShimmerUI;
