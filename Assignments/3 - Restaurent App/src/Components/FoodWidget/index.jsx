import { constant } from "../../Constant/constant.js";

const FoodWidget = (props) => {
  const { data } = props;
  const { Restro_Image_URL } = constant;

  return (
    <div className="foodWidget poppins-bold">
      <img src={Restro_Image_URL + data.imageId} alt="" srcSet="" />
    </div>
  );
};

export default FoodWidget;
