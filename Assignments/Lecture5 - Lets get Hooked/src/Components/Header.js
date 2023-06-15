import { useState } from "react";
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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
