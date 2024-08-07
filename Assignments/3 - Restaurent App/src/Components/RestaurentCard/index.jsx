import RatingIcon from "../../Assets/rating.png";
import DotIcon from "../../Assets/dot.png";
import LocationIcon from "../../Assets/location.png";
import VegIcon from "../../Assets/veg.png";
import NonVegIcon from "../../Assets/non-veg.png";
import { constant } from "../../Constant/constant.js";
import React from "react";
import { Link } from "react-router-dom";

const RestaurentCard = React.memo((props) => {
  const { info } = props.data;
  const { Restro_Image_URL } = constant;

  return (
    <Link to={"/restaurent/" + info.id}>
      <div className="restroCard poppins-regular">
        <div className="restro_Img_Container">
          <img
            src={Restro_Image_URL + info.cloudinaryImageId}
            alt="Restro Image"
            srcSet={Restro_Image_URL + info.cloudinaryImageId}
          />
          <div className="fFPUzA gzvYBM poppins-bold">
            <p>
              {info.aggregatedDiscountInfoV3?.header}{" "}
              {info.aggregatedDiscountInfoV3?.subHeader}
            </p>
          </div>
        </div>
        <div className="restro_Detail_Container poppins-bold">
          <div className="restroName_Row">
            <img src={info?.veg ? VegIcon : NonVegIcon} alt="RestroType" />
            <p className="restroName">{info.name}</p>
          </div>
          <div className="restroRating">
            {info?.avgRating && (
              <>
                <img src={RatingIcon} alt="Rating" srcSet={RatingIcon} />
                <p>{info?.avgRating}</p>
              </>
            )}
            <img src={DotIcon} alt="Dot" srcSet={DotIcon} />
            <p>{info?.sla?.slaString}</p>
          </div>
          <div className="restroCausines">
            <p>{info?.cuisines.join(", ")}</p>
          </div>
          <div className="restroLocation">
            <img src={LocationIcon} alt="Location" srcSet={LocationIcon} />
            <p>{info?.locality}</p>
          </div>
        </div>
      </div>
    </Link>
  );
});

export default RestaurentCard;
