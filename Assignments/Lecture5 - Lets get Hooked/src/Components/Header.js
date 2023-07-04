import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import useConnection from "../hooks/useConnection";

const loginUser = () => {
  // call an API to make user login/logout
};

export const HeaderComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  const connection = useConnection();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/profile">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          {connection ? <li>🟢</li> : <li>🔴</li>}
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
