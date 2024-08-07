import FoodVillaLogo from "../../Assets/food_villa1.png";
import { NavLinks } from "../../Constant/data.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo_Container flex-center">
        <img src={FoodVillaLogo} alt="Food Villa" srcSet="" />
        <h1 className="modern-antiqua-bold">Food Villa</h1>
      </div>
      <div className="navLink_Container">
        <ul className="nav-items">
          {NavLinks.map((link, index) => (
            <Link
              to={link.href}
              key={"nav-link-" + index}
              className="poppins-bold"
            >
              <li>
                <img src={link.icon} alt="NavIcon" srcSet={link.icon} />
                {link.navlink}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
