import { useRouteError } from "react-router-dom";
import PageNotFoundSVG from "../../Assets/page_not_found.svg";

const PageNotFound = () => {
  const err = useRouteError();
  console.log("err :>> ", err);

  return (
    <div id="pageNotFound" className="modern-antiqua-bold">
      <img src={PageNotFoundSVG} alt="Not Found" />
      <h1>Ooops!! Page Not Found</h1>
      <h2>{err.error.message}</h2>
    </div>
  );
};

export default PageNotFound;
