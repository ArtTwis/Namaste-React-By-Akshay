import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const loginUser = () => {
  // call an API to make user login/logout
};

export const HeaderComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          {isLogin ? (
            <li onClick={() => setIsLogin(false)}>Logout</li>
          ) : (
            <li onClick={() => setIsLogin(true)}>Login</li>
          )}
        </ul>
      </div>
    </div>
  );
};
