import FoodVillaLogo from "../../Assets/food_villa1.png";
import { navLinks } from "./navLink";

const Header = () => {
  return (
    <header>
      <div className="logo_Container flex-center">
        <img src={FoodVillaLogo} alt="Food Villa" srcSet="" />
        <h1 className="modern-antiqua-bold">Food Villa</h1>
      </div>
      <div className="navLink_Container">
        <ul className="nav-items">
          {navLinks.map((link) => (
            <a href={link.href} className="poppins-bold">
              <li>{link.navlink}</li>
            </a>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
