import {useRouteError, useNavigate} from "react-router-dom";
import Smile from "../../media/smile100.png";

const NotFound = () => {
  const {error} = useRouteError();

  const navigate = useNavigate();
  
  const navigateToHomepage = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <div className="not-found-img-container">
        <img src={Smile} alt="Page Not Found" />
      </div>
      <div className="not-found-content">
        <h1>You've found a page that doesn't exist</h1>
        <h4>{error.message}</h4>
        <h3>Breath in, and on the breath out, go back and try again.</h3>
      </div>
      <button onClick={navigateToHomepage}>Go back home</button>
    </div>
  );
};

export default NotFound;
