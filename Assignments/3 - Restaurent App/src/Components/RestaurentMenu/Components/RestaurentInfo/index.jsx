import { constant } from "../../../../Constant/constant.js";
import RatingIcon from "../../../../Assets/rating.png";
import DotIcon from "../../../../Assets/dot.png";
import LocationIcon from "../../../../Assets/location.png";

const RestaurentInfo = ({ restaurentDetail, restaurentID }) => {
  return (
    <div className="restaurent-wrapper">
      <div className="restro-detail">
        <img
          src={constant.Restro_Image_URL + restaurentDetail.cloudinaryImageId}
          alt="Restaurent Pic"
        />
        <div className="restro-info">
          <p className="restro-name">{restaurentDetail?.name}</p>
          <p>{"Restaurent Id : " + restaurentID}</p>
          <div className="restroRating">
            {restaurentDetail?.avgRating && (
              <>
                <img src={RatingIcon} alt="Rating" srcSet={RatingIcon} />
                <p>{restaurentDetail?.avgRating}</p>
              </>
            )}
            <img src={DotIcon} alt="Dot" srcSet={DotIcon} />
            <p>{restaurentDetail?.sla?.slaString}</p>
          </div>
          <div className="restroCausines">
            <p>{restaurentDetail?.cuisines.join(", ")}</p>
          </div>
          <div className="restroLocation">
            <img src={LocationIcon} alt="Location" srcSet={LocationIcon} />
            <p>{restaurentDetail?.locality}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentInfo;
