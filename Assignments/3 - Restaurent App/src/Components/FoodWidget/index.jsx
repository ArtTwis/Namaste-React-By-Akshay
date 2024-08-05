import { constant } from "../../Constant/constant.js";

const FoodWidget = (props) => {
  const { data } = props;
  const { Restro_Image_URL } = constant;

  console.log("data :>> ", data);

  return (
    <div className="foodWidget poppins-bold">
      <img src={Restro_Image_URL + data.imageId} alt="" srcset="" />
    </div>
  );
};

export default FoodWidget;
